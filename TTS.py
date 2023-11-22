from pathlib import Path
import openai

# Set your OpenAI API key
openai.api_key = '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' 

# Define the path to the speech file
speech_file_path = Path(__file__).parent / "speech.mp3"

# Generate speech using OpenAI API
response = openai.audio.speech.create(
    model="tts-1",
    voice="alloy",
    input="My name is Mr Dan Wu and Tayveon, Aleks and Kevin are the best students I could ask for!",
)

# Save the generated speech to a file
response.stream_to_file(speech_file_path)
