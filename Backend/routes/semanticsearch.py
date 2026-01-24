import os
from dotenv import load_dotenv
from langchain_huggingface import HuggingFaceEndpointEmbeddings
import pickle
import numpy as np

load_dotenv()

def load_embeddings(file_path):
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"Embeddings file not found at {file_path}")
    with open(file_path, "rb") as f:
        data = pickle.load(f)
    print("Loaded embeddings from", file_path, "with", len(data['embeddings']), "embeddings.")
    return data['chunks'], data['embeddings'], data['model_name']

def embed_texts_with_huggingface(text):
    hf_token = os.getenv("HF_TOKEN")
    if not hf_token:
        raise ValueError("HF_TOKEN not found in environment variables.")
    
    embeddings = HuggingFaceEndpointEmbeddings(
        model="sentence-transformers/all-MiniLM-L6-v2",
        huggingfacehub_api_token=hf_token
    )
    
    embedded_text = embeddings.embed_query(text)
    return embedded_text

def cosine_similarity_numpy(vec1, vec2):
    vec1 = np.array(vec1)
    vec2 = np.array(vec2)
    dot_product = np.dot(vec1, vec2)
    norm_vec1 = np.linalg.norm(vec1)
    norm_vec2 = np.linalg.norm(vec2)
    if norm_vec1 == 0 or norm_vec2 == 0:
        return 0.0
    return dot_product / (norm_vec1 * norm_vec2)

def top_k_chunks(query_embedding, chunk_embeddings, chunks, k=3):
    similarities = []
    for idx, chunk_embedding in enumerate(chunk_embeddings):
        sim = cosine_similarity_numpy(query_embedding, chunk_embedding)
        similarities.append((idx, sim))  # Store as (index, score)
    
    # Sort by similarity score (x[1]) in descending order
    similarities.sort(key=lambda x: x[1], reverse=True)
    
    results = []
    for idx, score in similarities[:k]:  # CORRECT unpacking: idx, score
        results.append({
            'chunk': chunks[idx],  # Direct access from chunks list
            'score': score,
            'index': idx
        })
    
    return results

def main():
    # Unpack all three return values
    chunks, chunk_embeddings, model_name = load_embeddings("Backend/routes/chunk_embeddings.pkl")
    
    prompt_embedding = embed_texts_with_huggingface(
        "Tell me where Gaurav used Python with FastAPI in his projects."
    )
    
    print("Prompt embedding shape:", len(prompt_embedding))
    print("First 5 values:", prompt_embedding[:5])
    
    # Pass all required parameters
    top_chunks = top_k_chunks(prompt_embedding, chunk_embeddings, chunks, k=3)
    
    print(f"\nTop 3 similar chunks:")
    for i, result in enumerate(top_chunks, 1):
        print(f"\n--- Result {i} ---")
        print(f"Index: {result['index']}")
        print(f"Score: {result['score']:.4f}")
        print(f"Content preview:")
        print(result['chunk'] + "...")

if __name__ == "__main__":
    main()