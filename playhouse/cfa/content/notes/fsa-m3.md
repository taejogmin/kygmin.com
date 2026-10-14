# CFA Level I — Financial Statement Analysis
# Module 3: Analyzing Balance Sheets
## Complete — §3.01 Introduction through §3.11 Statement of Changes in Equity (Deduplicated vs. FSA Modules 1–2 and Economics)

> **Big picture:** The second statement deep-dive. Where Module 2 was about *when* and *how much* revenue and expense enter, this reading is about *what the balance sheet's numbers mean and how they were measured*: **current vs. non-current classification** (the four tests; the "one year or operating cycle, whichever is *greater*" trap); the **liquidity-based presentation** exception; **current assets** line by line (cash equivalents, marketable securities, receivables and the allowance gross-up, inventories under IFRS vs. US GAAP, prepaids); **current liabilities** (payables, accrued, deferred revenue, and the AP-vs-deferred-revenue liquidity contrast); **PP&E and investment property** (cost vs. revaluation, the IFRS impairment arithmetic, reversal rules); **deferred tax assets**; the **six equity components** and the issued/outstanding/treasury arithmetic; and the **statement of changes in equity**. Intangibles, non-current liabilities, common-size balance sheets and liquidity/solvency ratios are *not* in this reading. Pattern risks: the classification criteria, the inventory grid and the four equity-statement items are truncated-rule territory; the impairment, allowance and roll-forward arithmetic are wrong-quantity territory (the same multi-term-identity slip as F2 Example 3).

**Importance legend:**
- 🔴 **High** — appears on nearly every exam
- 🟡 **Medium** — regularly tested, usually conceptual
- 🟢 **Low** — occasionally tested, know the definition

**Deduplication cross-references used below:**
| Marker | Points to |
|---|---|
| 🔗 F1 | FSA Module 1 (Introduction to Financial Reporting) |
| 🔗 F2 | FSA Module 2 (Analyzing Income Statements) |
| 🔗 E1–E7 | Economics Module notes 1–7 |

**Already covered elsewhere (study it there, not here):**
| Topic | Where it lives |
|---|---|
| Balance sheet names; A = L + E; equity as residual; book value = equity | F1 §6 |
| IFRS requires current/non-current classification but not ordering | F1 §6 |
| The five elements — asset, liability, equity definitions | F1 §4 |
| The six measurement bases | F1 §4 |
| Going-concern and accrual assumptions | F1 §4 |
| Depreciation methods; goodwill/indefinite-life intangibles impairment-tested; land not depreciated; revaluation model (IFRS only) | F2 §4 |
| Securities classification: HTM, trading/FVPL, AFS/FVOCI | F2 §7 |
| Contract assets, receivables, contract liabilities | F2 §2 |
| Doubtful-accounts allowance — the matching treatment | F2 §3 |
| OCI components and AOCI; the equity roll-forward | F1 §8, F2 §7 |
| Non-controlling interest inside equity | F1 §6–7 |
| Common-size method | F2 §6 |

---

## 0. Introduction and Components of the Balance Sheet (§3.01–3.02)
**Exam importance: 🟡 Medium → 🔴 for two items: the "why book equity ≠ market/intrinsic value" three-reason list, and the IFRS liquidity-presentation exception.**

### What the balance sheet tells an analyst 🟡
- Discloses a company's **resources (assets)** and its **sources of capital (equity and liabilities)**. Used to assess ability to **pay near-term operating needs**, **meet future debt obligations**, and **make distributions to owners**.
- **A = L + E.** 🔗 F1 §6.
- Names: balance sheet = **statement of financial position** = **statement of financial condition** (SAP uses the first; Apple the second).

### The measurement framing — the reading's theme 🔴
- Some items are measured at **historical cost** (or a variation), others at **fair value** → the balance sheet is a **mixed model**. (🔗 F1 §4.)
- The measurement issues are **closely linked to revenue and expense recognition** (🔗 F2).

### The elements, restated with the recognition test 🟡
| Element | Definition |
|---|---|
| **Assets** | Resources **controlled** as a result of past events, from which **future economic benefits are expected to flow TO** the entity |
| **Liabilities** | Obligations from past events or **current conditions (e.g., a constructive obligation)**, whose settlement is expected to result in an **outflow FROM** the entity |
| **Equity** | Owners' **residual interest**; **A − L = E** |

