from pydub import AudioSegment

# Open an mp3 file
mp3_audio = AudioSegment.from_file("mp3_files/al-fatihah.mp3", format="mp3")

# pydub does things in milliseconds
start_seconds = 6.1 * 1000
end_second = 11.6 * 1000

# song clip of 10 seconds from starting
first_10_seconds = mp3_audio[start_seconds:end_second]

# save file
first_10_seconds.export("clip.mp3", format="mp3")
print("New Audio file is created and saved")
