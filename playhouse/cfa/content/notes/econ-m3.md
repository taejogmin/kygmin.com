# CFA Level I — Economics
# Module 3: Aggregate Output, Prices, and Economic Growth
## Parts 1–2 of 3 — Aggregate Output & Income + AD/AS (Deduplicated vs. Modules 1–2)

> **Big picture:** Economics is ~6–9% of the Level I exam. This reading is the macro pillar: GDP measurement, AD/AS, and growth. **This note covers Parts 1–2** (through Conclusions on AD and AS). Part 3 (economic growth) will be appended when uploaded. Highest-value material: the **nominal/real/deflator triangle** (Part 1) and the **AD/AS shift grids + four equilibrium cases** (Part 2). ⚠️ **Part 2 is the densest polarity minefield in the Economics topic** — nearly every exam point is a direction call.

**Importance legend:**
- 🔴 **High** — appears on nearly every exam, often as a calculation
- 🟡 **Medium** — regularly tested, usually conceptual
- 🟢 **Low** — occasionally tested, know the definition

**Deduplication cross-references used below:**
| Marker | Points to |
|---|---|
| 🔗 M1 | Module 1 note (Demand & Supply) |
| 🔗 M2 | Module 2 note (Market Structures) |
| 🔗 QM | Your Quant Methods Module 1 note (returns) |

---

## 0. The Introduction — Framing Only
**Exam importance: 🟢 Low (no direct questions), but it maps the reading**

- Macro examines a nation's **aggregate output and income**, competitive/comparative advantages, **labor productivity**, **price level and inflation**, and actions of **government and the central bank**. (Micro vs. macro definition: 🔗 M1 §1 — this reading is the macro half.)
- The curriculum's ten "fundamental questions" collapse into **four testable themes** = the reading's structure:

| Theme | Question behind it | Section of the reading |
|---|---|---|
| **Measurement** | What is aggregate output/income, how measured? | GDP and related measures |
| **Determination** | What sets output and prices? | AD and AS curves |
| **Fluctuation** | Why do output/inflation/unemployment move? | Shifts vs. movements along AD/AS (🔗 M1 §2 — same shift-vs-movement logic, macro version) |
| **Growth** | Can the economy produce more over time? | Sources, sustainability, measures of growth |

- **The investment angle (why CFA cares):** investors evaluate the current macro environment and forecast the future one to identify **asset classes and securities that benefit**. Macro variables (inflation, unemployment, consumption, G, I) feed through to industry growth → company profitability → security returns. Expect "an analyst is assessing..." stems.

---

## 1. The Three-Way Identity: Output = Income = Expenditure
**Exam importance: 🔴 High (concept)**

```
Aggregate OUTPUT = Aggregate INCOME = Aggregate EXPENDITURE
```

Three decompositions of the **same** quantity:
- The value of output produced must **accrue to the factors** that produced it → income.
- Someone must have **bought** it → expenditure (some from abroad, as net exports).

### The circular flow (Exhibit 1) 🟡
Households supply **labor and capital** to firms → firms pay **£100 income** (wages + profits) → households spend **£100** on goods and services → output = income = expenditure = £100. (Simplifications: no imports, no saving, no taxes, no investment — added later.)

### The four forms of income 🟡
| Form | Definition |
|---|---|
| **Compensation of employees** | Wages + benefits (incl. employer contributions to private pensions and health insurance) |
| **Rent** | Payment for the **use of property** |
| **Interest** | Payment for **lending funds** |
| **Profit** | Return to owners for **use of their capital + assumption of financial risk** |

- 🟡 **Operating surplus = rent + interest + profit** — the return on **all capital** used by the business. Definable exam term.
- Households are the **ultimate owners** of all assets (they own the businesses; government is non-profit and "passes back" its revenue via lower taxes) → macro convention: **attribute all income to the household sector**.
- 🔗 M1 §9.1: labor and capital as the two factors, w and r as their prices — same framework, now economy-wide.

---

## 1b. From GDP to Personal Disposable Income — the Income-Side Chain
**Exam importance: 🔴 High (calculation + "which item is NOT subtracted?") — ⭐ added after missing official practice Q12; this chain was not in the original note**

GDP can be worked down to what households actually have to spend. Each step subtracts income that does not reach households (or adds income that reaches them without production).

```
GDP
 − Capital consumption allowance (CCA = depreciation)        → Net domestic product
 [− statistical discrepancy]                                 → NATIONAL INCOME
      = compensation of employees + corporate & government-enterprise profits before tax
        + interest income + unincorporated business (proprietors') net income + rent
        + indirect business taxes less subsidies
 − Indirect business taxes
 − Corporate income taxes
 − Undistributed corporate profits (retained earnings)
 + Transfer payments                                         → PERSONAL INCOME
 − Personal taxes                                            → PERSONAL DISPOSABLE INCOME
      = Consumption + Household saving
```

