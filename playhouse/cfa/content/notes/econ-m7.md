# CFA Level I — Economics
# Module 7: Currency Exchange Rates
## Complete — §7.01 Introduction through §7.04 Absorption Approach (Deduplicated vs. Modules 1–6)

> **Big picture:** Economics is ~6–9% of the Level I exam. In the current curriculum this reading covers the **FX market's instruments** (spot, forward, futures, swap, option) and the **two theories linking exchange rates to the trade balance** — the **elasticities approach (Marshall–Lerner, J-curve)** and the **absorption approach**. Quote conventions, cross rates, forward points, and interest parity are **not in this reading** (they sit in a later one). The defining skill tested here is the **hedging translation** — "long a foreign asset" → "sell that currency forward" — which Example 1 tested four ways and which every later FX question starts from. The guaranteed calculation is the **generalized Marshall–Lerner condition** with its (ε_M − 1) import term.

**Importance legend:**
- 🔴 **High** — appears on nearly every exam
- 🟡 **Medium** — regularly tested, usually conceptual
- 🟢 **Low** — occasionally tested, know the definition

**Deduplication cross-references used below:**
| Marker | Points to |
|---|---|
| 🔗 M1–M6 | Economics Module notes 1–6 |
| 🔗 QM | Quant Methods note |

**Already covered elsewhere (study it there, not here):**
| Topic | Where it lives |
|---|---|
| Appreciation → imports ↑, exports ↓, net exports ↓; depreciation reverses; AD and SRAS effects | M3 §11–12, M4 §3 |
| Exhibit 14's "FC per DC ↑ = appreciation" polarity trap | M3 §11 |
| Real exchange rate = nominal adjusted for price levels (the AD interest-rate/FX effect) | M3 §9 |
| Currency moves affect trade only when cumulative/persistent | M4 §3 |
| Terms of trade = P_exports / P_imports | M6 §1 |
| CA deficit → short-run appreciation (rate differentials, capital inflows); persistent deficit → long-run depreciation (risk premiums) | M6 §6 |
| CA deficit offset by capital + financial account surplus; BOP structure | M6 §5–6 |
| Fisher: R_nom = R_real + πᵉ (the ingredient behind interest parity) | M5 §2 |

---

## 0. Introduction — The FX Market in Context (§7.01)
**Exam importance: 🟢 Low-Medium — the size comparison and the "why it matters even for domestic investors" argument are the only quotable items**

### Size and structure 🟡
- **The largest market in the world by daily turnover:** ≈ **USD 5.1 trillion per day (2016)** — about **10–15× global fixed-income** turnover and **≈50× global equity** turnover.
- **Truly global, 24 hours a day** each business day; participants from every time zone linked by **electronic communications networks** — from multibillion-dollar funds to individuals trading their own accounts, in real time.
- Its function: **international trade is impossible without it**, and so are the **cross-border capital flows** that connect financial markets globally. (🔗 M6 §5–6: the trade and financial-account flows all settle through FX.)

### Why it matters to investors 🟡 — the chain
```
World economy increasingly transnational
  → production and trade flows set more by GLOBAL than domestic factors
  → asset pricing responds to the worldwide opportunity set
  → investors shed "home bias" and invest abroad
  → the EXCHANGE RATE — the price at which foreign-currency investments
    are valued in domestic currency — becomes a key determinant of
    portfolio performance
```

**Even a purely "domestic" mandate is exposed 🔴 (the testable point):**
- Large companies depend heavily on foreign operations — **≈30% of S&P 500 earnings come from outside the US**.
- Almost all companies face **foreign competition**.
- Pricing of domestic assets (equities, bonds, real estate) depends on **demand from foreign investors**.
- → There is no such thing as an investor with zero FX exposure. An option claiming a domestic-only portfolio is unaffected by exchange rates is wrong.

### Roadmap
Basic concepts and terminology for exchange rates → the basics of exchange-rate economics.

---

## 1. Market Functions (§7.02)
**Exam importance: 🔴 HIGH — the four instruments (spot, forward, futures, swap, plus options) are definition items the exam tests by their distinguishing feature; the FX swap mechanics (spot + forward, roll, cash flow = mark-to-market) and the forward-vs-futures contrast are the reliable questions. The swap cash-flow calculation is a small guaranteed calc.**

### Why FX transactions happen 🟡
| Purpose | Examples | Share of turnover |
|---|---|---|
| **International trade** in goods and services | Companies/governments buying abroad; a German tourist selling EUR for GBP | Important, but the **smaller** share |
| **Capital-market transactions** | Converting currencies to move funds into/out of foreign assets — **direct investment** (buying factories) through **portfolio investment** (foreign stocks, bonds) | The **larger** share — capital is extremely mobile |

🔗 M6 §2 FDI vs. FPI. Every FX transaction, whatever its motive, eventually requires one currency to be exchanged for another → participants face the risk the rate **moves against them** before that happens → they **hedge** with FX instruments; others take **speculative** exposures to profit from a view.

