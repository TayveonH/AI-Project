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
    input="I love Python, OpenAI is so helpful",
)

# Save the generated speech to a file
response.stream_to_file(speech_file_path)
