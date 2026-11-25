# Trương Huy Thịnh - Engineering Portfolio

English-only static portfolio built with HTML, CSS, JavaScript, and inline SVG. Open `index.html` directly; no build step or external website libraries are required.

## Published copies

Root `index.html` serves GitHub Pages and the Nginx container. `portfolio-v2/index.html` is a matching copy; its CV download link uses a relative path to the shared PDF. Keep both copies synchronized. GitHub Actions deploys root on pushes to `main`.

There is no language switch, translation dictionary, or language preference stored in localStorage. Edit English content directly in HTML, including diagram text and accessibility labels. Preserve the candidate's name and confirmed facts.

## Case-study structure

Customer Setting, Game Aggregator, Mail Station, and Data Warehouse use six sections:

1. Context & current challenges
2. Legacy system
3. Improvement approach
4. Individual contribution
5. New system
6. Outcome

Separate individual implementation from team results and existing platform capabilities. Keep approximate metrics qualified. Do not add unconfirmed protocols, service topologies, infrastructure ownership, or performance guarantees.

## Game Aggregator

Participation: 2024 to January 2025. Full-stack work focused on Vendor integrations, game-event ingestion, and migration of legacy Game Aggregator functionality from .NET Framework 4 to .NET 8. Vendor game code and engines such as Cocos/Unity were outside the migration scope. Around 20 Vendors and nearly 1,000 games describe platform scope, not individual delivery counts.

Licensees can use the company's paid default Game Portal or build their own. Launch requests pass through Licensee Portal -> Game Aggregator -> Vendor. After launch, Players interact directly with Vendor games. Vendors process events and send results to Aggregator, which records them in SQL DB and forwards them to Licensees for recording/reconciliation. The architecture overview and separate launch/gameplay sequences reflect these different routes.

Existing tracing pipeline: application services produce to Kafka -> Logstash Kafka input consumes directly -> Elasticsearch stores/indexes logs; Kibana queries Elasticsearch. No separate consumer service is depicted. Logstash pipeline configuration is separate from .NET application code. Vendor-specific reconciliation jobs send Telegram alerts for manual investigation.

## Mail Station

Clients fetch current job information, cron, and HoldOn status through Request/Response at startup; Admin must be ready first. Pub/Sub carries cron changes, Run/Stop/Cancel, heartbeats, TemporaryHoldOn, and ContinueWorking. Clients check cancellationToken at defined steps and pass it to cancellation-aware asynchronous calls.

Admin persists HoldOn before publishing TemporaryHoldOn. Clients request cancellation, stop cron, and wait; Run/Stop controls are disabled while held. Admin persists Normal before publishing ContinueWorking after DBA confirmation. Clients reuse startup to clear old messages, fetch current configuration/state, and restore cron. This is operator-controlled recovery, not automatic readiness detection or checkpoint-based job continuation.

Heartbeat arrives every minute. Admin records the latest arrival by Job ID; Job List shows Not Available after more than five minutes without heartbeat. This is an availability signal, not proof a process has died.

## Customer Setting and Data Warehouse

Customer Setting separates configuration-driven integration improvements through early 2024 from technology/infrastructure modernization from 2024. The latter retired two Windows Server machines after moving to on-premises Linux. Logical diagrams do not imply physical database schemas or Kubernetes topology.

Data Warehouse separates the web process from queued export services. Application/export/monitoring implementation belongs to the candidate; database splitting and stored-procedure tuning belong to the Database team. Performance and memory figures reflect approximate reported operation.

## CV and portfolio export

The English CV download points to `output/pdf/Thinh-Truong-CV.pdf`. It is a two-page, single-column resume focusing on four case studies. Additional project summaries remain on the website. The portfolio print button includes all case studies in navigation order and all Mail Station workflows. Ctrl+P defaults to the profile only.

After changing profile content, regenerate the PDF from repository root:

```powershell
python scripts/build_cv_pdf.py
```

The generator reads English HTML directly and requires `reportlab`. It uses Arial on Windows or DejaVu Sans on Linux. For visual QA and text extraction, use PyMuPDF or Poppler. Render and inspect the final PDF; verify contact details, dates, project scope, and reading order. Temporary QA output belongs under ignored `tmp/`.
