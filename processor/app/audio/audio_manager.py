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
    {"start": 2.40, "end": 5.10},
    {"start": 5.40, "end": 7.80},
    {"start": 7.90, "end": 10.30},
    {"start": 10.50, "end": 12.80},
    {"start": 12.85, "end": 15.50},
    {"start": 15.55, "end": 18.50},
    {"start": 18.55, "end": 21.05}, # 7
    {"start": 21.15, "end": 24.10},
    {"start": 24.10, "end": 26.60}, #9
    {"start": 26.70, "end": 29.50},
    {"start": 29.55, "end": 32.40},
    {"start": 32.45, "end": 34.65},
    {"start": 34.80, "end": 37.20},
    {"start": 37.50, "end": 39.50},
]

index = 1
for data in data_map:
    start = data["start"]
    end = data["end"]
    split_audio(start, end, "mp3_files/pesh-pronounce-diff.mp3", export_name=f"dds-{index}")
    index = index + 1