### Spot transactions 🔴
- **Exchange of currencies for immediate delivery** = **T + 2** settlement for most currencies (two business days after the trade).
- ⚠️ **Exception:** **CAD against USD settles T + 1.**
- The **spot exchange rate** is the one quoted in the press and on the news.
- ⚠️ **Spot is a MINORITY of daily turnover.** The rest is outright forwards, FX swaps, and options. (A distractor will claim spot dominates.)

### Outright forward contracts 🔴
- An agreement to **deliver foreign exchange at a future date at an exchange rate agreed today**. Any transaction with settlement **longer than T + 2** is a forward; its rate is the **forward exchange rate**.
- **Two required specifications:** (1) the **date** of exchange, (2) the **exchange rate** to apply on that date.
- **The hedging example:** a UK company expects **EUR 100m in 85 days**. Converting at spot *then* means facing the unknown GBP/EUR rate in **83 days** (85 minus the T + 2 settlement) → FX risk. It hedges by agreeing **today** with a dealer to **sell EUR 100m against GBP for settlement in 85 days** at the forward rate.
- **Dates:** dealers quote standard tenors (1 week, 1 month, 90 days); in the **OTC** market any date is possible, with the rate **scaled to the exact number of days**. Standard tenors are measured **from the spot settlement date (T + 2)**: trade 18 Oct → spot 20 Oct → 3-month forward = **20 Jan**. If that's a weekend/holiday, the **closest good business day**.
- **Size:** any amount the counterparties agree. **Liquidity declines** with **longer maturity** and **larger size**.

### Futures contracts 🔴 — the contrast with forwards
Same basic concept (price set today, settlement on a specified future date), **different mechanics**:
| Feature | Forward (OTC) | Futures (exchange) |
|---|---|---|
| Venue | Over-the-counter, dealer | **Exchange** — mostly the **IMM division of the CME** |
| Amount and date | **Any** size, any date | **Fixed** contract amounts, **fixed** settlement dates |
| Collateral | None required by default | **Fixed collateral posted**; **marked-to-market daily**, more collateral called on losses |
| Flexibility | More | **Less** |
| Counterparty (default) risk | Present | **Minimal** — the exchange stands between parties |
| Liquidity | Declines with term/size | **Deep and liquid** — CME FX futures ≈ **USD 140bn/day (2010)**, nearly the interbank spot volume |

**One-liner:** *futures trade less flexibility for less counterparty risk.*

### FX swaps 🔴 — THE mechanism to know
**FX swap** = a **simultaneous spot and forward transaction** — an offsetting spot trade plus a new forward. Used to **roll** an expiring forward (hedge or speculative) to a later date, because forwards expire and positions that must continue have to be extended before settlement.

