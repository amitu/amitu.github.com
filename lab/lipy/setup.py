from setuptools import setup, find_packages

setup(
    name = "amitu.lipy",
    description = "Lipy - Pythonic Lisp",
    version = "0.0.1a2",
    author = 'Amit Upadhyay',
    author_email = "upadhyay@gmail.com",

    url = 'http://amitu.com/lab/lipy/',
    license = 'BSD',

    namespace_packages = ["amitu"],
    packages = find_packages(),

    zip_safe = True,

    entry_points={
        'console_scripts': [
            'lipy = amitu.lipy:main',
        ]
    },
)
