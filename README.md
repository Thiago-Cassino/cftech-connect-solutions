EnemLab

O EnemLab é m sistema pensado para auxiliar estudantes na preparação para o Exame Nacional do Ensino Médio (Enem), por meio de uma plataforma de treinamento com resolução de questões e simulados.


## Integrantes
<!-- Liste todos os integrantes do grupo no formato Nome - Matrícula -->
- Thiago Silva Cassino - 12400920
- Bernardo Coelho Simões - 12302279
- Leonardo Augusto Santana - 12301310
- Nome do Aluno 4 - Matrícula

## Estrutura de Diretórios
<!-- Mostre a estrutura básica do projeto -->
```
projeto/
├── src/               # Código-fonte principal
├── docs/              # Documentação
├── tests/             # Testes automatizados 
├── README.md          # Arquivo de descrição do projeto
└── requirements.txt   # Dependências do projeto (se houver)
```

O preojeto é feito em blazor e será um site web para pc.

### 1. Pré-requisitos

  - Linguagem/Versão utilizada
  - C# (versão 10 ou superior)
  - Blazor WebAssembly (.NET 8)

  - Dependências necessárias
  - SDK do .NET 8 instalado
  - Visual Studio 2022 (ou VS Code com extensão C#)
  - Pacotes NuGet:
    - Microsoft.AspNetCore.Components.Web
    - Microsoft.EntityFrameworkCore
    - Microsoft.EntityFrameworkCore.SqlServer
    - Microsoft.EntityFrameworkCore.Tools

  - Banco de dados
  - SQL Server (LocalDB ou versão completa)
  - Ferramenta recomendada: SQL Server Management Studio (SSMS)

### 2. Instalação

```bash
# Clone o repositório
git clone https://github.com/yBelloni/PitchEnemLabWebApp

# Acesse a pasta do projeto
cd EnemLab

# Restaure as dependências do projeto
dotnet restore

# Crie o banco de dados local
dotnet ef database update

# Execute o projeto
dotnet run

### 3. Execução

```bash
# Execute o projeto
dotnet run

# Após a execução, acesse no navegador:
# https://localhost:5001 ou http://localhost:5000

### 4. Acesso
<!-- Informe como acessar a aplicação (por exemplo, URL local ou credenciais de teste) -->

- **URL local:** http://localhost:5000 ou https://localhost:5001
- **Usuário padrão:** admin
- **Senha padrão:** admin123

---