### The exam patterns 🔴
| Stem | What to do |
|---|---|
| "GDP and national income are closest to…" with a component table | GDP = C + I + G + (X − M); then **national income = GDP − CCA** (the only adjustment the table gives). ⚠️ Imports are *subtracted* — the distractor adds them. |
| "Which is NOT subtracted from national income to get personal income?" | Subtracted: **indirect business taxes, corporate income taxes, undistributed corporate profits**. NOT subtracted: **unincorporated business (proprietors') income** — it already belongs to households. Transfers are *added*. |
| "Personal disposable income equals…" | Personal income − personal taxes. |

**Worked example (official practice Q11 logic):** C 15.0, I 4.0, G 3.8, X 1.5, M 1.7, CCA 1.5 → GDP = 15.0 + 4.0 + 3.8 + (1.5 − 1.7) = **22.6**; national income = 22.6 − 1.5 = **21.1**.

**Memory hook:** going from national to personal income, you remove the three things *businesses and government keep* (indirect taxes, corporate taxes, retained profits) and add back the one thing *government gives* (transfers). Proprietors' income never leaves the household.

---

## 2. GDP: Definition and the Three Inclusion Criteria
**Exam importance: 🔴 VERY HIGH — a "which item is included in GDP?" question is close to guaranteed**

**GDP** measures, equivalently:
1. **Output definition:** market value of all **final** goods and services **produced within the economy** during a period
2. **Income definition:** aggregate income earned by all households, companies, and the government during the period

Two calculation routes — the **income approach** (total earned) and the **expenditure approach** (total spent) — must give the **same result** (total income ≡ total expenditure).

🟢 Bookkeeping trivia: OECD handbook standardizes methodology; US = NIPA (Dept. of Commerce, *Survey of Current Business*); Canada = Statistics Canada; China = National Bureau of Statistics.

### The three criteria — with the exclusion traps 🔴 MEMORIZE THE EXCLUSIONS

| Criterion | Included | EXCLUDED (distractor list) |
|---|---|---|
| **1. Produced during the measurement period** | Current-period output | **Resale** of previously produced items (houses, cars, machinery); **transfer payments** (unemployment, welfare); **capital gains** on appreciating assets |
| **2. Value determined by being sold in the market** | Market-priced goods/services | Own-benefit activities (**cooking, cleaning, home repair, commuting, gardening**); byproducts with no market value (**pollution**) |
| **3. Final goods and services only** | Final sale value | **Intermediate goods** (resold or used to produce another good) — their value is already inside the final price |

⚠️ **Definitional precision:** "intermediate goods" ≠ inventories; "final goods" ≠ final sales. Final goods = **not resold**.

⚠️ **Your direction-check on transfers:** the government's transfer payment is **excluded** (no production occurred) — but when the household **spends** it on goods, that spending **IS in C** and hence in GDP. The transfer itself isn't production; the consumption it funds is. Same two-step reappears in §6 (G excludes transfers).

---

## 3. Value Added = Final Sale Price
**Exam importance: 🔴 High (calculation — reproduce the table)**

Two equivalent expenditure-side methods: **sum of final output** or **sum of value added at each stage**.

### Exhibit 2 — the bread chain
| Stage | Receipts (€) | Value added (€) |
|---|---|---|
| Farmer → miller | 0.15 | 0.15 |
| Miller → baker | 0.46 | 0.31 |
| Baker → retailer | 0.78 | 0.32 |
| Retailer → final customer | **1.00** | 0.22 |
| | **Final output = 1.00** | **Total value added = 1.00** ✓ |

```
Value added at a stage = receipts − cost of inputs bought from prior stage
e.g., miller: 0.46 − 0.15 = 0.31
```

**Final price = Σ value added = total income created.** Wheat and flour are intermediate goods — never counted directly.

⚠️ **Traps:**
1. Do **NOT** sum the receipts column (0.15 + 0.46 + 0.78 + 1.00) — that double-counts intermediates.
2. If the baker sold **directly to the public at €0.78**, GDP counts **€0.78** — GDP records what *actually* happens, not the longest possible chain.

> ### ⭐ YOU MISSED THE EXHIBIT 3 EXAMPLE HERE (automobile production)
> *"Calculate the contribution of automobile production to GDP using the value-added method, and show it equals the expenditure method. What effect would imported steel or plastics have?"*
>
> | Stage | Sales value ($) | Value added ($) | How |
> |---|---|---|---|
> | Steel | 1,000 | 1,000 | Basic materials: no prior inputs, so |
> | Plastics | 3,000 | 3,000 | value added = full sales value |
> | Semiconductors | 1,000 | 1,000 | |
> | *Total inputs* | | ***5,000*** | *sum of ALL THREE, taken together* |
> | Assembly (manufacturer) | 15,000 | **10,000** | = 15,000 − **5,000** |
> | Wholesale to dealer | 16,000 | 1,000 | = 16,000 − 15,000 |
> | Retail | 18,000 | 2,000 | = 18,000 − 16,000 |
> | | **Expenditure: 18,000** | **Σ value added: 18,000** ✓ | |
>
> **What makes this HARDER than the bread chain (Exhibit 2):**
> 1. **Stage 1 is PARALLEL, not sequential.** Steel, plastics, and semiconductors are three *independent* inputs feeding one assembly stage. The manufacturer's value added subtracts **the sum of all three (5,000)** — not just the previous line (semiconductors, 1,000). Bread was a single chain where "subtract the line above" happened to work; that shortcut breaks the moment inputs branch. **The rule is always: value added = receipts − cost of ALL inputs purchased**, never "receipts − the row above."
> 2. **The double-counting distractor:** total sales across all stages = **$54,000** — meaningless and always offered as an answer. GDP contribution = final price = **$18,000**, both methods.
> 3. **The import twist (a directional question — your pattern):** if steel or plastics were **imported**, domestic value added — and hence GDP — **falls by the amount paid for the imports**. Logic: that value was created abroad; equivalently, in GDP = C + I + G + (X − M), the import raises M, which subtracts what the final retail price over-credits. GDP measures production **within the economy** (§2 definition), so foreign-created value must come out. The final car still retails at 18,000 — but the domestic contribution is 18,000 − imported input cost.
>
> **The fix — a fixed 3-step routine for any value-added table:**
> 1. **Map the structure first:** which stages feed which? Sum ALL inputs entering a stage before subtracting.
> 2. **Verify:** Σ value added must equal the final sale price. If it doesn't, an input was missed or a "row above" shortcut was taken.
> 3. **Scan for the word "imported"** — anything imported is subtracted from the domestic contribution.

---

## 4. Imputed Values and the Underground Economy
**Exam importance: 🔴 High (concept — "which of these is in GDP?")**

### The two imputed EXCEPTIONS (non-market but INCLUDED)
| Exception | How it's valued |
|---|---|
| **Owner-occupied housing** | Owner implicitly "pays herself" rent → government **imputes** a rental value, added to GDP (a renter's rent payment is already in GDP as the landlord's income) |
| **Government services** (police, firefighters, judges) | Included **at cost (wages paid)** — no market price exists, so **no value added is attributed** |

### Still EXCLUDED
- **Underground economy:** activity hidden from government — illegal activity (drug trade) or tax evasion (off-the-books labor)
- **Barter transactions** (fence repair traded for garden plowing)
- Own household production (the general rule from §2 criterion 2)

### Exhibit 4 — size of the underground economy (2006 study) 🟢
- Range: **US 8%** of nominal GDP → **Peru 60%**; most countries 12–20%.
- ⚠️ **The percentage-missed calculation:** the denominator is TOTAL activity (official + underground).
```
US:   8/108  ≈ 7.4% of activity missed
Peru: 60/160 ≈ 37.5% missed
```
- Takeaway: reliability of official GDP data **varies considerably across countries** (coverage + data-collection quality).

---

## 5. Nominal vs. Real GDP and the GDP Deflator
**Exam importance: 🔴 VERY HIGH — THE guaranteed calculation of this part. Know every formula cold.**

**Why:** higher income driven purely by price rises is **not** more economic activity. Real GDP strips out price changes. **Per capita real GDP** (real GDP ÷ population) proxies the average standard of living.

### The formulas
```
Nominal GDPₜ = Pₜ × Qₜ        [current prices × current quantities]
Real GDPₜ    = P_B × Qₜ       [BASE-year prices × current quantities]
```

$$
\begin{gathered}
\text{GDP deflator} = \frac{\text{Nominal GDP}}{\text{Real GDP}} \times 100 \\[10pt]
= \frac{\begin{array}{c}\text{current-year output}\\ \text{at CURRENT prices}\end{array}}{\begin{array}{c}\text{current-year output}\\ \text{at BASE-year prices}\end{array}} \times 100 \\[14pt]
\text{Real GDP} = \frac{\text{Nominal GDP}}{\text{deflator}\,/\,100}
\end{gathered}
$$

The deflator broadly measures **aggregate price changes across the whole economy** → changes in the deflator gauge **inflation**.

### The auto-maker worked example — reproduce this chain
Base year 2019: 300,000 cars at €18,750.

**Case 1 — prices +7%, no quantity change (300,000 cars at €20,062.50):**
```
Nominal GDP₂₀₁₉ = Real GDP₂₀₁₉ = 300,000 × 18,750 = €5,625,000,000
Nominal GDP₂₀₂₀ = 300,000 × 20,062.50 = €6,018,750,000   (+7%)
Real GDP₂₀₂₀    = 300,000 × 18,750    = €5,625,000,000   (unchanged ✓)
```
The apparent 7% "growth" is **pure inflation** — the economy didn't grow at all.

**Case 2 — prices +7% AND quantity +3% (309,000 cars):**
```
Nominal GDP₂₀₂₀ = 309,000 × 20,062.50 = €6,199,312,500
Deflator₂₀₂₀    = (309,000 × 20,062.50)/(309,000 × 18,750) × 100 = 107
                  [quantity cancels — the deflator is PURE price]
Real GDP₂₀₂₀    = 6,199,312,500 / 1.07 = €5,793,750,000  → exactly 3% real growth ✓
```

### The decomposition — memorize 🔴
```
(1 + nominal growth) = (1 + real growth) × (1 + inflation)
1.102 = 1.03 × 1.07     →     10.2% ≈ 3% + 7% (approximation)
```
🔗 QM Module 1: identical to the real vs. nominal **returns** decomposition — one relationship, two subjects, double exam value.

**Which number is informative?** 🔴 **Real growth** — it exactly captures output increases; nominal blends price and output changes. Use **real GDP / real GDP growth** for measuring activity and for **cross-country comparisons**.

---

## 6. The Components of GDP (Expenditure Approach)
**Exam importance: 🔴 VERY HIGH — Equation 1 and the component definitions**

```
GDP = C + I + G + (X − M)  =  (C + Gᶜ) + (I + Gᴵ) + (X − M)      (Equation 1)
```

| Component | Definition | Traps / notes |
|---|---|---|
| **C** | Consumer spending on final goods and services | Includes spending funded by transfer payments |
| **I** | **Gross private domestic investment** = business capital goods (plant, equipment) **+ inventory investment** | ⚠️ Inventory changes count. I is the **most volatile** component — inventory swings are a main cause of short-run fluctuations. Also a key determinant of long-term growth |
| **G** | Government spending on goods/services, for consumption **and** investment (roads, schools, military, police) | ⚠️ **Transfer payments are NOT in G** — a monetary transfer with no goods/services received. They enter GDP only when spent as C |
| **X − M** | Exports − imports (M = the part of C, I, G bought from abroad) | |

**"Gross":** includes replacement of worn-out capital. **Net investment** = new capacity only. Hence **G**ross Domestic Product. (Investment spending ≈ 12–16% of GDP in developed economies.)

### Exhibit 6 — the four-sector flow diagram 🟡
Flows worth knowing:
- Household **saving (S)** → financial markets → funds business investment (debt + equity)
- **Government borrowing** when G > T = **fiscal deficit** → government **competes with businesses** for household saving in the financial markets
- **Net foreign borrowing/lending** closes the loop with the rest of the world

### The external sector 🔴
**Balance of trade deficit** = the economy spends more on international goods than other nations spend on its goods = **the country spends more than it produces**; domestic saving is insufficient to finance domestic investment + the fiscal balance → **must be financed by borrowing from the rest of the world**.
- One country's deficit is another's surplus — an **accounting identity that must hold**.
- ⚠️ Nuance: other nations *must in aggregate* finance a trade deficit, but **the financing terms may or may not be attractive**.

---

## 7. The Fundamental Identity: S = I + (G − T) + (X − M)
**Exam importance: 🔴 High — and squarely in your known polarity-error zone. Work the algebra, don't intuit.**

### Derivation (be able to sketch it)
```
Disposable income = Y + F − S_B − R   splits into C + S_H
→  Y = C + S + T        where T = R − F (net taxes), S = S_B + S_H (total private saving)
Expenditure: Y = C + I + G + (X − M)
Equate, cancel C:

S = I + (G − T) + (X − M)                                  (Equation 2)
```
(F = transfers, R = direct+indirect taxes, S_B = business saving = retained earnings + depreciation.)

**Read it as: private saving is absorbed three ways:**
1. Funding **investment** (I)
2. Financing the **fiscal deficit** (G − T)
3. Building financial claims on foreigners — a **trade surplus** (X − M > 0). If (X − M) < 0, foreign saving flows IN and supplements domestic saving (foreigners build claims on the domestic economy).

### The rearrangement 🔴
```
G − T = (S − I) − (X − M)
```
A **fiscal deficit** (G − T > 0) must be financed by:
- the private sector saving more than it invests (S − I > 0), **or**
- a **trade deficit** (X − M < 0 → inflow of foreign saving), **or both**.

⚠️ **Two-second polarity check (your recurring error type):** a trade *deficit* makes (X − M) **negative** — subtracting a negative *loosens* the constraint. Exam stem: "fiscal deficit widens, S − I unchanged → the trade balance must...?" → (X − M) must **fall** → trade deficit **widens** ("twin deficits" logic). Always substitute signs explicitly.

**Status upgrade the curriculum flags 🟡:** up to here Equation 2 is an accounting identity; the reading then treats it as the **outcome of decisions** by households, businesses, government, and foreigners — which motivates the behavioral functions below.

---

## 8. Behavior Behind the Components
**Exam importance: 🟡 Medium overall; MPC/MPS definitions 🔴**

| Component | Main driver(s) | Formal statement |
|---|---|---|
| **C** | **Disposable income** (Y − T) — the dominant determinant; also **wealth** (higher wealth → higher fraction of current income spent, except the very rich) | C = C(Y − S_B − T) ≈ **C(Y − T)** |
| **I** | ↓ in **real interest rate r** (cost of funding); ↑ in **output Y** (proxy for expected profitability of new capital) | **I = I(r, Y)**; r = nominal rate − expected inflation (🔗 QM: Fisher relation). Omits technology as a driver — noted limitation |
| **G** | **Exogenous** policy variable — insensitive to current activity, rates, FX | G = G̅ |
| **T** | Rises with income (income taxes, VAT); transfers fall with income | **G − T = G̅ − t(Y)** |
| **X − M** | Domestic income ↑ → M ↑ → net exports ↓; rest-of-world income ↑ → X ↑ → net exports ↑; **depreciation of domestic currency** → demand shifts to domestic goods → net exports ↑ | |

### MPC and MPS 🔴
| Term | Definition |
|---|---|
| **MPC** | Fraction of an **additional** unit of disposable income that is **consumed** |
| **MPS** | Fraction saved; **MPS = 1 − MPC** |
| **APC** | **Average** propensity to consume = **C/Y** (Exhibit 7's cross-country numbers — a proxy for MPC) |

⚠️ **Marginal vs. average — same trap as MP vs. AP in 🔗 M1 §9.3.** Exhibit 7 implication: a **high-APC** economy (Mexico 70.6%, US 68.4%) responds **more** to policies raising disposable income (e.g., tax cuts) than a **low-APC** one (Germany 49.6%, France 53.1%). ⚠️ Flag: MPC becomes the engine of the **multiplier** later in the reading.

### Automatic stabilizer 🟡
Because T rises and transfers fall as Y rises, the fiscal balance **improves in booms and worsens in slumps without any policy action** → dampens (mitigates) swings in aggregate output. Definable term — expect it verbatim.

---

# PART 2 — Aggregate Demand and Aggregate Supply

## 9. Aggregate Demand and Why It Slopes Down
**Exam importance: 🔴 Very High (concept — the "wrong reason" distractor is standard)**

**AD** = quantity of goods/services that households, businesses, government, and international customers want to buy **at each price level**. The AD curve = combinations of income and price level where **two conditions** hold:
1. Aggregate expenditure = aggregate income (always true after the fact — Part 1 §1)
2. The available **real money supply is willingly held**

⚠️ **The #1 conceptual trap:** AD looks like a micro demand curve, but the micro logic ("lower price → buy more *with a given income*") does **NOT** apply — income is determined *inside* the model along with the price level. An answer explaining AD's slope via ordinary substitution is **wrong**. The correct explanation = **three effects** (nominal money supply constant, G exogenous):

### The three effects — trace each chain BOTH directions 🔴

**1. Wealth effect:** nominal money is fixed (£10 is always £10) but its *real* value moves inversely with prices. Bread £1 → £10 = 10 loaves; bread £2 → 5 loaves.
```
P ↑ → real wealth ↓ → C ↓ → quantity of output demanded ↓
```

**2. Interest rate effect:** lunch €10 → hold €10; lunch €20 → need more money.
```
P ↑ → money demand ↑ → (fixed money supply) → i ↑ → I ↓ and loan-financed C ↓ → output demanded ↓
```
Why not just hold more cash? Forgone interest = the **opportunity cost** of liquidity (🔗 M1 §9.1 logic).

**3. Real exchange rate effect:** real FX rate = nominal rate **adjusted for price levels**.
```
P ↑ → real FX rate appreciates → X ↓, M ↑ → (X − M) ↓ → output demanded ↓
```
**Reinforcing channel:** P ↑ → i ↑ (effect 2) → foreign investors chase the return → currency demand ↑ → **appreciation** → further X↓ M↑. The two channels are **complementary — same direction, magnified** (Exhibit 9).

⚠️ All three are **movements ALONG AD** — the price level is the cause. Same movement-vs-shift discipline as 🔗 M1 §2.

---

## 10. Aggregate Supply — Three Curves, Three Horizons
**Exam importance: 🔴 Very High**

⚠️ "Short/long run" are **relative, imprecise in calendar time** — defined by *what can adjust* (🔗 M1 §10.3 SMC vs. LMC, same idea).

| Curve | Shape | Horizon | Why |
|---|---|---|---|
| **VSRAS** | **Horizontal** | Months/quarters | Firms flex output **without changing prices**: run plants more/less intensively, adjust hours, defer maintenance — as long as variable costs are covered |
| **SRAS** | **Upward sloping** | ~1+ years | **Wages/input prices are sticky** (annual reviews, multi-year union & supplier contracts). Output prices ↑, costs lag → **margins ↑** → expand output |
| **LRAS** | **Vertical** at potential output | Years–decade | Wages and input prices fully "catch up" — move **proportionally** with output prices → no margin incentive → output unchanged; only P shifts |

### The classical model behind LRAS 🔴
```
Y = F(K̄, L̄) = Ȳ
```
- Capital stock (embodying current technology) and labor supply fixed; net investment ΔK negligible over short periods
- **Ȳ = potential output = full employment / natural level of output** → unemployment at its **natural rate**: stable pool of job seekers ≈ vacancies, no bottlenecks
- The *truly* long run (K̄ itself grows) = the economic growth section (multiple decades)

⚠️ **Model-scope trap:** this "long run" allows wages/prices/expectations to adjust but holds **capital and technology fixed** — whereas 🔗 M2 §9h's long run made ALL factors variable including technology. Read which model the stem is in.

### Business cycle framing + asset link 🟡→🔴
- **Expansion:** real GDP ↑, unemployment ↓, capacity utilization ↑; **contraction** reverses all three. Recession = real GDP declining **≥ 2 consecutive quarters**.
- 🔴 **Asset-class link:** **equities** — GDP growth is the primary determinant of aggregate corporate profits; **fixed income** — expected inflation drives the real-vs-nominal rate spread (🔗 QM Fisher).

---

## 11. Shifts in Aggregate Demand
**Exam importance: 🔴 VERY HIGH — Exhibit 14 is pure direction-call material**

Anything **other than the price level** that changes desired spending SHIFTS AD (right = more demand at every price level).

### Exhibit 14 — an INCREASE in each factor
| Factor ↑ | AD shifts | Channel |
|---|---|---|
| Stock prices | Right | C (wealth) |
| Housing prices | Right | C (wealth) |
| Consumer confidence | Right | C |
| Business confidence | Right | I |
| Capacity utilization | Right | I (bottlenecks at **82–85%** trigger investment) |
| Government spending | Right | **DIRECT** component of AD |
| **Taxes** | **LEFT** | C and I — **indirect** (via disposable income & corporate profits) |
| Bank reserves | Right | i ↓ → I ↑ (and C) |
| **Exchange rate (FC per DC)** | **LEFT** | ⚠️ FC/DC ↑ = **appreciation** → X↓ M↑ |
| Global growth | Right | X ↑ (Japan/ASEAN example) |

⚠️ **Exhibit 14's FX row is a built-in polarity trap:** "exchange rate ↑" quoted as foreign-currency-per-domestic-unit is a **stronger** domestic currency → AD **left**. Always translate to "did the currency strengthen or weaken?" first.

### Factor detail worth keeping
- **Household wealth** = financial + real assets. Wealth ↑ → savings goals closer → save less, spend more of current income. Empirics: spending moves **3–7% of the wealth change** (developed; smaller in EM). ⚠️ This **asset-price wealth effect is a SHIFT**; §9's **price-level wealth effect is a MOVEMENT ALONG**. Same name, different mechanics — favorite trap.
- **Expectations/psychology:** confident consumers spend a higher portion of income; optimistic businesses invest more.
- **Fiscal policy:** G is **direct**; taxes are **indirect**. (Deficit mechanics: 🔗 Part 1 §7.)
- **Monetary policy mechanics 🔴:** money = currency in circulation + bank deposits. Central bank EXPANDS money supply by: (1) **buying securities** (open-market ops → new reserves → more lending), (2) **lowering required reserve ratio**, (3) **lowering the rate target** (adds reserves to hit it). Rate targeting and OMOs are two sides of one tool.

### What happens to INTEREST RATES when AD shifts right? 🔴 subtle, testable
| Cause | Interest rate |
|---|---|
| **Money supply increase** | **FALLS** (rates must drop to induce holding the extra money) |
| **Any other cause** (wealth, confidence, fiscal, exports…) | **RISES** — income ↑ → money demand ↑ vs. fixed real money supply. = **higher velocity V** in quantity-theory terms |

Distractor: "AD shifts right, therefore rates fall" — true **only** for the monetary cause.

### Exhibit 13 — expansionary monetary policy at long-run equilibrium 🔴 GUARANTEED
```
Money supply ↑ → AD right (AD₁→AD₂)
Very short run:  output Y₁→Y₂, prices UNCHANGED (along VSRAS)
Few quarters:    above-normal utilization → input prices rise → AS steepens
                 → prices to P₃, output slips back to Y₃
Long run:        AS vertical → output back to Y₁, prices at P₄
```
> **One-liner:** *money expansion raises output in the short run but affects ONLY the price level in the long run* (long-run money neutrality).

---

## 12. Shifts in Aggregate Supply
**Exam importance: 🔴 VERY HIGH — Exhibit 16's SRAS/LRAS split is guaranteed material**

### SRAS shifters — anything changing production costs or expected margins
| Factor ↑ | SRAS | LRAS | Note |
|---|---|---|---|
| **Nominal wages** | **Left** | **No effect** ⚠️ | Wages = largest cost component |
| **Input prices** (energy) | Left | No effect* | 1970s oil → SRAS left globally; oil matters less now (efficiency, less energy per unit GDP) |
| **Expected future prices** | **Right** | No effect | Firms anticipate better margins/pricing power — but **modest and temporary** (in aggregate firms can't all beat the general price level; inventory carry costs bind) |
| **Business taxes** | Left | No effect | Raise unit costs |
| **Subsidies** | Right | No effect | Lower unit costs |
| **Exchange rate (stronger DC)** | **Right** | No effect | Cheaper **imported inputs** → lower production costs |

**Unit labor cost — the better wage measure 🔴:**
```
%Δ unit labor cost = %Δ nominal wages − %Δ productivity
```
Wages +5% with productivity +5% → zero cost pressure → no shift. 🔗 M1 §10.3: SMC = w/MP(L) in growth-rate form — cost directly related to input prices, inversely to productivity.

⚠️ **Two traps in one event — a STRONGER domestic currency:**
```
AD LEFT    (exports less competitive, imports cheaper)
SRAS RIGHT (imported inputs cheaper)
```
Opposite directions from one shock — favorite exam construction.

*⚠️ **Permanence caveat (testable):** "no LRAS effect" from input prices holds only if *relative* input prices haven't changed **permanently**. A permanent relative price rise forces lasting conservation/efficiency losses → **LRAS shifts left too**.

### LRAS shifters — potential GDP grows 🔴
**Potential GDP** = productive capacity at full employment; **not static** — grows with the resource base. Each factor shifts **BOTH LRAS and SRAS right** (same underlying resources/technology):

1. **Supply of labor** — population growth, **participation rate**, net immigration
2. **Supply of natural resources**
3. **Supply of physical capital** — business investment in plant, equipment, software
4. **Supply of human capital** — labor QUALITY via education, training, skills
5. **Productivity and technology** — output per hour worked; drivers = capital per worker, workforce quality, technology (🔗 M1 §9.2 productivity benefits, firm-level version)

> **The clean split to memorize:** *resource/technology factors move BOTH curves; cost/price factors (wages, input prices, taxes, subsidies, expectations, FX) move SRAS ONLY.*

---

## 13. Equilibrium GDP and Prices — the Four Cases
**Exam importance: 🔴 VERY HIGH — the payoff section of the whole model**

Equilibrium = AD ∩ AS. P above equilibrium → unsold inventories → cut production/prices; P below → shortage → upward pressure. (🔗 M1 §3 disequilibrium logic, macro version.) Short-run equilibrium can sit **above or below** full employment — four cases:

### Case 1 — Long-run full employment 🔴
AD ∩ SRAS **on** LRAS → **equilibrium GDP = potential GDP**; unemployment at natural rate; everyone who wants a job has one.
⚠️ Practical caveat: potential GDP's *level* is unobservable/imprecise; economists trust the long-run **growth rate** estimate and watch **gap indicators** (unemployment, capacity utilization).

### Case 2 — Recessionary gap 🔴
**AD falls** (tighter money, higher taxes, pessimism, falling equity/housing) → **Y↓ AND P↓**. Gap = potential − equilibrium GDP.
- **Self-correction:** unemployment → workers accept lower nominal wages (each currency unit buys more at lower prices) → **SRAS shifts RIGHT** → back to potential. ⚠️ Takes **years**.
- **Policy route:** fiscal (cut taxes / raise G) or monetary (cut rates / expand money) → AD right. ⚠️ **Variable lags** → policy may end up REINFORCING the cycle instead of counteracting it.

### Case 3 — Inflationary gap 🔴
**AD rises beyond potential** → Y₂ > Y₁, P↑. Economy **overutilizes** resources (extra shifts, maxed equipment) → wages/input prices bid up → **SRAS shifts LEFT** → output back to Y₁ at **higher** price level P₃.
- Policy alternative: pull AD back left (raise taxes, cut G, drain reserves → i↑) to return without the price rise.
- **Inflation** = increase in the general price level from one period to the next.

### Case 4 — Stagflation 🔴
**SRAS shifts LEFT** (oil/input price shock) → **Y↓ AND P↑** — high unemployment AND high inflation together.
- History: 1973 oil ×4 → 1973–75 recession *with rising prices*; 1979–80 oil ×2 → 1980–82 global recession (US: Fed **tightened** into it to kill inflation, reinforcing the contraction).
- ⚠️ **Policy dilemma:** stimulating AD restores output only at a **permanently higher price level**; the self-correcting SRAS drift back is painfully slow.

### The conclusions grid 🔴 MEMORIZE COLD
| Shift | Real GDP | Unemployment | Price level |
|---|---|---|---|
| **AD ↑** | ↑ | ↓ | ↑ |
| **AD ↓** | ↓ | ↑ | ↓ |
| **AS ↑** | ↑ | ↓ | **↓** |
| **AS ↓** | ↓ | ↑ | **↑** |

> **The diagnostic:** GDP and unemployment ALWAYS move opposite; **the price level tells you WHICH curve moved.** Output & prices same direction → demand-driven. Opposite → supply-driven. Demand-driven expansions → rising rates & inflation; **supply-driven expansions → LOWER inflation & rates** (the benign kind).

---

## 14. Investment Implications of AD/AS Shifts
**Exam importance: 🔴 High — expect a scenario question ("statistics suggest a decline in AD; the analyst should most likely...")**

Indicators of AD direction: consumer sentiment, factory orders (durables & nondurables), unfilled orders, housing starts, hours worked, inventory changes.

| Scenario | Conditions | Strategy |
|---|---|---|
| **AD falling (recession)** | Profits ↓, commodity prices ↓, **rates ↓**, credit demand ↓ | REDUCE: **cyclicals**, commodities/commodity equities, speculative equities, low-credit-quality bonds. INCREASE: **defensives**, IG/government bonds, **LONG-maturity** fixed income (most responsive to falling rates) |
| **AD rising (inflationary gap)** | Profits ↑, commodities ↑, **rates ↑**, inflation building | INCREASE: **cyclicals**, commodities/commodity equities, **junk bonds** (default risk falls in expansion). REDUCE: defensives, fixed income — especially **long-maturity** |
| **AS falling (stagflation)** | Inflation ↑ with output ↓ | REDUCE: fixed income (rising nominal rates) AND most equities (margin squeeze). INCREASE: **commodities — the only winner** |
| **AS rising** | Growth WITH low inflation | Favorable for **almost every asset class EXCEPT commodities** |

- **Cyclical companies:** sales/profits expand and contract with the cycle → hit hardest in slowdowns. **Defensive companies:** little sensitivity → only modest earnings declines.
- ⚠️ Long-maturity logic = duration in disguise (longer maturity → bigger price response to a rate change; formalized in Fixed Income).
- Timing note the curriculum makes: the strategy works best **implemented before other market participants recognize the shift**.

---

# PART 3 — Economic Growth (preliminary)

## 17. Sources, Sustainability and Measures of Growth — what the practice set tested
**Exam importance: 🔴 High — ⚠️ PRELIMINARY: built from the official practice questions 26–30, not yet from the curriculum pages. Upload Part 3 and this section gets rewritten in full.**

### The production function and the three sources 🔴
```
Y = A × F(K, L)
A = total factor productivity (TFP) — a scale factor, mainly TECHNOLOGY
K = capital stock,  L = labor supply
```
- **Sources of growth:** labor supply, capital stock, technology/TFP (plus human capital and natural resources, as in §12's LRAS shifters).
- 🔴 **Developed economies:** technology/TFP is the dominant source. Capital per worker is already deep and labor-force growth is slow, so more K or L runs into **diminishing marginal returns**; only technology lifts that ceiling. *(official Q26)*
- **TFP↑ means more output for ANY given inputs** — not "higher returns to scale" and not "the sustainable growth rate" (those are different concepts). *(official Q29 — missed)*

### What is measurable 🔴 *(official Q27 — missed)*
| Measure | Observable? | Why |
|---|---|---|
| **Labor productivity** = output per hour worked | **Yes — directly** | Output and hours are both recorded |
| **Total factor productivity** | No — a **residual** | What remains of output growth after labor and capital contributions are removed |
| **Potential GDP** | No — an **estimate** | Level unobservable; only its growth rate is inferred (🔗 §13 Case 1 caveat) |

### Sustainable growth rate 🔴 *(official Q28)*
```
Sustainable (potential) growth ≈ growth in the LABOR FORCE + growth in LABOR PRODUCTIVITY
Labor-productivity growth ≈ TFP growth + contribution of capital deepening (capital-to-labor ratio growth)
```
⚠️ Distractor: "TFP growth + capital/labor growth" is the decomposition of *labor productivity*, not the whole sustainable growth rate; "weighted average of K and L growth" omits technology.

### Convergence 🔴 *(official Q30)*
**Diminishing marginal productivity of capital:** each added unit of capital per worker yields less extra output. Capital-scarce emerging economies therefore earn a high marginal product on new capital and grow faster than capital-rich developed ones → **income levels converge** over time. Not caused by TFP alone or by resource exhaustion.

### Links back to Parts 1–2
- Growth factors = the "both curves" LRAS shifters of §12.
- Real GDP per capita (§5) is the growth metric; nominal growth overstates it by inflation.

---

## 15. Quick-Reference Sheet

### Part 1 — Aggregate Output and Income

```
── THE IDENTITY ──
Output = Income = Expenditure   (three decompositions of one quantity)
Income forms: compensation | rent (property) | interest (lending)
              | profit (capital + risk);  operating surplus = rent+int+profit
All income attributed to households (ultimate owners)

── GDP INCLUSION RULES ──
1. Produced THIS period   → excl. resales, transfer payments, capital gains
2. Market-valued          → excl. own-benefit work, barter, underground,
                            pollution byproducts
   EXCEPT imputed: owner-occupied rent; govt services AT COST (no value added)
3. FINAL goods only       → excl. intermediates (resold / used as inputs)
Final price = Σ value added at each stage = income created
Value added = receipts − cost of inputs from prior stage
Underground % missed: underground/(100 + underground)  e.g., 60/160 = 37.5%

── NOMINAL vs REAL ── ⭐ the guaranteed calc
Nominal GDPₜ = Pₜ × Qₜ         Real GDPₜ = P_B × Qₜ
Deflator = (Nominal/Real) × 100       Real = Nominal/(deflator/100)
(1 + nominal g) = (1 + real g) × (1 + inflation)
Use REAL GDP for activity + cross-country comparison
Per capita real GDP ≈ standard of living

── EXPENDITURE COMPONENTS ──
GDP = C + I + G + (X − M)
I = capital goods + INVENTORY investment (gross: incl. replacement;
    most volatile component)
G EXCLUDES transfers (they show up in C when spent)
Trade deficit = spending > production → financed by foreign borrowing

── THE FUNDAMENTAL IDENTITY ──
Y = C + S + T   and   Y = C + I + G + (X − M)
S = I + (G − T) + (X − M)
G − T = (S − I) − (X − M)
Fiscal deficit financed by: private surplus (S>I) or trade deficit or both
⚠ substitute SIGNS explicitly — trade deficit means (X − M) < 0

── BEHAVIOR ──
C = C(Y − T)  driven by disposable income (+ wealth)
I = I(r, Y):  ↓ in real rate, ↑ in output
G exogenous;  net taxes t(Y) rise with Y → AUTOMATIC STABILIZER
Net exports: ↓ in domestic Y, ↑ in foreign Y, ↑ on currency depreciation
MPC + MPS = 1;  APC = C/Y (average ≠ marginal);  high APC → bigger
   response to income-raising policy
```

### Part 2 — Aggregate Demand and Aggregate Supply

```
── AD: WHY DOWNWARD SLOPING ── (NOT the micro income-fixed logic!)
Two conditions: expenditure = income; real money supply willingly held
1. Wealth:        P ↑ → real money wealth ↓ → C ↓
2. Interest rate: P ↑ → money demand ↑ → i ↑ → I ↓, C ↓
3. Real FX:       P ↑ → real FX appreciates → X ↓ M ↑
   (+ i ↑ attracts foreign funds → more appreciation; complementary)
All three = movements ALONG AD

── AS: THREE CURVES ──
VSRAS horizontal (months: flex output, prices fixed)
SRAS upward (wages/inputs sticky → margins drive output)
LRAS vertical at potential:  Y = F(K̄, L̄) = Ȳ
  = full employment / natural output, natural unemployment rate
  (capital & technology FIXED in this model's long run)

── AD SHIFTERS (increase in each → ) ──
RIGHT: stock/housing prices, consumer/business confidence,
       capacity utilization (82–85% trigger), G, bank reserves,
       global growth
LEFT:  taxes; FX appreciation (FC per DC ↑!)
G direct; taxes indirect.  Wealth effect: 3–7% of wealth change
   (asset-price wealth effect = SHIFT; price-level version = ALONG)
Money supply ↑: CB buys securities | cuts reserve ratio | cuts rate target
Rates when AD shifts right: money-supply cause → i ↓;
   EVERY other cause → i ↑ (money demand ↑; higher velocity V)
Monetary expansion: SR output ↑ (VSRAS) → LR only prices ↑ (neutrality)

── AS SHIFTERS ──
SRAS ONLY (cost/price factors):
  LEFT:  nominal wages ↑, input prices ↑, business taxes ↑
  RIGHT: subsidies ↑, expected future prices ↑ (modest/temporary),
         stronger DC (cheaper imported inputs)
%Δ unit labor cost = %Δ wages − %Δ productivity
BOTH SRAS + LRAS (resource/technology factors):
  labor supply | natural resources | physical capital | human capital
  | productivity & technology
⚠ stronger currency: AD LEFT but SRAS RIGHT (one event, two directions)
⚠ PERMANENT relative input-price rise → LRAS shifts left too

── FOUR EQUILIBRIA ──
1. Full employment: AD ∩ SRAS on LRAS → GDP = potential
2. Recessionary gap (AD ↓): Y↓ P↓; self-correct = wages ↓ → SRAS RIGHT
   (slow, years) or policy → AD right (variable lags may reinforce cycle)
3. Inflationary gap (AD ↑): Y↑ P↑ → input prices bid up → SRAS LEFT
   → back to potential at HIGHER P
4. Stagflation (SRAS ↓): Y↓ AND P↑ (1970s oil); stimulating AD
   → output back only at permanently higher P
Recession = real GDP ↓ for ≥ 2 consecutive quarters

── CONCLUSIONS GRID ──
AD↑: GDP↑ U↓ P↑     AD↓: GDP↓ U↑ P↓
AS↑: GDP↑ U↓ P↓     AS↓: GDP↓ U↑ P↑
GDP & unemployment always opposite; PRICE LEVEL identifies the curve
Demand-driven expansion → rates & inflation ↑; supply-driven → both ↓

── INVESTMENT PLAYBOOK ──
AD ↓: profits/commodities/rates ↓ → defensives, IG/govt bonds,
      LONG-maturity FI;  cut cyclicals, commodities, junk
AD ↑: reverse → cyclicals, commodities, junk;  cut long FI, defensives
AS ↓ (stagflation): only COMMODITIES win; cut FI and most equities
AS ↑: good for everything EXCEPT commodities
Cyclical = profits track the cycle; defensive = insensitive
```

---

## 16. How This Module Shows Up on the Exam

| Topic | Style | Likelihood |
|---|---|---|
| Real GDP / deflator calculation (any of the 3 rearrangements) | **Calc** | 🔴 Very high |
| Nominal = real × inflation decomposition | **Calc** | 🔴 High |
| Which item is included/excluded from GDP (3 criteria + imputed exceptions) | Concept | 🔴 Very high |
| Value-added table: final price = Σ value added (watch parallel inputs) | **Calc** | 🔴 High ⭐ *your miss* |
| Imported inputs reduce domestic value added / GDP | Concept | 🔴 High |
| GDP = C + I + G + (X − M); classify an expenditure into a component | Concept | 🔴 Very high |
| Transfers: not in G, excluded as transfers, included in C when spent | Concept | 🔴 High |
| S = I + (G − T) + (X − M) — solve for one term or infer direction | **Calc** | 🔴 High |
| Fiscal deficit financing: (S − I) and/or trade deficit | Concept | 🔴 High |
| MPC vs. MPS vs. APC | Concept/**calc** | 🔴 High |
| I = I(r, Y) — the two drivers of investment | Concept | 🟡 Medium |
| Automatic stabilizer definition | Concept | 🟡 Medium |
| Output = income = expenditure; four income forms; operating surplus | Concept | 🟡 Medium |
| Inventory investment volatility → short-run fluctuations | Concept | 🟡 Medium |
| Gross vs. net investment | Concept | 🟡 Medium |
| Underground economy / imputed values / data reliability | Concept | 🟢 Low-Med |
| Real GDP per capita as standard of living | Concept | 🟢 Low |
| **— PART 2: AD/AS —** | | |
| Conclusions grid: AD/AS shift → GDP, unemployment, price level | Concept | 🔴 Very high |
| Diagnose the shock from data (P and Y directions → which curve) | Concept | 🔴 Very high |
| Exhibit 14: which factor shifts AD which way | Concept | 🔴 Very high |
| Exhibit 16: SRAS-only vs. SRAS+LRAS shifters | Concept | 🔴 Very high |
| Why AD slopes down: the three effects (NOT micro logic) | Concept | 🔴 Very high |
| Four equilibria: recessionary/inflationary gap, stagflation, full employment | Concept | 🔴 Very high |
| Self-correction mechanism (wages → SRAS) vs. policy route + lags | Concept | 🔴 High |
| Monetary expansion: SR output ↑, LR prices only (Exhibit 13) | Concept | 🔴 High |
| Investment strategy per scenario (cyclicals/defensives/FI maturity/commodities) | Concept | 🔴 High |
| Rates when AD shifts right: money cause ↓, all other causes ↑ | Concept | 🔴 High |
| VSRAS/SRAS/LRAS shapes and why | Concept | 🔴 High |
| Unit labor cost = %Δ wages − %Δ productivity | **Calc** | 🟡 Medium |
| Currency appreciation: AD left AND SRAS right (two directions) | Concept | 🔴 High |
| Central bank tools (OMO, reserve ratio, rate target) | Concept | 🟡 Medium |
| Wealth effect: shift (asset prices) vs. movement along (price level) | Concept | 🟡 Medium |
| Potential GDP level unobservable; growth rate estimable | Concept | 🟡 Medium |
| Stagflation history (1970s oil) + policy dilemma | Concept | 🟡 Medium |
| Y = F(K̄, L̄); natural rate of unemployment | Concept | 🟡 Medium |

**⭐ Your flagged weak spots (this module so far):**
- **Exhibit 3 — value-added with PARALLEL inputs (§3):** subtract the sum of ALL inputs feeding a stage (5,000), not the row above; verify Σ value added = final price (18,000); imports REDUCE domestic value added/GDP. Re-do this table from scratch until the 3-step routine is automatic.

**⭐ Official practice problems (2026-10-11): 30 attempted (28 unanswered), 13 missed — grouped by error type, not by topic:**

| Error type | Missed | What went wrong → the fix |
|---|---|---|
| **Direction / polarity** | Q14, Q16, Q20 | Q14: S↑ with I, Y fixed → net exports must RISE (= capital outflow); Q16: LOWER price level → real FX *depreciates* → NX↑; Q20: a *weak* currency RAISES AD. Fix: write the chain from the direction the stem gives; translate FX into strong/weak first; substitute signs into the identity. |
| **Which curve? / short-run vs long-run adjustment** | Q19, Q21, Q24, Q25 | Q19: indexed wages → SRAS *steeper* (slope = cost stickiness); Q21: LRAS left = *productivity* (resource factor), wages move SRAS only; Q24: stagflation can never come from AD. Q25: a supply shock raises prices only in the SHORT run — with no money expansion, slack pulls input prices down, SRAS returns, long-run P unchanged. Fix: cost/price factors → SRAS only; resource/technology → both; output & prices opposite → supply shock; permanent inflation needs money. |
| **Answering the wrong quantity** | Q5 | Asked for value added by the *final step* (5,000 − 2,000 = 3,000), answered the final price. Fix: re-read the stem's last line before choosing — which step, unit, period? Same family as the Exhibit 3 miss. |
| **Annualizing / compounding** | Q9 | 190 → 212.8 over two years is (1.12)^½ − 1 = 5.8%/yr, not 12%/2 = 6%. Fix: multi-year "annual" = geometric. |
| **Definition nuance / coverage gap** | Q12, Q17, Q27, Q29 | Q12: personal income chain was missing from the note (now §1b); Q17: natural output ≠ *maximum* output; Q27: labor productivity (output/hour) is the directly measurable one — TFP is a residual; Q29: TFP↑ = output for given inputs. Q27/Q29 are Part 3, not yet in the note (preliminary §17). Fix: find the one wrong word in each distractor; flag unfamiliar topics as note gaps. |

**Part 1 10/14 · Part 2 4/11 · Part 3 2/4 (one unanswered).** The AD/AS section needs a second pass focused on *directions and curve identification*, not on re-reading definitions. The Study Hub's "My error patterns" panel drills exactly these groups.

**⭐ Outstanding practice questions (answer before the next session):**
- **Q1 (calc, Part 1):** Nominal GDP 4,000 → 4,600; deflator 100 → 110. Real GDP growth is *closest to*: A) 4.5% B) 15.0% C) 5.0%
- **Q2 (concept, Part 1):** *Most likely* included in GDP? A) government unemployment benefit B) imputed rent of owner-occupied home C) resale of a three-year-old apartment above purchase price
- **Q3 (identity, Part 1):** S = 500, I = 400, fiscal deficit = 40. The trade balance is *closest to*: A) +60 surplus B) −60 deficit C) +140 surplus
- **Q4 (concept, Part 2):** The price level falls, all else initially unchanged. *Most likely*: A) AD shifts right as real wealth rises B) movement down along AD as lower rates stimulate investment C) AD shifts left as exports become more competitive
- **Q5 (concept, Part 2):** Falling real GDP together with a rising price level is *most consistent with*: A) leftward shift of AD B) leftward shift of SRAS C) movement along LRAS
- **Q6 (concept, Part 2):** A country's currency appreciates significantly. All else equal: A) AD right, SRAS left B) AD left, SRAS right C) both AD and SRAS left

**⭐ Carry-over watch (your error pattern):** Part 1's identities and inclusion rules, and essentially ALL of Part 2 (Exhibit 14, Exhibit 16, the conclusions grid, the interest-rate subtlety, the FX double-direction) are **direction/polarity** items — the same failure mode as Q3 (M1), Q6/Q7 (M2), the Exhibit 3 miss, and the QM sign error. Trace every chain explicitly (P↑ → ... → ?); translate every FX statement to "stronger or weaker currency?"; never answer direction questions from intuition.

**Study priority order (Parts 1–2):**
1. **Conclusions grid + diagnosing the shock from P and Y directions** (Part 2 §13) — highest density of exam points
2. **Nominal/real/deflator triangle** — all three rearrangements + the growth decomposition
3. **Exhibit 14 and Exhibit 16 shift grids** — including the SRAS-only vs. both-curves split and the FX rows
4. **Four equilibria + self-correction vs. policy** — recessionary gap, inflationary gap, stagflation
5. **The three effects behind AD's slope** + the interest-rate-when-AD-shifts subtlety
6. **GDP inclusion rules** — three criteria, exclusions, two imputed exceptions
7. **Value-added table mechanics** ⭐ *(your Exhibit 3 miss)* — parallel inputs, Σ check, import adjustment
8. **S = I + (G − T) + (X − M)** — both rearrangements, with signs
9. **Investment playbook** per scenario
10. Components C/I/G/X−M, MPC/MPS/APC, monetary policy tools, unit labor cost, Exhibit 13 dynamics

> **Next up in this reading (Part 3):** sources, sustainability, and measures of economic growth. Upload those pages and the note gets completed.
