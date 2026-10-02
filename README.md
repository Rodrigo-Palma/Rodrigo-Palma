## Rodrigo Palma

Senior Data and AI Engineer in Porto Alegre, Brazil (UTC-3).

I build data platforms and LLM systems, and most of my time goes into the part that
decides whether they keep working: pipelines that rerun cleanly, retrieval you can
actually evaluate, and gates that stop a worse model from shipping.

[LinkedIn](https://linkedin.com/in/rodrigospalma/) · email.rodrigopalma@gmail.com

### Upstream open source

I fix bugs in the tools I use at work. More than 50 pull requests merged in 20 projects,
with repeat merges in great-tables, fsspec, Apache Iceberg, Delta Lake,
tox, kedro and feast. All of them, merged only:
[great-tables](https://github.com/posit-dev/great-tables/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[fsspec](https://github.com/fsspec/filesystem_spec/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[iceberg-python](https://github.com/apache/iceberg-python/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[delta-rs](https://github.com/delta-io/delta-rs/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[tox](https://github.com/tox-dev/tox/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[kedro](https://github.com/kedro-org/kedro/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[feast](https://github.com/feast-dev/feast/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[Pillow](https://github.com/python-pillow/Pillow/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[redis-py](https://github.com/redis/redis-py/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[py-shiny](https://github.com/posit-dev/py-shiny/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[pint](https://github.com/hgrecco/pint/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[pyjanitor](https://github.com/pyjanitor-devs/pyjanitor/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[apprise](https://github.com/caronc/apprise/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[cachetools](https://github.com/tkem/cachetools/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[nox](https://github.com/wntrblm/nox/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[onnx](https://github.com/onnx/onnx/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[pdm](https://github.com/pdm-project/pdm/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[plotnine](https://github.com/has2k1/plotnine/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged),
[polars](https://github.com/pola-rs/polars/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged) and
[zarr-python](https://github.com/zarr-developers/zarr-python/pulls?q=is%3Apr+author%3ARodrigo-Palma+is%3Amerged).
Everything, merged, open and closed:
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

### Day job

Data and AI engineer at the public defender's office of Rio Grande do Sul. The system I am
responsible for measures excess caseload and allocates more than R$85 million a year in
compensation to public defenders. A wrong number there is not a bad chart; it is somebody's pay,
so most of the engineering went into making the comparison between units hold up when a unit
disputes its own result. I am a co-author on it: the criterion for comparing units across
defensorias came from a public defender, not from engineering. Second place in digital
innovation at the 2nd CNTI.Def / 5th Enastic, the Brazilian public-defender technology
conference, 2026. Around it: ETL for data nobody could query before, and analytics with NLP, all
internal.

### Projects

[edgar-rag](https://github.com/Rodrigo-Palma/edgar-rag) answers questions over SEC 10-K filings,
citing the passage it used or declining. The evaluation was pre-registered: hypotheses, margins
and arms fixed before the run, on 300 unanswerable questions across 20 companies. With no gate
the model answered 13 of them (4.3%, Wilson 95% [2.5%, 7.3%]), already under the 5-point margin
the main hypothesis needed, so it was not attainable on this set and the report says so. A
period check plus a cosine gate cuts that to 3 of 300 (1.0%) at half the generation time, 6.59s
against 13.21s per question. The service still ships with no gate, because the hypothesis that
would have justified one was not met. [anchora](https://github.com/Rodrigo-Palma/anchora) is the
earlier, smaller version of the same idea over Brazilian public law, with a LoRA fine-tune and a
28-question holdout.

[quantlens](https://github.com/Rodrigo-Palma/quantlens) is a quant analyst over B3 (Brazilian
exchange) data running entirely on local models. Retrieval with guardrails, an offline eval
suite that CI enforces as a gate, and a benchmark that fails the build on regression (the offline
path end to end, no LLM call, p50 441 µs). Local models were a deliberate trade: no per-query cost and
no data leaving the machine, paid for with weaker generation, which is why the guardrails and
the evals exist at all. The decisions behind it are written down as
[ADRs](https://github.com/Rodrigo-Palma/quantlens/tree/main/docs/adr).

[market-elt](https://github.com/Rodrigo-Palma/market-elt) is market-data ELT on dbt and DuckDB,
where data-quality tests break the build instead of letting bad rows travel downstream.
Deliberately boring.

### Before that

About five years as the only developer of my own PC-gaming e-commerce (backend, frontend,
payments and the 2am operations), then public-sector systems and data. I started out in
psychology. BSc in Computer Engineering, MSc in Big Data and Business Intelligence, Microsoft
certified in DP-100 (Azure Data Scientist) and DP-600 (Fabric Analytics Engineer).

### Stack

Proven in the repositories above: Python, SQL, PyTorch, FastAPI, dbt, DuckDB, Polars, Docker,
GitHub Actions, Ollama, LoRA fine-tuning.

Used at work, where the code is not public: Spark, Airflow, Kubernetes, Terraform, AWS, Azure.
