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
    {"start": 2.10, "end": 5.15},
    {"start": 5.20, "end": 8.10},
    {"start": 8.15, "end": 11.5},
    {"start": 11.6, "end": 13.60},
    {"start": 13.60, "end": 16},
    {"start": 16, "end": 18.30},
    {"start": 18.30, "end": 21.10},
    {"start": 21.10, "end": 23.70},
    {"start": 23.70, "end": 26.10},
    {"start": 26.10, "end": 28.40},
    {"start": 28.60, "end": 31},
    {"start": 31, "end": 33.10},
    {"start": 33.30, "end": 35.70},
    {"start": 35.80, "end": 38.20},
]

index = 1
for data in data_map:
    start = data["start"]
    end = data["end"]
    split_audio(start, end, "mp3_files/jer-pronounce-diff.mp3", export_name=f"kds-{index}")
    index = index + 1

