docker login --username oauth --password AQAAAABdFTGtAATuwYlOKmsz0UjXlyjBebbh0Go cr.yandex
docker build -t cl-backend .
docker tag cl-backend cr.yandex/crpvgo6omv9sh76aj9ib/cl-backend
docker push cr.yandex/crpvgo6omv9sh76aj9ib/cl-backend:latest
