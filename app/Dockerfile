FROM fidelissauro/apko-go:latest-amd64 AS builder

WORKDIR /root/src/app

# Copia os arquivos da aplicação
COPY . ./

# Atualiza as dependências do Go (substitui o obsoleto "go get -u")
RUN go mod tidy

# Compila a aplicação de forma estática
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .

# Imagem final, mais enxuta
FROM fidelissauro/apko-run:latest-amd64

# Copia o binário da etapa anterior
COPY --from=builder /root/src/app/main ./

EXPOSE 8080

ENTRYPOINT ["./main"]
