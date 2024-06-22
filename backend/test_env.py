import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

# Print a test environment variable
print(os.getenv('DATABASE_NAME'))
