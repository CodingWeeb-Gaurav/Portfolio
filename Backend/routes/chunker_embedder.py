# from langchain_core import document_loaders
from langchain_community.document_loaders import TextLoader
# from langchain_text_splitters import RecursiveCharacterTextSplitter  
import pickle
import numpy as np
from sentence_transformers import SentenceTransformer

#load the text file
def load_text_file(file_path):
    loader= TextLoader(file_path, encoding = "utf-8")
    documents = loader.load() # documents is a list of Document objects [{page_content: str, metadata: dict}, {page_content: str, metadata: dict}, ...]
    print ("Number of documents loaded:", len(documents))
    for doc in documents:
        # print (f"Document {file_path} loaded \n Metadata:", doc.metadata )
        print("The loaded document:", doc.page_content[0:100], " ..... \n", doc.page_content[-100:])  # Print first 100 characters of each document
    return documents

def custom_text_splitter(documents):
    doc = documents[0]
    text = doc.page_content
    lines = text.split("\n")
    
    chunks = []
    current_h1 = ""
    current_h2 = "" 
    current_h3 = ""
    current_content = []  # Changed from string to list
    
    for line in lines:
        # Save chunk BEFORE processing new heading at same or higher level
        if line.startswith('# '):
            # Save any existing chunk first
            if current_content:
                chunk_text = build_chunk_text(current_h1, current_h2, current_h3, current_content)
                chunks.append(chunk_text)
            
            # Reset for new H1
            current_h1 = line
            current_h2 = ""
            current_h3 = ""
            current_content = []
            
        elif line.startswith('## '):
            # Save any existing chunk first  
            if current_content:
                chunk_text = build_chunk_text(current_h1, current_h2, current_h3, current_content)
                chunks.append(chunk_text)
            
            # Reset for new H2
            current_h2 = line
            current_h3 = ""
            current_content = []
            
        elif line.startswith('### '):
            # Save any existing chunk first
            if current_content:
                chunk_text = build_chunk_text(current_h1, current_h2, current_h3, current_content)
                chunks.append(chunk_text)
            
            # Reset for new H3
            current_h3 = line
            current_content = []
            
        elif line.strip():  # Content line
            current_content.append(line)
    
    # Save the final chunk after loop ends
    if current_content:
        chunk_text = build_chunk_text(current_h1, current_h2, current_h3, current_content)
        chunks.append(chunk_text)

    with open("Backend/routes/custom_chunked_texts.txt", "w", encoding="utf-8") as f:
        for i, chunk in enumerate(chunks):
            f.write(f"_____ Chunk {i+1} _____\n")
            f.write(chunk + "\n\n")
    print("Number of chunks created by custom chunking function:", len(chunks))
    
    return chunks

def build_chunk_text(h1, h2, h3, content_lines):
    """Helper to build chunk text with appropriate headings"""
    parts = []
    if h1:
        parts.append(h1)
    if h2:
        parts.append(h2)
    if h3:
        parts.append(h3)
    parts.extend(content_lines)
    return "\n".join(parts)   
                
def generate_embeddings_locally(chunks):
    model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')
    print("Generating embeddings using model:", model, f"for {len(chunks)} chunks")
    embeddings = model.encode(chunks, show_progress_bar=True)
    print("Embeddings shape:", np.array(embeddings).shape)  # Should be (num_chunks, embedding_dim)
    with open("Backend/routes/chunk_embeddings.pkl", "wb") as f:
        pickle.dump({'chunks': chunks, 'embeddings': embeddings, 'model_name': model}, f)
    print("Embeddings saved to chunk_embeddings.pkl. Its length is:", len(embeddings))
    
    return embeddings

def main():
    documents = load_text_file("Backend/routes/GKGabout.md")
    # default_text_splitter(documents)
    chunks = custom_text_splitter(documents)
    generate_embeddings_locally(chunks)

if __name__ == "__main__":
    main()