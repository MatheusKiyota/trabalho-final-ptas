# API DE TREINO
    Desenvolvida para gerenciar treinos de academia e salvar todos os treinos realizados. Contendo as funções de criar um treino, listar, atualizar e excluir, permitindo ao usuário que possa inserir o nome de seu treino e a duração em que ele teve.
 
# LINK GITHUB PROJETO
https://github.com/MatheusKiyota/trabalho-final-ptas

# Testar métodos POST, GET, PUT e DELETE no postman

POST:
http://localhost:4000/treinos
    {
     "nome": "ombro",
     "duracao": "40 minutos"
    }
    
Resultado:

    {
     "message": "Treino de ombro criado!"
    }


GET:
http://localhost:4000/treinos
Resultado:
     {
     "ombro": {
    "nome": "ombro",
    "duracao": "40 minutos"
     }
 }


GET(TREINO ESPECÍFICO)
http://localhost:4000/treinos/ombro
Resposta:
{
 "nome": "ombro",
 "duracao": "40 minutos"
}


PUT:
http://localhost:4000/treinos/ombro
    {
     "duracao": "50 minutos"
    }

Resultado:

    {
     "message": "Treino de ombro atualizado com sucesso!"
    }


DELETE:
http://localhost:4000/treinos/ombro
Resposta:
    {
    "message": "Treino de ombro excluído com sucesso!"
    }