- **Recognition test (quotable):** recognize only if (1) it is **probable** that a future economic benefit will **flow to or from** the entity, **and** (2) the item has a **cost or value that can be measured with reliability**.

### Why book equity is NOT market or intrinsic value 🔴 — three reasons
| # | Reason |
|---|---|
| **1. Mixed measurement model** | Some items at **historical cost**, others at **fair value** — the bases significantly affect reported amounts |
| **2. Point-in-time values** | Even fair-value items reflect value **at period end**; values **change afterward** |
| **3. Value depends on more than the balance sheet** | Value is a function of **future cash flows and market conditions**; **reputation and management skills** are **not on the balance sheet** |

⚠️ Distractor: "the balance sheet reports the market value of equity." Also: "equity = assets − liabilities" is a *definition*, not a reason book ≠ market.

### Exhibits 1 and 2 — SAP (IFRS) and Apple (US GAAP) 🟡
| | **SAP** (€m, 2017) | **Apple** ($m, 2017) |
|---|---|---|
| Total current assets | 11,930 | 128,645 |
| Non-current assets | 30,567 | 246,674 *(computed)* |
| **Total assets** | **42,497** | **375,319** |
| Total current liabilities | 10,210 | 100,814 |
| Non-current liabilities | 6,747 | 140,458 *(computed)* |
| **Total liabilities** | **16,957** | **241,272** |
| **Total equity** | **25,540** | **134,047** |

- **Apple's fiscal year** ends the last Saturday of September → about **every six years a 53-week year**. ⚠️ That matters for the **period** statements (income, cash flow), **not the balance sheet** (a point-in-time snapshot).
- Apple's non-current subtotals are **not on the face** — a US GAAP filer need not show them.

### Liquidity — two senses 🔴
| Scope | Definition |
|---|---|
| **The company** | Availability of **cash to meet short-term needs** |
| **A particular asset** | Its **"nearness to cash"** — converts to cash **in a short time at a price close to fair market value** |

Example: a small holding of an **actively traded stock** is far more liquid than **commercial real estate**.

### The current/non-current requirement — and the IFRS exception 🔴
- **Both IFRS and US GAAP require** separate current and non-current classifications.
- ⚠️ **IFRS exception:** not required **if a liquidity-based presentation provides reliable and more relevant information** — typical for **banks**. US GAAP has no such exception in this reading.

---

## 1. Current and Non-Current Classification (§3.03)
**Exam importance: 🔴 VERY HIGH — "one year OR one operating cycle, whichever is GREATER" is one of the most-tested phrases in FSA; the four current-liability criteria are a guaranteed list; working capital is a guaranteed calc.**

### Current assets 🔴
> **Current assets** = held primarily for **trading**, or expected to be **sold, used up, or realized in cash** within **one year OR one operating cycle, WHICHEVER IS GREATER**.

- **Operating cycle** = average time from **acquiring inventory** to **collecting cash from sales**. **If not clearly identifiable, assume one year.**
- ⚠️ **The trap:** operating cycles **longer than a year** — **tobacco, distillery, lumber**. Inventory held **more than a year** is **still current**, because it will be sold **within an operating cycle**.
- **Non-current assets** = everything else (long-term, long-lived).

### What each side signals 🟡
| | Current assets | Non-current assets |
|---|---|---|
| Role | **Operating purposes** — cash plus items to be converted (receivables), used up (prepaids) or sold (inventory) | **Infrastructure**; not consumed or sold in the current period |
| Tells the analyst | **Operating activities and capability** | **Strategic, longer-term** investment decisions |

### Current liabilities 🔴 — the four criteria (ANY ONE suffices)
1. Expected to be settled in the entity's **normal operating cycle**; **or**
2. Held primarily for the purpose of **being traded**; **or**
3. **Due to be settled within one year** after the balance sheet date; **or**
4. The entity does **not have an unconditional right to defer settlement for at least one year**.

**Memory hook:** **Cycle — Traded — One year — No right to defer.** ⚠️ Criterion 4: a liability the company *could* be called on to pay within a year is current even if it *expects* not to.

**IFRS operating-items rule 🔴:** trade payables and operating accruals (employee costs etc.) are **part of working capital** → **current even if settled more than one year out**.

### Working capital 🔴 FORMULA

(CA = current assets, CL = current liabilities)

$$
\text{Working capital} = \text{CA} - \text{CL}
$$

| | CA | CL | Working capital |
|---|---|---|---|
| SAP (€m) | 11,930 | 10,210 | **1,720** |
| Apple ($m) | 128,645 | 100,814 | **27,831** |

