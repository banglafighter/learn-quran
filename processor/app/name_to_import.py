import os

path = 'D:\open-source\learn-quran\\application\\base-app\\app\\assets\\audio\horkot-practice\\tmp'
for file in os.listdir(path):
    file = str(file)
    # source_file = os.path.join(path, file)
    # new_name = f"cps-{file}"
    # destination_file = os.path.join(path, new_name)
    # os.rename(source_file, destination_file)
    # file = new_name

    file_name = file.replace(".mp3", "")
    temp = file_name.split('-')
    res = temp[0] + ''.join(ele.title() for ele in temp[1:])
    res = str(res)
    import_name = f"import {res} from \"../../assets/audio/horkot-practice/{file}\""
    print(import_name)