**The three things to understand (curriculum's list):**
1. An FX swap consists of a **simultaneous spot and forward** transaction.
2. Swaps **extend (roll) an existing forward position** to a new future date.
3. Rolling produces a **cash flow on settlement day** = effectively a **mark-to-market** on the forward position.

**The roll example (verified):**
```
Day 0:   trader SELLS EUR 100m forward, settlement day 95, at USD/EUR 1.2000
Day 93:  forward is 2 days from settlement (= T+2 to spot). To roll:
         leg 1 — BUY EUR 100m SPOT (settles day 95) at spot 1.1900
                 → the EUR bought delivers against the EUR sold forward
                 → EUR quantities NET TO ZERO on day 95
                 → but USD changes hands: sold at 1.2000, bought at 1.1900
         Cash flow day 95:  EUR 100,000,000 × (1.2000 − 1.1900) = USD 1,000,000 RECEIVED
         leg 2 — enter a NEW forward sale of EUR 100m at the day-93 forward rate
                 → forward position renewed to a later date
```
⚠️ **Direction:** the trader was *short* EUR at 1.2000 and closed at 1.1900 → the euro fell → **profit, received in USD** (the quantity currency nets to zero; the price currency carries the P&L). If spot had risen to 1.2100, the trader would **pay** USD 1m. Sign it from "sold high, bought low."

**Why swaps dominate turnover:** participants constantly roll maturing forwards to keep hedges and speculative positions alive — otherwise the position closes at the forward settlement date.

### Swap funding 🟡
A UK firm needs **GBP 100m for 90 days** from T + 2. Two routes:
1. Borrow GBP directly for 90 days.
2. **Borrow USD → sell USD for GBP spot (T + 2) → simultaneously sell GBP 90 days forward against USD** (the forward settles **92 days** from today — 90 days from spot settlement). The firm has GBP for 90 days and repays the USD loan at a **known, pre-determined** rate → **no FX risk**.
- The **all-in rate via swap ≈ domestic borrowing rate, within a few basis points** — enforced by an **arbitrage relationship** (covered interest parity, developed later). On large amounts even a few bp is real savings.

### FX options 🟡
- For an **upfront premium**, the buyer gets the **right but not the obligation** to make an FX transaction at a future date at a rate agreed today.
- Exercised **only if advantageous** — i.e., if the agreed rate beats the market rate at expiry. Extremely flexible; a large share of daily turnover.

### ⭐ Example 1 — the hedged foreign investment (1 / 5 — the reading's core concept, missed four ways)
**The setup:** Sydney investor, AUD base, holds **HKD bonds**. Data: spot AUD/HKD **0.1714**; 1-yr HKD rate **2.20%**; 1-yr forward AUD/HKD **0.1724**. Adviser's strategy: AUD → HKD spot, buy 1-yr risk-free HKD zero, sell HKD forward back to AUD.

**The one idea all four misses share:** *a forward contract agreed today fixes the conversion rate with certainty. The only FX uncertainty an unhedged investor faces is the FUTURE SPOT rate.* Hold that sentence and all four questions fall out.

> ### ⭐ Q1 MISSED — *"exchange-rate risk is determined by uncertainty over:"* → you picked **C (the forward rate one year from now)**; correct is **B (the SPOT rate one year from now)**.
> Unhedged FX risk = **the future spot rate**, because that's the rate the investor would convert at. Today's forward (A) is **known with certainty** — it's a quoted price. The forward rate one year from now (C) is **irrelevant** — the investor isn't entering a forward then; she's converting at spot. **Off-model lure:** "forward" sounded like the sophisticated FX word. The rule: *risk lives in the unknown future spot; forwards are the known hedge.*

> ### ⭐ Q2 MISSED — *"to reduce the risk, the client should:"* → you picked **B (sell AUD forward)**; correct is **C (sell HKD forward)**.
> **Hedge routine — three steps, always:** (1) *What is she long?* **HKD** (the bonds pay HKD). (2) *A hedge takes the opposite position in the derivative:* **short HKD**. (3) *Short = sell:* **sell HKD forward** (= buy AUD forward). Selling AUD forward would *add* HKD exposure — doubling the risk, not hedging it. **Polarity miss:** you named the right instrument (forward) with the wrong currency. The currency you SELL forward is the one you're LONG in the cash market.

> ### ⭐ Q3 MISSED — *"the proposed investment is most likely:"* → you picked **B (exposed to interest rate risk)**; correct is **A (risk free)**.
> Check each risk against the stem: **default risk** — none (risk-free issuer). **Reinvestment risk** — none (zero coupon, nothing to reinvest). **Interest rate risk** — none (held to its one-year maturity, matures at par; rates can move but she receives par regardless). **FX risk** — none (the forward fixes the conversion). All four eliminated → **risk free**. **Truncated-rule miss:** you knew bonds carry rate risk but dropped the clause "held to maturity, zero coupon" that switches it off. A 1-yr zero held 1 yr has no price-risk window.

> ### ⭐ Q4 MISSED — *"to set up the investment, the client would:"* → you picked **B (BUY AUD spot…)**; correct is **C (SELL AUD spot; buy the HKD bond; BUY AUD forward)**.
> Trace the money: she starts with **AUD**, needs **HKD** → **sell AUD spot** (= buy HKD). Buy the HKD bond. At maturity she has HKD, needs AUD → **buy AUD forward** (= sell HKD forward, same contract as Q2). She can't *buy* AUD spot — she already holds AUD. **Polarity miss:** first leg inverted. This sequence is **exactly the swap-funding structure** from this section — spot one way, forward back.

✓ **Q5 — the return calculation (verified):**
```
AUD 1 → HKD:        1 / 0.1714            = HKD 5.834   (divide: AUD/HKD quotes AUD per HKD)
Invest 1 yr:        5.834 × 1.022         = HKD 5.963
HKD → AUD forward:  5.963 × 0.1724        = AUD 1.028
Return:             1.028 − 1             = 2.8%  ≈ 3%

Shortcut:  (F/S) × (1 + i_foreign) − 1  =  (0.1724/0.1714) × 1.022 − 1  =  2.80%
```
The return is **not** the HKD rate (2.2%, distractor A) — the forward is *above* spot (0.1724 > 0.1714), so the HKD is bought back at a premium and adds ~0.6%. This is the covered-interest-parity engine: hedged foreign return ≈ domestic return, with the forward premium bridging the rate gap.

**What this example is really testing (and will again in later sections):**
| Question | The single rule |
|---|---|
| Where is the risk? | **Future spot.** Today's forward is known. |
| How to hedge? | **Sell forward the currency you're long.** |
| Is a hedged, held-to-maturity zero risky? | **No** — default, reinvestment, rate, and FX risk all eliminated. |
| How to set it up? | **Sell domestic spot → invest foreign → buy domestic forward.** (= swap funding) |

### Instruments are used together 🟢
Spot, forward, swap, and option positions are run **concurrently**, and often alongside equity, fixed-income, and commodity positions, to shape an **overall** exposure matching mandate, risk tolerance, and view.

---

## 2. Exchange Rates and the Trade Balance: The Elasticities Approach (§7.03)
**Exam importance: 🔴 VERY HIGH — the Marshall–Lerner condition is a guaranteed item (concept and a small calc), and the J-curve is a near-guaranteed concept question. The elasticity logic is M1 §4 applied to trade; the sign conventions are the trap.**

### Setup: does depreciation fix a trade deficit? 🟡
- **Devaluation** (fixed-rate system) / **depreciation** (flexible system) reduces a trade deficit **only if demand and supply are "well-behaved"** — i.e., sufficiently price-sensitive.
- The condition guaranteeing improvement = the **Marshall–Lerner condition**. The curriculum presents a **generalized** version that allows an **initial trade imbalance** (the classic version assumes balanced trade).

### Elasticity refresher — with THIS reading's sign convention 🔴
```
ε  =  − (%ΔQ / %ΔP)        defined so that ε is a POSITIVE number
```
- ε = 0.6 → price **falls 10%** → quantity demanded **rises 6%**.
- ⚠️ 🔗 M1 §4 kept the negative sign; M2 §9b flipped to magnitude. This reading uses **positive magnitude** — same convention as M2. Check which is in play before any arithmetic.

**Expenditure and elasticity (R = P × Q):**
```
%ΔR  =  %ΔP + %ΔQ  =  (1 − ε) %ΔP
```
| ε | Price rises → expenditure | Label |
|---|---|---|
| **> 1** | **Falls** | Elastic |
| **< 1** | **Rises** | Inelastic |
🔗 M1 §4's elasticity ↔ total-revenue table, now as a one-line formula.

### The generalized Marshall–Lerner condition 🔴 FORMULA
```
ω_X · ε_X  +  ω_M · (ε_M − 1)  >  0

ω_X, ω_M = shares of exports and imports in TOTAL TRADE (X + M);  ω_X + ω_M = 1
ε_X = price elasticity of FOREIGN demand for domestic exports
ε_M = price elasticity of DOMESTIC demand for imports
```
- **An initial trade deficit means ω_M > ω_X** (imports are the bigger share).
- If satisfied, depreciation **moves the trade balance toward surplus**.

**Why the two terms look different — the mechanism 🔴:**
| Term | Assumption | What happens on a 1% depreciation |
|---|---|---|
| **ω_X · ε_X** (exports) | Exports **billed in domestic currency** → their domestic price is **unchanged** | Exports get **cheaper in foreign currency** → foreign quantity ↑ by ε_X → domestic-currency export revenue ↑ by **ε_X**. **Always positive** (unless ε_X = 0) — no price effect to fight against |
| **ω_M · (ε_M − 1)** (imports) | Imports **billed in foreign currency** → their domestic price **rises** | **Two opposing effects:** direct price effect raises import spending; induced quantity drop lowers it. Net = (ε_M − 1): import expenditure **falls only if ε_M > 1** |

⚠️ **The asymmetry is the exam point:** export demand just needs to be *somewhat* elastic to help; import demand must be **elastic (ε_M > 1)** to help on its own. With ε_M < 1, the import term is **negative** and must be outweighed by the export term.

**Three implications (quotable):**
1. **More elastic demand — imports or exports — makes improvement more likely.**
2. **If ε_M > 1, the trade balance will definitely improve** (both terms non-negative).
3. **As the initial deficit grows (ω_M ↑), the import elasticity matters more and the export elasticity less.**
4. **Balanced trade (ω_X = ω_M):** the condition reduces to the **classic Marshall–Lerner: ε_X + ε_M > 1.**

### Exhibit 1 — worked example (verified) 🔴
Euro depreciates **10%**. ε_X = 0.75, ε_M = 0.65. Exports €400m, imports €600m (deficit €200m; total trade €1,000m).

| | Exports | Imports |
|---|---|---|
| Price change in € | 0 (billed in €) | **+10%** |
| Price change in foreign currency | **−10%** | 0 |
| Quantity change | +7.5% (0.75 × 10%) | −6.5% (0.65 × 10%) |
| € value change | **+€30m** (400 × 7.5%) | **+€21m** (600 × [10% × (1 − 0.65)]) |

```
Import expenditure RISES despite the quantity fall: 10% × (1 − 0.65) = +3.5% → +€21m
Export revenue rises:                                        +7.5% → +€30m
Net trade balance:  +30 − 21 = +€9m improvement;  total trade +€51m

Check the condition:  ω_M = 600/1,000 = 0.6,  ω_X = 0.4
  0.4 × 0.75 + 0.6 × (0.65 − 1) = 0.30 − 0.21 = 0.09 > 0  ✓
```
⚠️ **Two traps:** (1) import spending went **up** (inelastic imports) — the trade balance still improved because exports rose more; (2) the import term uses **(ε_M − 1)**, not ε_M — the "−1" is the direct price effect.

### When exchange-rate adjustment works best 🟡
Elasticities are higher — so depreciation is more effective — when a country trades:
1. Goods with **good substitutes**
2. Goods in **competitive markets**
3. **Luxuries rather than necessities**
4. Goods that are a **large share of consumer spending** or of producers' **input costs**

🔗 M1 §4: the same four determinants of price elasticity. Each one raises ε_X and ε_M.

### The J-curve 🔴
Even when Marshall–Lerner holds, depreciation can make the trade balance **worse before better** — the **J-curve effect** (Exhibit 2: balance dips after the devaluation, then rises above the starting level).

**Two reasons:**
1. **Order/delivery lags (very short run):** contracts already signed in foreign currency. The Washington clothing importer orders French fashions in January, priced in euros; the dollar depreciates in February; the March delivery costs **more dollars** → balance worsens. Only when *new* orders (summer fashions) are placed does the higher price cut import demand → balance improves.
2. **Short-run vs. long-run elasticities:** short-term elasticities may **fail** Marshall–Lerner while long-term ones **satisfy** it — firms and consumers take time to adapt.

> **One-liner:** *the J-curve = pre-existing contracts and sticky short-run elasticities delay the improvement; the long-run elasticities deliver it.*

---

## 3. Exchange Rates and the Trade Balance: The Absorption Approach (§7.04)
**Exam importance: 🔴 HIGH — the elasticities-vs-absorption contrast (micro vs. macro) is a one-liner the exam quotes; the excess-capacity vs. full-employment split and the "temporary wealth effect" are the reliable concept questions. Built entirely on M6 §6's identity.**

### Two approaches, one contrast 🔴
| Approach | View | Mechanism |
|---|---|---|
| **Elasticities** (§2) | **Microeconomic** | **Expenditure-switching** — relative prices of imports and exports change, demand switches |
| **Absorption** (this section) | **Macroeconomic** | **Income vs. expenditure** — the trade balance can only improve if income rises relative to absorption |

### The identity the approach rests on 🔴
```
Trade balance  =  (National saving incl. fiscal balance) − Investment
               =  Income (GDP) − Domestic expenditure ("ABSORPTION")
```
🔗 M6 §6: CA = Sₚ + S_g − I = Y − (C + I + G). The absorption approach reads this literally: **to move the balance toward surplus, depreciation must raise income relative to expenditure, or equivalently raise national saving relative to investment.**

### Excess capacity vs. full employment 🔴 — the split
| State of the economy | What depreciation does | Trade balance |
|---|---|---|
| **Excess capacity** | Switches demand toward domestic goods → **output/income rises**; part of the extra income is **saved** → income rises relative to expenditure | **Improves** |
| **Full employment** | Output can't rise. Balance improves **only if domestic expenditure declines**. If it doesn't, depreciation **pushes domestic prices up** until the stimulus is **negated by the higher price level** → balance **reverts to its original level** | **No lasting change** unless expenditure falls |

🔗 M3 §13: this is the inflationary-gap mechanics — at potential, extra demand becomes prices, not output.

### How depreciation can cut expenditure — the wealth effect 🔴
```
Weaker currency
  → purchasing power of domestic-currency assets ↓
    (incl. the present value of current and future earned income)
  → households feel poorer → CUT expenditure, RAISE saving to rebuild wealth
  → income rises relative to expenditure → trade balance improves
  → BUT as real wealth is rebuilt, the saving response REVERSES
  → the improvement is only TEMPORARY
```
> **The conclusion the exam quotes:** *without excess capacity, depreciation provides only a **temporary** solution to a chronic trade imbalance. Lasting correction requires fundamental changes in expenditure/saving behavior* — e.g., a **policy shift that improves the fiscal balance**, or **higher real interest rates** that raise saving relative to investment. (🔗 M6 §6's "sources of imbalance": S_g and I are the levers.)

⚠️ Distractor: "depreciation permanently corrects a trade deficit." The curriculum's position is *temporary unless expenditure/saving behavior changes* — and only *at all* if there's slack or a wealth effect.

### ⭐ Example 2 — Australia's trade surplus (3 / 6)
**Setup:** AUD freely floating; Australia runs a **trade surplus** (resource exports to emerging Asia). Exports AUD 200bn, ε_X = **0.3**; imports AUD 180bn, ε_M = **0.6**. Both inelastic.

✓ **Q1 (the hard one — you got it):** AUD *appreciates* → trade balance **increases**. Both elasticities < 1, and:
```
ω_X = 200/380 = 0.53,  ω_M = 180/380 = 0.47
0.53 × 0.3 + 0.47 × (0.6 − 1) = 0.158 − 0.189 = −0.03  < 0  → Marshall–Lerner FAILS
```
When the condition fails, exchange-rate moves push the balance the **"wrong" way**: appreciation *raises* the surplus, depreciation would *lower* it. Mechanism: exports billed in AUD → appreciation cuts foreign quantity → AUD export revenue falls (unambiguously, ε_X > 0). Imports: AUD price falls, but with ε_M < 1 the quantity response is too small → import *spending* falls too. Both fall; the net depends on the weights, and here imports fall more. The curriculum adds: with the same elasticities, the condition is met for any **ω_X > 4/7 ≈ 0.571**.

> ### ⭐ Q2 MISSED — *"appreciation more likely to reduce the surplus if demand:"* → you picked **C (ε_M decreases AND ω_M increases)**; correct is **A (both elasticities increase)**.
> The question is "what makes Marshall–Lerner *more likely to hold*?" — and the answer is always **higher elasticities**. Test each option against the formula ω_X·ε_X + ω_M·(ε_M − 1): A raises both terms. B lowers ε_X and ω_X → smaller. C lowers ε_M (the import term gets more negative) *and* raises its weight → smaller still. C was the exact opposite. **Off-model miss:** "import share increases" sounded like it should matter more, and it does — but in the *wrong direction* when ε_M < 1. Rule: **more elastic → more responsive → more likely to rebalance.** Weight shifts only help if they shift toward the term that's positive.

> ### ⭐ Q3 MISSED — *"appreciation reduces the surplus if it increases Australian:"* → you picked **A (tax receipts)**; correct is **B (private sector investment)**.
> 🔗 M6 §6: **X − M = (S − I) + (T − G)**. The surplus is positive; to *reduce* it, the right side must fall: **S ↓, I ↑, or (T − G) ↓**. Tax receipts rising → (T − G) *rises* → surplus *grows* — the opposite. Budget surpluses (C) → same direction, wrong. **Investment rising → subtracts → surplus shrinks** → B. **Polarity miss on the identity** — your M3 §7 / M6 §6 pattern, now in its third module. The routine hasn't changed: write the identity, mark the sign of each term, then ask which direction the stem wants.

✓ **Q4:** the report's import claim is **incorrect**. Luxury imports as a rising share of spending → ε_M **rises** → the Marshall–Lerner value rises → appreciation *more* likely to cut the surplus — same direction as the export effect, not opposite. (🔗 §2's four elasticity drivers: luxury + large budget share both raise ε.)

✓ **Q5:** capital controls that stop all financial flows → **trade balance must go to zero**. Trade balance and capital account are mirror images; zero capital flow forces zero trade balance.

> ### ⭐ Q6 MISSED — *"the impact would take the form of:"* → you picked **B (decrease in private investment)**; correct is **A (decrease in private saving)**.
> Same identity, next step. Q5 established the surplus must fall to zero → the right side of X − M = (S − I) + (T − G) must fall. **I decreasing** → (S − I) *rises* → surplus *grows* — wrong direction again. **Fiscal balance increasing** (C) → wrong direction. **S decreasing** → surplus shrinks → A. The curriculum's narrative: with no credit to foreigners, export demand is choked off → national income (especially profits) falls → saving falls. **Same polarity miss as Q3, two questions apart** — a sign that the identity is being read from intuition ("investment falling sounds like contraction") rather than from the algebra.

**What Example 2 shows:** the Marshall–Lerner mechanics are solid (Q1, Q4 — the two that require the formula). The leaks are (a) reading "more likely to rebalance" as anything other than "higher ε" (Q2), and (b) the **X − M = (S − I) + (T − G)** identity's signs, missed twice in one set. That identity is now a four-module recurring miss (M3, M6, M7 ×2).

### The capital-account reminder 🔴 — the BOP must still balance
- A trade-balance improvement requires a **corresponding change in the capital account** (🔗 M6 §6 offset rule). Domestic saving must not just rise — it must be **willingly channeled into buying financial assets from foreigners**.
- → **Asset prices must adjust:** foreign assets become **relatively more attractive**, domestic assets **relatively less attractive**, to both foreign and domestic investors. The trade balance and the financial account move together or not at all.

---

## 4. Quick-Reference Sheet

```
── FX MARKET (§7.01) ──
Largest market: ≈ USD 5.1 trn/day (2016); 10–15× fixed income, ~50× equities
24h, electronic, global; plumbing for trade AND capital flows
Nobody has zero FX exposure: ~30% of S&P 500 earnings from abroad;
  foreign competition; foreign demand for domestic assets

── INSTRUMENTS (§7.02) ──
SPOT: immediate delivery = T + 2 (CAD vs USD = T + 1); a MINORITY of turnover
FORWARD: deliver FX at a future date at a rate agreed TODAY; > T + 2;
  two specs (date, rate); OTC, any size/date, rate scaled to exact days;
  standard tenors count from SPOT settlement (18 Oct → 20 Oct → 20 Jan);
  liquidity ↓ with term and size
FUTURES: exchange (CME IMM); fixed amounts/dates; collateral, daily
  mark-to-market; LESS flexible, MINIMAL counterparty risk; deep liquidity
FX SWAP = simultaneous SPOT + FORWARD; rolls an expiring forward;
  settlement-day cash flow = mark-to-market
  Sold EUR 100m fwd @1.2000; roll at spot 1.1900:
  EUR nets to zero; cash = 100m × (1.2000 − 1.1900) = USD 1m RECEIVED
  (sold high, bought low → profit; price currency carries P&L)
SWAP FUNDING: borrow USD → sell USD spot for GBP → sell GBP forward;
  no FX risk; all-in ≈ domestic rate within a few bp (arbitrage)
OPTIONS: premium for the RIGHT, not obligation; exercised only if advantageous

── HEDGING LOGIC ⭐ (Example 1 — missed 4/5) ──
Unhedged FX risk = uncertainty over the FUTURE SPOT rate
  (today's forward is KNOWN; next year's forward is irrelevant)
Hedge = SELL FORWARD the currency you are LONG (long HKD bonds → sell HKD fwd)
Hedged 1-yr risk-free zero held to maturity = RISK FREE
  (no default, reinvestment, rate, or FX risk)
Setup: SELL domestic spot → invest foreign → BUY domestic forward (= swap funding)
Hedged return = (F/S) × (1 + i_foreign) − 1
  AUD/HKD: (0.1724/0.1714) × 1.022 − 1 = 2.8% (not the 2.2% HKD rate)

── ELASTICITIES APPROACH (§7.03) ──
ε = −(%ΔQ/%ΔP), POSITIVE magnitude (M2 convention, not M1)
%ΔR = (1 − ε) %ΔP: price ↑ → spending ↓ if ε > 1, ↑ if ε < 1
GENERALIZED MARSHALL–LERNER:  ω_X·ε_X + ω_M·(ε_M − 1) > 0
  ω = shares of TOTAL trade (sum to 1); deficit → ω_M > ω_X
  Exports billed in DC → no price effect → term always ≥ 0
  Imports billed in FC → price ↑ fights quantity ↓ → net (ε_M − 1)
  Import spending falls ONLY if ε_M > 1
  More elastic → more likely to improve; ε_M > 1 → DEFINITELY improves;
  bigger deficit → ε_M matters more; balanced trade → ε_X + ε_M > 1
Exhibit 1: €↓10%, ε_X .75, ε_M .65, X 400/M 600:
  X +7.5% = +30; M +10%×(1−.65) = +3.5% = +21 (spending UP); net +9
  0.4(.75) + 0.6(.65−1) = 0.09 > 0 ✓
Works best: good substitutes | competitive markets | luxuries | big
  share of spending/input costs (all raise ε)
J-CURVE: worse before better — (1) pre-existing FC contracts (Jan order,
  Feb depreciation, Mar delivery costs more); (2) SR elasticities fail
  M–L, LR elasticities satisfy it

── ABSORPTION APPROACH (§7.04) ──
Elasticities = MICRO (expenditure switching); Absorption = MACRO
Trade balance = saving − investment = income − ABSORPTION (expenditure)
  → depreciation must raise Y relative to expenditure (or S relative to I)
EXCESS CAPACITY: demand switches → output ↑ → some saved → improves
FULL EMPLOYMENT: improves ONLY if expenditure falls; otherwise prices ↑
  until stimulus negated → balance REVERTS
WEALTH EFFECT: weaker currency → real wealth ↓ → spend less, save more
  → improves → but reverses as wealth rebuilt → TEMPORARY
Lasting fix needs behavior change: fiscal balance ↑ or real rates ↑
Capital account must move too: saving channeled into foreign assets →
  foreign assets relatively MORE attractive, domestic LESS
IDENTITY SIGNS ⭐ (missed in M3, M6, M7×2):  X − M = (S − I) + (T − G)
  surplus SHRINKS when S ↓, I ↑, or (T − G) ↓;  deficit SHRINKS when
  S ↑, I ↓, or (T − G) ↑ — write it, sign each term, then read the stem
```

---

## 5. How This Module Shows Up on the Exam

| Topic | Style | Likelihood |
|---|---|---|
| Hedging direction: sell forward the currency you're long | Concept | 🔴 Very high ⭐ *your miss* |
| Where FX risk lives: future spot, not forward | Concept | 🔴 Very high ⭐ *your miss* |
| Marshall–Lerner: compute the condition, judge improvement (incl. the failure case) | **Calc** | 🔴 Very high ✓ |
| Import term uses (ε_M − 1); spending falls only if ε_M > 1 | Concept | 🔴 Very high |
| What makes M–L more likely to hold: higher elasticities | Concept | 🔴 High ⭐ *your miss* |
| X − M = (S − I) + (T − G): which change moves the balance which way | Concept | 🔴 Very high ⭐ *missed twice* |
| Capital controls → trade balance must go to zero | Concept | 🟡 Medium ✓ |
| Changing trade mix → elasticities → M–L direction | Concept | 🟡 Medium ✓ |
| J-curve: why worse before better | Concept | 🔴 Very high |
| FX swap = spot + forward; roll cash flow calc | **Calc**/concept | 🔴 High |
| Hedged foreign return (F/S)(1 + i_f) − 1 | **Calc** | 🔴 High ✓ |
| Hedged held-to-maturity zero = risk free | Concept | 🔴 High ⭐ *your miss* |
| Setup sequence: sell domestic spot → invest → buy domestic forward | Concept | 🔴 High ⭐ *your miss* |
| Forwards vs. futures contrast | Concept | 🔴 High |
| Absorption: excess capacity vs. full employment | Concept | 🔴 High |
| Wealth effect is temporary; lasting fix needs saving/fiscal change | Concept | 🔴 High |
| Elasticities (micro) vs. absorption (macro) | Concept | 🟡 Medium-High |
| Spot = T + 2 (CAD T + 1); minority of turnover | Concept | 🟡 Medium |
| Forward tenor counts from spot settlement date | Concept | 🟡 Medium |
| Conditions where depreciation works best (four elasticity drivers) | Concept | 🟡 Medium |
| Capital account must adjust alongside trade balance | Concept | 🟡 Medium |
| Swap funding ≈ domestic borrowing (arbitrage preview) | Concept | 🟡 Medium |
| Exhibit 1 numbers (import spending rose despite quantity fall) | **Calc** | 🟡 Medium |
| Options definition; instruments used together | Concept | 🟢 Low |
| Market size facts; "no one has zero FX exposure" | Concept | 🟢 Low |

**⭐ Flagged weak spots (final):**
- **Example 1, Q1–Q4 — the hedging cluster (§1):** 1/5, all four misses on one idea. Risk = **future spot**; hedge = **sell forward what you're long**; hedged held-to-maturity zero = **risk free**; setup = **sell domestic spot first**. Two polarity misses (Q2 wrong currency, Q4 first leg inverted), one off-model (Q1 "forward" lure), one truncated rule (Q3 dropped "zero coupon, held to maturity"). **Routine:** (1) which currency am I long? (2) risk = its future spot; (3) hedge = sell it forward; (4) setup = sell domestic spot → invest → buy domestic forward.
- **Example 2, Q2 — what makes Marshall–Lerner more likely to hold (§3):** picked "ε_M ↓, ω_M ↑" — the opposite. **Higher elasticities, always.** Test each option against the formula. *(off-model)*
- **Example 2, Q3 + Q6 — the X − M = (S − I) + (T − G) identity (§3):** missed twice in one set. To *reduce* a surplus: S ↓, I ↑, or (T − G) ↓. Picked "tax receipts ↑" (raises T − G) and "investment ↓" (raises S − I) — both grow the surplus. **Fourth module in a row** with a sign miss on this identity (M3 §7, M6 §6, M7 ×2). *(polarity)* **Routine:** write the identity, mark each term's sign, then ask which way the stem wants it to move — never from "sounds like contraction."
- **Module pattern:** 4/11 across the two examples. The Marshall–Lerner *mechanics* held under pressure (Q1 — the failure case, with the 4/7 threshold — and Q4). The two concentrated leaks are the **hedging translation** (pattern 10) and the **saving-investment identity's signs** (pattern 1, recurring). Both are "run the routine before the options" failures, not knowledge gaps.

**Study priority order:**
1. **The hedging routine** ⭐ — long what? → risk = its spot → sell it forward → setup sequence
2. **X − M = (S − I) + (T − G) signs** ⭐ — which change moves a surplus/deficit which way; drill until automatic (four-module recurring miss)
3. **Marshall–Lerner** — formula, the (ε_M − 1) asymmetry, the four implications, Exhibit 1 numbers, the failure case; "more likely to hold" = higher ε
4. **J-curve** — contracts + short-run vs. long-run elasticities
5. **FX swap mechanics** — spot + forward, roll, cash flow direction
6. **Absorption** — excess capacity vs. full employment; temporary wealth effect; lasting fix; capital controls → zero balance
7. **Forwards vs. futures** contrast; spot settlement facts
8. **Hedged return calc** (F/S)(1 + i_f) − 1
9. Elasticity drivers; capital-account corollary; market facts

> **Note status: COMPLETE** — §7.01 introduction through §7.04 absorption approach (the reading's final section in the current curriculum). Curriculum-example tally: **4 / 11** (Example 1: 1/5; Example 2: 3/6). Practice questions Q1–Q15 (+Q13b) → Study Hub question bank (`econ-m7-q01…q16`). Official practice problems: not yet attempted.