- Signals the ability to **meet liabilities as they fall due**.
- ⚠️ **Two-sided:** adequate working capital is **essential**, but **excessive** working capital ties up funds that could be used **more productively elsewhere**.
- ⚠️ Non-current liabilities are **not** in the formula — a stem that lists them is offering a distractor.

### Classified balance sheet 🟡
A balance sheet with **separately classified** current and non-current items = a **classified balance sheet**. IFRS does **not** specify order or format.

---

## 2. Liquidity-Based Presentation (§3.04)
**Exam importance: 🟡 Medium — when it's used, who uses it, and what it looks like.**

### The rule 🔴
- Used **instead of** current/non-current **when it provides information that is reliable and more relevant**.
- **All assets and liabilities in order of liquidity**, with **no current/non-current subtotals**.
- **Candidates: banks** and similar financial entities.

### Exhibit 3 — HSBC (IFRS), assets, 2017 ($m) 🟡
| Order | Line | Amount |
|---|---|---|
| Most liquid | Cash and balances at central banks | 180,624 |
| | Trading assets | 287,995 |
| | Derivatives | 219,818 |
| | Loans and advances to banks | 90,393 |
| | **Loans and advances to customers** (largest) | **962,964** |
| | Financial investments | 389,076 |
| | Interests in associates and JVs | 22,744 |
| | Goodwill and intangibles | 23,453 |
| Least liquid | Deferred tax assets | 4,676 |
| | **Total assets** | **2,521,771** |

⚠️ What's *absent*: no "total current assets" line. That absence identifies the format.

| Stem describes... | Format |
|---|---|
| Separate current and non-current subtotals | **Classified** balance sheet |
| All items in liquidity order, no subtotals, a bank | **Liquidity-based** |

---

## 3. Current Assets: Cash, Marketable Securities, Trade Receivables (§3.05)
**Exam importance: 🔴 HIGH — the gross-vs-net receivables calculation is a guaranteed small calc with a built-in trap; the allowance mechanics and the earnings-manipulation point are reliable concept items.**

### Required line items 🟡
If material: **cash and cash equivalents, trade and other receivables, inventories, financial assets with short maturities**.

| | SAP (€m) | Apple ($m) |
|---|---|---|
| Cash and cash equivalents | 4,011 | 20,289 |
| Short-term marketable securities | — | 53,892 |
| Trade receivables | 5,899 (allowance €74m **in the notes**) | 17,874 (**net of $58m allowance on the face**) |
| Inventories | — | 4,855 |
| **Total current assets** | **11,930** | **128,645** |

### Cash and cash equivalents 🔴
- **Cash equivalents** = **highly liquid, short-term investments so close to maturity that interest-rate changes pose minimal risk**; **original maturity ≤ three months**. Examples: **T-bills, commercial paper, money market funds**.
- **Excludes** amounts **restricted in use for at least 12 months**. ⚠️ Restricted cash is not a cash equivalent.
- Financial assets measured at **amortised cost** or **fair value** — for cash equivalents the two are immaterially different.

### Marketable securities 🟡
**Publicly traded debt or equity** valued from public-market prices. ⚠️ SAP's "other financial assets" (time deposits, loans to employees) are **not** marketable securities — more properly **receivables**.

### Trade receivables 🔴
Amounts owed by **customers** for goods/services **already delivered**; reported at **net realizable value**.

| # | What the analyst checks | Signal |
|---|---|---|
| **1** | **Receivables relative to sales** | A **significant increase** → **trouble collecting cash** |
| **2** | **The allowance for doubtful accounts** | Management's collectability estimate |
| **3** | **Concentration of credit risk** | Apple: **no customer ≥ 10% of revenue**, but **two customers ≥ 10% of receivables** |

⚠️ Concentration can be low on *revenue* and high on *receivables* at the same time.

### The allowance — mechanics 🔴
- A **contra account** netted against receivables: **gross − allowance = net**.
- Apple's basis: **historical experience, age of the balances, credit quality, economic conditions**.

| Event | Income statement | Allowance | Receivables (gross) |
|---|---|---|---|
| **Record the estimate** | **Bad-debt expense ↑** (hits NI) | **↑** | — |
| **Write off a specific account** | **No effect** | **↓** | **↓** |

⚠️ A write-off does **not** hit the income statement, and **net receivables are unchanged** (gross ↓ and allowance ↓ equally).

