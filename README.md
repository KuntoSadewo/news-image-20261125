# The World in One Day — Wednesday 25 November 2026

[![news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/KuntoSadewo/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/KuntoSadewo/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125)

Entry for the make.fun bounty [news-image-20261125](https://make.fun/bounty/news-image-20261125): one image that sums up the world news of Wednesday 25 November 2026.

The image is a front-page style panel grid headed by the day itself — "Wednesday 25 November 2026" — with the day's six most consequential stories, one per panel, each drawn as a simple icon with a headline label: tankers hitting mines in the Strait of Hormuz as Iran kept the strait shut and tanker traffic fell 40%; Ukrainian drones sinking a Russian warship in Libya's Benghazi port, killing two Libyan naval officers; Australia signing a security pact that made it the Solomon Islands' defence partner of choice as the islands ended their China deal; Pakistan's first astronaut flying aboard Shenzhou-24 to China's Tiangong station, its first foreign visitor; a US jury convicting Huawei of stealing trade secrets while clearing it of racketeering; and Colombian forces storming a Cartagena supermarket to free every hostage, killing one captor. A footer strip notes three more of the day's stories: Bangladesh's 36% garment-worker pay rise, North Korea expelling Switzerland's envoy, and China's investigation of Shanghai's party chief.

## How it runs

`main.ts` (Node 22, standard library only) copies the bundled `entry.png` to `entry.png` in the output directory — `$MAKEFUN_OUTPUT_DIR` when set, else `/output` — byte for byte, with no network access. The image was drawn programmatically with Python PIL and is 1024×1024 pixels.
