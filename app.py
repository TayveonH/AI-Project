from flask import Flask, render_template, request
from openai import OpenAI
import os

app = Flask(__name__)

# Set your OpenAI API key
api_key = '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 '
os.environ["OPENAI_API_KEY"] = api_key
client = OpenAI()

@app.route('/')
def index():
    return render_template('test.html')

@app.route('/transcribe', methods=['POST'])
def transcribe():
    if 'file' not in request.files:
        return "No file part"

    audio_file = request.files['file']

    if audio_file.filename == '':
        return "No selected file"

    transcription = client.audio.transcriptions.create(
        model="whisper-1",
        file=audio_file,
        response_format="text"
    )

    return render_template('test.html', transcription=transcription)

if __name__ == '__main__':
    app.run(debug=True)
