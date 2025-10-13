FROM python:3.12-slim

# Installer uv
RUN pip install uv

WORKDIR /app

# Copier ton fichier de gestion des deps
COPY pyproject.toml uv.lock ./

# Installer les dépendances
RUN uv sync --no-dev --frozen

# Copier le reste du projet
COPY . .

EXPOSE 8000

# Lancer le serveur via uv
CMD ["uv", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]
