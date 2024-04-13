import os.path
import pathlib
from setuptools import setup, find_packages


CURRENT_DIR = pathlib.Path(__file__).parent
long_description = ""

env = os.environ.get('source')


def get_dependencies():
    dependency = []

    if env and env == "code":
        return dependency

    return dependency + []


setup(
    name='processor',
    version='0.0.1',
    long_description=long_description,
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    platforms='any',
    install_requires=get_dependencies(),
    classifiers=[]
)
