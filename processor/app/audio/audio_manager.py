from pydub import AudioSegment


def split_audio(start_second, end_second, audio_file, export_name=None):
    mp3_audio = AudioSegment.from_file(audio_file, format="mp3")
    start = start_second * 1000
    end = end_second * 1000
    spit_audio = mp3_audio[start:end]
    if not export_name:
        export_name = f"{start_second}-{end_second}"
    spit_audio.export(f"{export_name}.mp3", format="mp3")
    print(f"Done {export_name}")


data_map = [
    {"start": 3, "end": 6},
    {"start": 6, "end": 9},
    {"start": 9.10, "end": 12.5},
    {"start": 13, "end": 15.15},
    {"start": 16, "end": 18.90},
    {"start": 19.50, "end": 22.5},
    {"start": 23, "end": 25.50},
    {"start": 25.60, "end": 28.50},
    {"start": 28.55, "end": 31.50},
    {"start": 31.55, "end": 34.50},
    {"start": 35, "end": 38},
    {"start": 38, "end": 40.50},
]

index = 1
for data in data_map:
    start = data["start"]
    end = data["end"]
    split_audio(start, end, "mp3_files/jobor-pronounce-diff.mp3", export_name=f"fds-{index}")
    index = index + 1