### Example 1 — the gross-up 🔴 CALCULATION

$$
\begin{gathered}
\text{\% uncollectible} = \frac{\text{Allowance}}{\text{Gross receivables}} \\[8pt]
\text{Gross} = \text{Net} + \text{Allowance}
\end{gathered}
$$

$$
\begin{gathered}
2017: \frac{58}{17{,}874 + 58} \\[4pt] = \frac{58}{17{,}932} = 0.32\% \\[14pt]
2016: \frac{53}{15{,}754 + 53} \\[4pt] = \frac{53}{15{,}807} = 0.34\%
\end{gathered}
$$

⚠️ **The trap:** the balance-sheet figure is **net**. **Add the allowance back before dividing.**

### What makes the allowance fall 🔴
| Scope | Cause |
|---|---|
| **In absolute terms** | A **decrease in credit sales** |
| **As a % of receivables** | **Improved credit quality**; **stricter credit policies**; **stricter risk management** (insurance) |

**Earnings management (quotable):** the allowance rests on estimates → can be **biased**:
- To **raise** income: **over-estimate collectability → under-estimate bad-debt expense**.
- In a **good** year: **over-reserve**, then **reverse in a poorer year** (smoothing).

⚠️ Direction: lower allowance → lower expense → **higher** net income.

---

## 4. Current Assets: Inventories and Other Current Assets (§3.06)
**Exam importance: 🔴 VERY HIGH — four IFRS-vs-US GAAP inventory differences in one page.**

### Inventories 🟡
**Finished goods**, **raw materials**, **work-in-process**. Apple $4,855m. **SAP has no inventory** — a **software and services** provider.

### Measurement — the four differences 🔴 MEMORIZE AS A GRID
| Issue | **IFRS** | **US GAAP** |
|---|---|---|
| **Basis** | **Lower of cost and NRV** — **all** inventories | **Lower of cost and NRV** — *unless* **LIFO or retail** |
| **LIFO / retail** | n/a | **Lower of cost or MARKET**: market = **replacement cost**, ceiling **NRV**, floor **NRV − normal profit margin** |
| **Reversal of write-down** | **Permitted**, up to the original write-down | **NOT permitted** |
| **Cost formulas** | **FIFO, weighted average, specific identification** | Those three **plus LIFO** |

$$
\begin{gathered}\text{NRV} = \text{Selling price} \\[4pt] - \text{Costs to complete} - \text{Costs to sell}\end{gathered}
$$

- **Cost of inventories** = costs of **purchase**, **conversion**, and other costs of bringing inventories to their **present location and condition**.
- IFRS "**cost formulas**" = US GAAP "**cost flow assumptions**".

**Memory hooks:** **NRV everywhere under IFRS; US GAAP carves out LIFO/retail for "market."** **Reversal: IFRS yes, US GAAP no.** **LIFO: US GAAP only.**

