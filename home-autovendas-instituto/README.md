# Instituto Braga — Landing page (frontend / protótipo)

Frontend em React + Vite. **Não há backend**: agenda, reserva, envio de dados e pagamento são apenas interface.

## Rodar
```bash
npm install
npm run dev
```

## Fotos do Dr. Guilherme Braga
Coloque os arquivos em `public/images/`:
- `dr-guilherme-braga-hero.jpg` (hero, de preferência recorte com fundo escuro/transparente)
- `dr-guilherme-braga-sobre.jpg` (seção "Sobre o médico")

Caminhos configuráveis em `src/config/siteConfig.js`. Sem os arquivos, aparece um espaço reservado.

## Onde mexer
| Arquivo | Função |
|---|---|
| `src/config/siteConfig.js` | Link do WhatsApp, links de política/termos, imagens, endereço |
| `src/data/demoData.js` | **Dados de demonstração** (tratamentos, FAQ, horários fictícios, modalidades) |
| `src/services/bookingService.js` | **Pontos de integração**: disponibilidade, reserva/liberação, envio de dados, checkout, confirmação/evento na agenda |
| `src/components/booking/*` | Fluxo de agendamento em 3 etapas |

Pontos a validar com o Instituto: modalidades (presencial/online são demonstração), campos do formulário, valor da consulta, URLs de política/termos.
