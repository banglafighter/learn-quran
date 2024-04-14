import os.path

number_to_name = {
    "1": "alif",
    "2": "ba",
    "3": "ta",
    "4": "sa",
    "5": "jim",
    "6": "ha",
    "7": "kh",
    "8": "dal",
    "9": "jal",
    "10": "ro",
    "11": "jha",
    "12": "sin",
    "13": "shin",
    "14": "sod",
    "15": "dod",
    "16": "to",
    "17": "jo",
    "18": "aen",
    "19": "gaen",
    "20": "fa",
    "21": "kof",
    "22": "kaf",
    "23": "lam",
    "24": "mim",
    "25": "nun",
    "26": "owao",
    "27": "haa",
    "28": "hamja",
    "29": "ea"
}

import_name = ""
path = "D:\\open-source\\learn-quran\\application\\base-app\\app\\assets\\audio\\kasrah\\double"
for number in number_to_name:
    name = number_to_name[number]
    file_name = f"{name}-kd.mp3"
    original_name = f"{number}.mp3"
    import_name += f"import {name}KD from \"../../assets/audio/kasrah/double/{file_name}\"\n"

    source_file = os.path.join(path, original_name)
    destination_file = os.path.join(path, file_name)
    os.rename(source_file, destination_file)

print(import_name)