⚠️ **Four swaps:** (1) "lower of cost or market" for IFRS; (2) market = "fair value" (it's replacement cost); (3) reversal under US GAAP; (4) LIFO under IFRS.

### Write-downs 🔴
NRV (or market) below carrying amount → **write down**; the loss hits the **income statement**. Under IFRS a later recovery is reversed (up to the original write-down); under US GAAP it stays down.

### COGS link 🟡
The **cost formula** sets **both** COGS on the income statement **and** ending inventory on the balance sheet.

### Prepaid expenses 🔴
- **Operating expenses paid in advance** → because expenses are recognized **when incurred, not when paid**, the payment creates an **ASSET**.
- **Insurance example:** pay a year's premium on **31 December** → **asset (prepaid insurance)**, no expense yet; then **1/12 expensed each month**.

⚠️ "Prepaid expenses are expenses" is the swap — they're **assets** until used.

---

## 5. Current Liabilities (§3.07)
**Exam importance: 🔴 HIGH — the four line-item definitions and Example 2's deferred-revenue mechanics.**

| | SAP (€m) | Apple ($m) |
|---|---|---|
| Trade payables | 1,151 | 49,049 |
| Financial liabilities / commercial paper + current LTD | 1,561 | 11,977 + 6,496 |
| Accrued / other non-financial | 3,946 | 25,744 |
| Deferred income / revenue | 2,771 | 7,548 |
| **Total current liabilities** | **10,210** | **100,814** |

### The four common types 🔴
| Item | Definition | Analyst angle |
|---|---|---|
| **Trade payables** | Owed to **vendors** — the unpaid portion of credit purchases | Payables vs purchases; **trade credit** = vendor financing |
| **Financial liabilities** | **Bank loans, notes payable, commercial paper** + **current portion of long-term debt** | SAP: mostly bonds due next year |
| **Accrued expenses** | **Recognized on the income statement but not yet paid** | Taxes, interest, warranties, wages payable |
| **Deferred revenue** | **Payment received before delivery** → obligation to deliver or refund | Subscriptions, service contracts, gift cards |

⚠️ **Three swaps:** (1) current portion of LTD is **current**; (2) accrued expenses are **already expensed**; (3) deferred revenue is a **liability** until earned. (Prepaid expenses = the mirror image on the asset side.)

### Example 2 — deferred revenue mechanics 🔴
**$100 received in cash before delivery; 30% tax paid on cash receipts:**

| Line | Change | Why |
|---|---|---|
| Cash | **+100** | received |
| Deferred revenue | **+100** (liability) | no revenue yet |
| Cash | **−30** | tax paid now |
| Deferred tax asset | **+30** | tax paid before the book revenue — "prepaid taxes" |

**Unwind:** as revenue is **earned**, deferred revenue ↓ and revenue is recognized; tax expense is recognized and the **DTA ↓**.

**AP vs deferred revenue for liquidity 🔴:**
| | Accounts payable | Deferred revenue |
|---|---|---|
| Represents | Obligation to **pay cash** to suppliers | Cash **already received**; obligation to **deliver** |
| Settling it requires | **Cash outflow** | **No cash outflow** |

**Growth indicator 🔴:** deferred revenue becomes future revenue → **growth in deferred revenue implies future revenue growth**.

---

## 6. Non-Current Assets: PP&E and Investment Property (§3.08)
**Exam importance: 🔴 VERY HIGH — the IFRS impairment framework is a guaranteed definition-plus-calc item; impairment reversal (IFRS only) and investment property (IFRS only) are reliable one-liners.**

### Non-current mix 🟡
SAP is **dominated by goodwill** (€21,274m — acquisitions); Apple by **long-term marketable securities** ($194,714m). PP&E ≈ 7% (SAP) and 9% (Apple) of total assets; both depreciate **straight-line**.

### PP&E — two models 🔴
**PP&E** = **tangible** assets used in operations over **more than one period**: land, buildings, equipment, **natural resources**.

| | **Cost model** | **Revaluation model** |
|---|---|---|
| Permitted | **IFRS and US GAAP** | **IFRS only** |
| Carrying value | Cost − acc. depreciation − acc. impairment | **Fair value at revaluation** − subsequent depreciation |
| Value changes | Depreciation and impairment only | **Equity directly or profit or loss, depending on circumstances** |

- **IFRS consistency rule:** cost for some **classes**, revaluation for others is fine, but **the same model within a class**.
- **Historical cost** = purchase price + delivery + installation. **Land is not depreciated.**

### Impairment — IFRS framework 🔴 FORMULA
- **Impaired when carrying amount > recoverable amount.**

$$
\begin{gathered}
\text{Recoverable} = \max\big(\text{FVLCS},\ \text{VIU}\big) \\[10pt]
\text{Loss} = \text{Carrying} - \text{Recoverable}
\end{gathered}
$$

- **FVLCS** = fair value less costs to sell (arm's-length sale price, net of sale costs).
- **VIU** = value in use = **present value** of the asset's expected future cash flows.
- Loss goes to the **income statement**. **Reversal: IFRS yes, US GAAP no** (same split as inventory).

**Worked check:** carrying 800; FVLCS 650; VIU 720 → recoverable = max(650, 720) = **720** → loss = 800 − 720 = **80**.

⚠️ **Three traps:** (1) recoverable is the **higher** of the two; (2) VIU is **discounted**; (3) compare with **carrying** amount, not historical cost.

### Investment property — IFRS only 🔴
- Property held to **earn rental income or capital appreciation**, not for production or administration. **US GAAP has no separate category.**
- **Cost model** or **fair value model** — applied to **all** investment property.
- ⚠️ Under the fair value model, changes go to **profit or loss**. Contrast PP&E revaluation (equity or P&L depending on circumstances).

| Asset | Standard | Models | Fair-value changes go to |
|---|---|---|---|
| PP&E | IFRS | Cost **or** revaluation (per class) | Equity or P&L, depending |
| PP&E | US GAAP | **Cost only** | n/a |
| Investment property | IFRS | Cost **or** fair value (all) | **P&L** |
| Investment property | US GAAP | No category | n/a |

---

## 7. Non-Current Assets: Deferred Tax Assets (§3.09)
**Exam importance: 🔴 HIGH — the direction rule and the recognition condition.**

### Definition 🔴
**DTA** = income taxes **paid before** the corresponding **tax expense** is recognized.

$$
\text{Taxes payable} > \text{Tax expense} \;\Rightarrow\; \text{DTA}
$$

(equivalently, **taxable income > book pre-tax income**, because of a **temporary** difference)

### Routes 🔴
| Route | Example | Reverses when |
|---|---|---|
| **Income taxed now, recognized later** | Deferred revenue (§5 Example 2) | The revenue is recognized for books |
| **Expense booked now, deductible later** | Warranty expense | The deduction is allowed for tax |
| **Unused tax losses/credits carried forward** | ⚠️ **Not** a timing difference | Used against future taxable income |

### Recognition condition 🔴
> Recognized **only if future taxable income is expected** against which it can be applied.

### Direction drill 🔴
| Situation | Payable vs expense | Result |
|---|---|---|
| Revenue taxed before booked | Payable **>** expense | **DTA** |
| Expense booked before deductible | Payable **>** expense | **DTA** |
| Tax loss carryforward | — | **DTA** (if future income expected) |
| The reverse | Payable **<** expense | **Deferred tax liability** |

**One-liner:** *paid the tax before the book expense → asset; booked the expense before the tax → liability.*

---

## 8. Components of Equity (§3.10)
**Exam importance: 🔴 VERY HIGH — the six components are a guaranteed list; share counts a guaranteed small calc; preferred classification and treasury rules are reliable one-word swaps.**

### The six components 🔴 MEMORIZE (C-P-T-R-A-N)
**First five = attributable to the parent's owners; sixth = NCI.**

| # | Component | Key rules |
|---|---|---|
| **C** | **Contributed capital** (common stock, issued capital) | Par or no-par; **authorized, issued, outstanding** disclosed per class |
| **P** | **Preferred shares** | Precedence for dividends and liquidation; classified **by substance** |
| **T** | **Treasury shares** | Repurchased and held; **reduce equity by cost**; **no gain/loss on reissue**; **non-voting**; **no dividends** |
| **R** | **Retained earnings** | Cumulative earnings **not paid out as dividends** |
| **A** | **AOCI** (other reserves) | Cumulative OCI (🔗 F2 §7) |
| **N** | **Non-controlling interest** | Minority shareholders' equity in subsidiaries not wholly owned |

### Shares — the three counts 🔴

$$
\begin{gathered}
\text{Outstanding} = \text{Issued} - \text{Treasury}
\end{gathered}
$$

- Always **outstanding ≤ issued ≤ authorized**. **Authorized** = may be sold under the articles; **issued** = sold to investors; **outstanding** = issued − treasury.
- ⚠️ Treasury shares are **issued but not outstanding**. A company that **cancels** repurchases (Apple) has **no treasury stock** → issued = outstanding.
- **Why repurchase:** shares **undervalued**; needed for **employee options**; **limit dilution**.

### Preferred shares — substance test 🔴
| Feature | Classification |
|---|---|
| **Perpetual, non-redeemable** | **Equity** |
| **Mandatory redemption, fixed amount, fixed date** | **Financial liability** |

### Exhibit 10 — SAP equity (€m) 🔴
| Line | Amount | Note |
|---|---|---|
| Issued capital | 1,229 | no-par shares |
| Share premium | 570 | |
| Retained earnings | 24,794 | |
| Other components (AOCI) | 508 | 330 FX + 157 AFS + 21 hedges |
| **Treasury shares** | **(1,591)** | a **deduction** |
| Equity to parent | 25,509 | |
| NCI | 31 | |
| **Total equity** | **25,540** | |

### Exhibit 11 — Apple equity ($m) 🔴
| Line | Amount |
|---|---|
| Common stock + APIC | 35,867 |
| Retained earnings | 98,330 |
| AOCI | (150) |
| **Total** | **134,047** |

- **Three lines only** — Apple **cancels** repurchases; issued = outstanding = 5,126,201k.
- Share roll: 5,336,166k − 246,496k repurchased + 36,531k issued = **5,126,201k**.
- ⚠️ AOCI can be **negative**.

---

## 9. Statement of Changes in Equity (§3.11)
**Exam importance: 🔴 HIGH — the four IFRS items (truncated-rule target) and reading a roll-forward (which column, which direction).**

### What it does 🔴
The **bridge** between two balance sheets — beginning equity → events → ending equity, **for each component separately**.

### Requirements 🔴 MEMORIZE (C-R-O-R)
| Standard | Must show |
|---|---|
| **IFRS** | (1) **Total comprehensive income**; (2) **retrospective accounting changes**; (3) **transactions with and distributions to owners**; (4) **reconciliation of each component** beginning → end |
| **US GAAP (SEC)** | Analysis of changes in **each component** — same substance |

⚠️ Swaps: **comprehensive** income (not just NI); **retrospective** changes; reconciliation **per component** (not total assets, not just total equity).

### Exhibit 12 — Apple FY2017 roll-forward ($m) 🔴
| Event | Paid-in capital | Retained earnings | AOCI | Total |
|---|---|---|---|---|
| **Opening** | 31,251 | 96,364 | 634 | **128,249** |
| Net income | | +48,351 | | +48,351 |
| Other comprehensive loss | | | −784 | −784 |
| Dividends declared | | −12,803 | | −12,803 |
| Repurchases (cancelled) | | −33,001 | | −33,001 |
| Share-based compensation | +4,909 | | | +4,909 |
| Shares issued, net of tax withholding | −913 | −581 | | −1,494 |
| Tax benefit, share awards | +620 | | | +620 |
| **Closing** | **35,867** | **98,330** | **(150)** | **134,047** |

### Which column, which direction 🔴
| Event | Column | Direction |
|---|---|---|
| **Net income** | Retained earnings | ↑ |
| **OCI loss** | AOCI | ↓ (bypasses NI — 🔗 F2 Ex3 Q2) |
| **Dividends** | Retained earnings | ↓ (a distribution, **not an expense**) |
| **Repurchase** | RE if cancelled (Apple); treasury column if held (SAP) | ↓ by the **cost** |
| **Share-based comp** | Paid-in capital | ↑ |
| **Net share issuance** | Paid-in + RE | ⚠️ **↓** — shares **withheld for employees' taxes**, cash paid out |
| **Tax benefit on awards** | Paid-in capital | ↑ |

### The equity identity 🔴 FORMULA

$$
\begin{gathered}
\text{End} = \text{Begin} + \text{NI} \pm \text{OCI} \\[4pt]
- \text{Dividends} - \text{Repurchases} \\[4pt]
+ \text{Issuance / SBC}
\end{gathered}
$$

⚠️ **Your F2 Example 3 miss, restated with Apple's numbers:** given beginning 128,249, ending 134,047, NI 48,351 — you must strip out dividends (−12,803), repurchases (−33,001) and the net share items (+4,035) before the residual is OCI:

$$
\begin{gathered}
134{,}047 - 128{,}249 - 48{,}351 \\[4pt]
+ 12{,}803 + 33{,}001 - 4{,}035 = -784
\end{gathered}
$$

Drop any one term and the answer is wrong by exactly that term — the distractors are built that way.

### Analyst uses 🟡
- Splits the equity change into **operations (NI + OCI)** vs **owner transactions**. Apple: operations +47,567; owners took out ~41,769 net — nearly all earnings returned.
- Reveals **OCI** that the income statement hides; confirms the **share count** for EPS.

---

## 10. Quick-Reference Sheet

```
── INTRO ──
Recognize: benefit PROBABLE + RELIABLY measurable
Book ≠ market (3): mixed measurement | point-in-time |
  value depends on future CFs & unrecorded items
Both standards require current/non-current; IFRS
  EXCEPTION: liquidity-based if reliable & more relevant
53-week year → period statements, NOT balance sheet

── CLASSIFICATION ──
CURRENT ASSET: 1 yr OR operating cycle, WHICHEVER
  IS GREATER (whisky/tobacco/lumber still current)
CURRENT LIABILITY (any one): cycle | traded |
  due ≤ 1 yr | NO unconditional right to defer
IFRS trade payables: current even if > 1 yr
Working capital = CA − CL; excess = idle funds

── RECEIVABLES ──
Cash equivalents ≤ 3 months; restricted ≥12m excluded
% uncollectible = allowance / (NET + allowance)
Estimate → expense ↑; write-off → NO IS effect
Over-estimate collectability → higher NI

── INVENTORY ──
IFRS: lower of cost & NRV; reversal YES; no LIFO
US GAAP: cost & NRV, but LIFO/retail → cost or
  MARKET (replacement cost, NRV ceiling,
  NRV − margin floor); reversal NO
Prepaid expense = ASSET

── CURRENT LIABILITIES ──
Accrued = expensed, not paid; current LTD = current
Deferred revenue = liability; settles with NO cash;
  growth ⇒ future revenue

── PP&E ──
Revaluation: IFRS only, same model per class
Recoverable = HIGHER of FVLCS and VIU (PV)
Loss = carrying − recoverable; reversal IFRS only
Investment property: IFRS only; FV changes → P&L

── DTA ──
Payable > expense → DTA; only if future taxable
  income expected; loss carryforward = not timing

── EQUITY ──
C-P-T-R-A-N; outstanding = issued − treasury
Mandatory-redeemable preferred = LIABILITY
Treasury: no gain/loss, no vote, no dividend
SoCE (IFRS): C-R-O-R; NI→RE, OCI→AOCI,
  dividends→RE ↓, SBC→APIC ↑
```

---

## 11. How This Module Shows Up on the Exam

| Topic | Style | Likelihood |
|---|---|---|
| "Whichever is GREATER"; long-cycle inventory still current | Concept | 🔴 Very high |
| Four current-liability criteria, esp. "no unconditional right to defer" | Concept | 🔴 Very high |
| Working capital = CA − CL; excess undesirable | **Calc**/concept | 🔴 Very high |
| Inventory grid (NRV / market / reversal / LIFO) | Concept | 🔴 Very high |
| Impairment: recoverable = HIGHER; loss; reversal IFRS only | **Calc** | 🔴 Very high |
| Allowance ÷ GROSS receivables | **Calc** | 🔴 Very high |
| Write-off has no IS effect | Concept | 🔴 Very high |
| Six equity components; outstanding = issued − treasury | List/**calc** | 🔴 Very high |
| DTA direction and recognition condition | Concept | 🔴 Very high |
| Statement of changes in equity: four items; column/direction | List/concept | 🔴 High |
| Equity roll-forward with all terms (OCI residual) | **Calc** | 🔴 High ⭐ *F2 miss restated* |
| IFRS liquidity-based exception; banks | Concept | 🔴 High |
| Deferred revenue entries; AP vs deferred revenue | Concept | 🔴 High |
| Preferred by substance; treasury rules | Concept | 🔴 High |
| Cost vs revaluation; investment property → P&L | Concept | 🔴 High |
| Three reasons book ≠ market | List | 🔴 High |
| Cash equivalents; prepaids; accrued | Concept | 🟡 Medium-High |
| Allowance manipulation direction | Concept | 🟡 Medium-High |
| Recognition test; concentration; receivables vs sales | Concept | 🟡 Medium |
| Repurchase reasons; 53-week year; exhibit figures | Concept | 🟢 Low |

**⭐ Carry-over watch:**
- **Wrong quantity (M3, M6, F2):** allowance over *gross*; impairment against *carrying*; working capital uses *current* liabilities only; OCI residual after *all* owner transactions.
- **Truncated rule (M4, F2):** four liability criteria; four inventory differences; six equity components; four IFRS SoCE items.
- **Polarity:** "whichever is *greater*"; recoverable is the *higher*; over-estimating collectability *raises* NI; DTA when payable *exceeds* expense; net share issuance can *reduce* equity.
- **Off-model (F2):** "lower of cost or market" is not IFRS; "market" is not "fair value"; investment-property gains go to P&L.
- **Two-clause options (F2 official Q4):** test each half separately.
- **Stem negation:** many "least likely / not" stems in this module — T/F every option.

**Study priority order:**
1. Inventory grid + impairment framework
2. Classification rules — "whichever is greater," four liability criteria
3. Equity: six components, share counts, preferred, treasury + SoCE four items and roll-forward
4. Receivables — gross-up, estimate vs write-off, manipulation
5. Deferred revenue and DTA
6. Liquidity-based presentation
7. PP&E models and investment property
8. Three reasons book ≠ market; recognition test
9. Cash equivalents, prepaids, accrued expenses
10. Exhibit specifics

> **Note status: COMPLETE** — §3.01 through §3.11. No scored curriculum examples in this reading. Practice questions Q1–Q57 → Study Hub (Financial Statement Analysis → M3, `fsa-m3-q01…`).
