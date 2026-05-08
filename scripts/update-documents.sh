#!/usr/bin/env bash
set -euo pipefail

cp /home/pvilloslada/5_Datos/CV/CV.pdf documents/pablo-villoslada-blanco-cv.pdf
cp /home/pvilloslada/5_Datos/CV/CVN_english.pdf documents/pablo-villoslada-blanco-cvn-english.pdf
cp /home/pvilloslada/5_Datos/CV/CVA_english_AEI.pdf documents/pablo-villoslada-blanco-cva-aei.pdf
cp /home/pvilloslada/5_Datos/CV/CVA_english_ISCIII.pdf documents/pablo-villoslada-blanco-cva-isciii.pdf

printf 'Documents updated. Review, commit and push to publish.\n'
