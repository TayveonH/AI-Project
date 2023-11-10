import os
import sys

import constants
from langchain.indexes import VectorstoreIndexCreator
from langchain.document_loaders import TextLoader
from langchain.document_loaders import DirectoryLoader
from langchain.llms import openai
from langchain.chat_models import ChatOpenAI



os.environ["OPENAI_API_KEY"] = constants.APIKEY

query = sys.argv[1]


loader = DirectoryLoader("", glob="*.txt")
index = VectorstoreIndexCreator().from_loaders([loader])

print(index.query(query, llm=ChatOpenAI()))