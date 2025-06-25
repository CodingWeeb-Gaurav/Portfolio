from github import Github
from dotenv import load_dotenv
import os
from datetime import datetime, timedelta
from collections import defaultdict

load_dotenv()

GITHUB_USERNAME = os.getenv("GITHUB_USERNAME")
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")

g = Github(GITHUB_TOKEN)

def get_github_summary():
    user = g.get_user()
    repos = user.get_repos()
    
    summary = {
    "username": user.login,
    "avatar_url": user.avatar_url,
    "public_repos": [],
    "total_commits_last_30_days": 0,
    "top_languages": defaultdict(int)
}


    thirty_days_ago = datetime.now() - timedelta(days=30)

    for repo in repos:
        if repo.fork:
            continue

        repo_data = {
            "name": repo.name,
            "url": repo.html_url,
            "language": repo.language,
        }
        summary["public_repos"].append(repo_data)

        try:
            commits = repo.get_commits(since=thirty_days_ago)
            commit_count = commits.totalCount
            summary["total_commits_last_30_days"] += commit_count
        except:
            pass

        try:
            langs = repo.get_languages()  # Dict of {lang: bytes}
            for lang, bytes_count in langs.items():
                summary["top_languages"][lang] += bytes_count
        except:
            pass

    # Convert defaultdict to normal dict + sort languages by usage
    summary["top_languages"] = dict(
        sorted(summary["top_languages"].items(), key=lambda x: x[1], reverse=True)
    )

    return summary
