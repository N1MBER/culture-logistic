docker login --username oauth --password AQAAAABdFTGtAATuwYlOKmsz0UjXlyjBebbh0Go cr.yandex
docker build -t cl-frontend .
docker tag cl-frontend cr.yandex/crpvgo6omv9sh76aj9ib/cl-frontend
docker push cr.yandex/crpvgo6omv9sh76aj9ib/cl-frontend:latest
