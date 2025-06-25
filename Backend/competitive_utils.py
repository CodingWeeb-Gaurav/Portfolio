from datetime import datetime, timezone
import requests
from bs4 import BeautifulSoup #for web scraping
# ----------- LeetCode -----------
def get_leetcode_stats(username: str):
    url = f"https://leetcode-stats-api.herokuapp.com/{username}"
    try:
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            return {
                "username": username,
                "totalSolved": data.get("totalSolved", 0),
                "easySolved": data.get("easySolved", 0),
                "mediumSolved": data.get("mediumSolved", 0),
                "hardSolved": data.get("hardSolved", 0),
                # "ranking": data.get("ranking", "N/A")
            }
        else:
            return {"error": "LeetCode user not found or API limit exceeded."}
    except Exception as e:
        return {"error": str(e)}

# ----------- Codeforces -----------
def get_codeforces_stats(username: str):
    user_url = f"https://codeforces.com/api/user.info?handles={username}"
    rating_url = f"https://codeforces.com/api/user.rating?handle={username}"

    try:
        user_response = requests.get(user_url)
        rating_response = requests.get(rating_url)

        if user_response.status_code == 200:
            user_info = user_response.json()["result"][0]
            rating_data = []

            if rating_response.status_code == 200:
                rating_data = rating_response.json().get("result", [])

            graph_points = [
                {
                    "contestId": r["contestId"],
                    "contestName": r["contestName"],
                    "rating": r["newRating"],
                    "rank": r["rank"],
                    "date": datetime.fromtimestamp(r["ratingUpdateTimeSeconds"], tz=timezone.utc).strftime("%Y-%m-%d")
                }
                for r in rating_data
            ]

            return {
                "username": user_info["handle"],
                "rating": user_info.get("rating", "Unrated"),
                "maxRating": user_info.get("maxRating", "Unrated"),
                "rank": user_info.get("rank", "Unknown"),
                "profile": f"https://codeforces.com/profile/{username}",
                "avatar_url": user_info.get("titlePhoto", ""),  # ✅ <-- avatar link
                "ratingHistory": graph_points
            }
        else:
            return {"error": "Codeforces user not found."}
    except Exception as e:
        return {"error": str(e)}

    
# ----------- CodeChef -----------
def get_codechef_stats(username: str):
    url = f"https://www.codechef.com/users/{username}"
    try:
        response = requests.get(url)
        if response.status_code != 200:
            return {"error": "CodeChef user not found."}

        soup = BeautifulSoup(response.text, 'html.parser')

        rating = soup.find("div", class_="rating-number").text.strip()
        max_rating = soup.find("div", class_="rating-header").find_all("small")[0].text.strip().split()[-1].rstrip(')')
        stars = soup.find("span", class_="rating").text.strip().split()[0]

        # Correct avatar extraction using the updated class
        avatar_tag = soup.find("img", class_="profileImage")
        avatar_url = avatar_tag["src"] if avatar_tag else None

        return {
            "username": username,
            "rating": rating,
            "maxRating": max_rating,
            "stars": stars,
            "avatar": avatar_url,
            "profile": f"https://www.codechef.com/users/{username}"
        }

    except Exception as e:
        return {"error": str(e)}

# URLs
# http://localhost:8000/competitive/cf/Gaurav_KG
# http://localhost:8000/competitive/lc/gkg11092002
# http://localhost:8000/competitive/cc/klad_753
