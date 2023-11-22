from openai import OpenAI
import os

api_key = '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'
os.environ["OPENAI_API_KEY"] = api_key
client = OpenAI()

audio_file= open("Hello.mp3", "rb")
transcript = client.audio.transcriptions.create(
  model="whisper-1", 
  file=audio_file, 
  response_format="text"
)
with open("transcription.txt", "w", encoding="utf-8") as text_file:
    text_file.write(transcript)

print("Transcription saved to transcription.txt")