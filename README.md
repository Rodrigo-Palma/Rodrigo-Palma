## Rodrigo Palma

Senior Data and AI Engineer in Porto Alegre, Brazil (UTC-3).

I build data platforms and LLM systems, and most of my time goes into the part that
decides whether they keep working: pipelines that rerun cleanly, retrieval you can
actually evaluate, and gates that stop a worse model from shipping.

[LinkedIn](https://linkedin.com/in/rodrigospalma/) · email.rodrigopalma@gmail.com

### Upstream open source

I fix bugs in the tools I use at work. 28 pull requests merged so far, in
[great-tables](https://github.com/posit-dev/great-tables/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged) (12),
[fsspec](https://github.com/fsspec/filesystem_spec/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged) (5),
[iceberg-python](https://github.com/apache/iceberg-python/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged) (3),
[tox](https://github.com/tox-dev/tox/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged) (2),
[delta-rs](https://github.com/delta-io/delta-rs/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged) (2),
[Pillow](https://github.com/python-pillow/Pillow/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[polars](https://github.com/pola-rs/polars/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[onnx](https://github.com/onnx/onnx/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged) and
[feast](https://github.com/feast-dev/feast/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
with more still open in huggingface/datasets, mlflow, pandera, litellm, kedro, sqlmesh,
dspy and lm-evaluation-harness.
Everything, merged and open:
[search](https://github.com/search?q=is%3Apr+author%3ARodrigo-Palma&type=pullrequests).

Three that show the kind of bug I go after:

- [delta-rs #4747](https://github.com/delta-io/delta-rs/pull/4747). The doc comment said a
  directory counts as a partition when it is named `partitionCol=value`, but the code only
  compared the prefix. With a partition column called `_date`, an unrelated `_dates_backup/`
  directory matched, lost the protection a leading underscore is supposed to give it, and
  became a deletion candidate for `vacuum`.
- [iceberg-python #3995](https://github.com/apache/iceberg-python/pull/3995). Rewriting a
  predicate to DNF distributed every `AND` over the `OR`s below it with nothing bounding the
  result. Twenty groups of two branches, about 40 predicates in all and a plausible size for a
  filter built from user input, expanded to 1,048,576 terms in 16.9s and about 1 GiB. The same input
  now fails in 0.22s against an explicit limit.
- [great-tables #869](https://github.com/posit-dev/great-tables/pull/869). `date_style="iso"`
  used the CLDR pattern `y`, which has no minimum width, so the year 999 rendered as
  `999-01-05` and the package's own ISO parser rejected the package's own output.

Most of them come from two habits: round-tripping a value through the library's own parser,
and reading what a function's name promises against what the body actually does.

### Projects

[quantlens](https://github.com/Rodrigo-Palma/quantlens) is a quant analyst over B3 (Brazilian
exchange) data running entirely on local models. Retrieval with guardrails, an offline eval
suite that CI enforces as a gate, and a benchmark that fails the build on regression (the offline
path end to end, no LLM call, p50 441 µs). Local models were a deliberate trade: no per-query cost and
no data leaving the machine, paid for with weaker generation, which is why the guardrails and
the evals exist at all. The decisions behind it are written down as
[ADRs](https://github.com/Rodrigo-Palma/quantlens/tree/main/docs/adr).

[anchora](https://github.com/Rodrigo-Palma/anchora) is retrieval over Brazilian public-law
documents, where an answer either carries its citations or abstains. My first fine-tune scored
0.92 and the number was wrong, because the split I measured on overlapped with training. On a
clean holdout the honest numbers are 0.818 citation correctness and 0.833 abstention, against
0.500 and 0.167 for the base model with few-shot prompting. `make eval-honest` reproduces every
arm from frozen generations with no GPU, and the promotion gate rejects the more cautious
10-example adapter because its citation accuracy falls to 0.636.

[market-elt](https://github.com/Rodrigo-Palma/market-elt) is market-data ELT on dbt and DuckDB,
where data-quality tests break the build instead of letting bad rows travel downstream.
Deliberately boring.

### Day job

Data and AI engineer at the public defender's office of Rio Grande do Sul. The systems are
internal and cannot be open sourced: ETL for data nobody could query before, analytics with NLP,
and the one I am responsible for, which measures excess caseload and allocates more than
R$85 million a year in compensation to public defenders. A wrong number there is not a bad chart;
it is somebody's pay, so most of the engineering went into making the comparison between units
hold up when a unit disputes its own result. I am a co-author on it: the criterion for comparing
units across defensorias came from a public defender, not from engineering. Second place in
digital innovation at the 2nd CNTI.Def / 5th Enastic, the Brazilian public-defender technology
conference, 2026.

### Before that

I trained as a psychologist, then spent about five years as the only developer of my own
PC-gaming e-commerce (backend, frontend, payments and the 2am operations), and moved into
public-sector systems and data after that. BSc in Computer Engineering, MSc in Big Data and
Business Intelligence.

### Stack

Proven in the repositories above: Python, SQL, PyTorch, FastAPI, dbt, DuckDB, Polars, Docker,
GitHub Actions, Ollama, LoRA fine-tuning.

Used at work, where the code is not public: Spark, Airflow, Kubernetes, Terraform, AWS, Azure.

Microsoft certified: DP-100 (Azure Data Scientist), DP-600 (Fabric Analytics Engineer).
