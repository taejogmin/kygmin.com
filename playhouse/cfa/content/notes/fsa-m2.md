# CFA Level I — Financial Statement Analysis
# Module 2: Analyzing Income Statements
## Complete — §2.01 Introduction through §2.08 Comprehensive Income (Deduplicated vs. FSA Module 1 and Economics)

> **Big picture:** The first of the statement deep-dives, and calculation-heavy. In the current curriculum this reading covers: **income statement format** (nature vs. function, single- vs. multi-step, operating profit vs. EBIT); **revenue recognition** under the converged five-step model with the Builder Co. cases (over-time revenue, variable consideration, contract modification) and principal vs. agent; **expense recognition** — matching (bad debts, warranties) and depreciation/amortisation (straight-line, double-declining balance, the IFRS/US GAAP differences); **non-operating items** and the interest/dividend cash-flow classification grid; **common-size analysis**; and **comprehensive income** with the securities-classification grid. EPS methods (treasury-stock, if-converted) and non-recurring items are **not in this reading** — they sit elsewhere in the FSA sequence. Your pattern risks: the four calculations (cost-to-cost, catch-up, DDB, OCI back-solve) are wrong-quantity and formula-assembly territory; the five-step model, the OCI types, the securities grid, and the cash-flow grid are truncated-rule territory.

**Importance legend:**
- 🔴 **High** — appears on nearly every exam
- 🟡 **Medium** — regularly tested, usually conceptual
- 🟢 **Low** — occasionally tested, know the definition

**Deduplication cross-references used below:**
| Marker | Points to |
|---|---|
| 🔗 F1 | FSA Module 1 note (Introduction to Financial Reporting) |
| 🔗 E1–E7 | Economics Module notes 1–7 |
| 🔗 QM | Quant Methods notes |

**Already covered in FSA Module 1 (study it there, not here):**
| Topic | Where it lives |
|---|---|
| Income statement names (statement of operations, P&L); Revenue − Expenses = Net income | F1 §7 |
| One- vs. two-statement presentation of comprehensive income | F1 §5, §7 |
| The income and expense ELEMENTS: income = revenue + gains; expenses include losses; owner-transaction exclusions | F1 §4 |
| The accrual assumption — revenue when performance obligations are satisfied | F1 §4 |
| The subtotal chain (gross → operating/EBIT → EBT → NI) and its aliases, on VW's statement | F1 §7 |
| Consolidation: 100% of lines, >50% presumed control, NCI attribution at the bottom | F1 §7 |
| Basic vs. diluted EPS definitions; VW's €22.63 worked example | F1 §7 |
| Comprehensive income = NI + OCI; OCI's reclassified / not-reclassified split | F1 §7 |
| Accounting vs. economic profit | E2 §9d |

---

## 0. Introduction — Framing Only
**Exam importance: 🟢 Low (no direct questions), but it fixes the module's scope and vocabulary**

- The income statement reports **financial results over a period**: **revenue generated** and the **costs incurred to generate it**. The basic equation — **ignoring gains and losses** — is **Revenue − Expenses = Net income**. (The full element definition from 🔗 F1 §4 includes gains and losses; the intro's "ignoring" clause is deliberate simplification.)
- Names: **statement of operations, statement of earnings, profit and loss (P&L) statement.**
- **Under both IFRS and US GAAP**, the income statement may be (a) a **separate statement** followed by a statement of comprehensive income that **begins with its profit or loss**, or (b) a **section of a single** statement of comprehensive income. 🔗 F1 §5. **This module uses "income statement"** for either the separate statement or that section — specifically the profit-or-loss figure **used for EPS calculations**.
- The module also covers **comprehensive income** = profit or loss from the income statement **+ OCI**.

### Why analysts scrutinize it 🟡 — the two-analyst split (quotable)
| Analyst | Interest in the income statement |
|---|---|
| **Equity analysts** | Equity markets **reward high-earnings-growth companies with above-average valuations** (and penalize low growth); **valuation-model inputs include earnings estimates** |
| **Fixed-income analysts** | Examine the **components**, past and projected, for a company's **ability to make promised debt payments over the business cycle** (🔗 E4 §1, E3 §14: cyclical vs. defensive) |

- Corporate announcements **emphasize income-statement information — particularly earnings — more than the other statements.** A one-liner the exam can quote.

---

## 1. Components and Format of the Income Statement (§2.02)
**Exam importance: 🔴 HIGH — the testable content is a set of classification distinctions: revenue vs. net revenue (and what "net" strips out), expenses grouped by nature vs. by function, single-step vs. multi-step format, operating profit vs. EBIT (not the same), and the gain/loss-on-disposal calculation. The three real statements are the exam's model for "read a statement and find the comparable number."**

### Three companies, two standards, two column orders 🟡
| Company | Standard | Years | Most recent year |
|---|---|---|---|
| **AB InBev** (Belgium, beverages) | IFRS | 3 | **Left** |
| **Molson Coors** (US, brewing) | US GAAP | 3 | **Left** |
| **Danone** (France, food) | IFRS | 2 | **Right** |

🔗 F1 §6: read the column headers first — "different orderings of chronological information are common."

### Revenue — the top line 🔴
- **Revenue** = amount charged for delivery of goods or services in the **ordinary activities** of a business. Also called **sales** or **turnover**. The "**top line**" because it's typically the first line.
- Reported **after adjustments** — cash or volume **discounts**, other reductions. **Net revenue** specifically signals revenue adjusted for items like **estimated returns**. All three companies state revenue **net of returns, customer rebates, trade discounts, and volume-based incentives** (per footnotes).

### The comparability trap — excise taxes 🔴 (quotable example)
| Company | What the face shows | Where excise tax is |
|---|---|---|
| **Molson Coors** | Sales **$13.47bn** → excise taxes **($2.47bn)** → **Net sales $11.00bn** | **On the face**, as a deduction line |
| **AB InBev** | **Revenue $56.44bn** | **Already deducted** — disclosed only in the notes ($15.4bn in 2017) |

→ **AB InBev's "revenue" is comparable to Molson Coors' "net sales,"** not to its "sales." The analyst must go to the **notes and MD&A** to find comparable amounts. ⚠️ An option comparing AB InBev revenue to Molson Coors *gross* sales is the distractor.

### Expenses, net income, and the attribution lines 🔴
- **Expenses** = outflows, depletions of assets, incurrences of liabilities in the course of business (🔗 F1 §4). Grouping and format vary, "subject to some specific requirements."
- **Net income** = the "**bottom line**" (also net earnings, profit or loss) — viewed as "the single most relevant number" for a period.
- **Below net income**, each company shows the attribution split. **Consolidation** includes **all revenues and expenses of subsidiaries even if owned less than 100%**; **non-controlling (minority) interest** = the portion of income that "belongs" to the subsidiaries' minority shareholders. (🔗 F1 §7.)

| 2017 | Net income (incl. NCI) | To parent's shareholders | To NCI |
|---|---|---|---|
| AB InBev | $9,183m | **$7,996m** | $1,187m |
| Molson Coors | $1,436.4m | **$1,414.2m** | $22.2m |
| Danone | €2,563m | **€2,453m** | €110m |

### Gains and losses 🔴 — definition and calculation
- **Gains / losses** = increases / decreases in economic benefits that **typically do not arise in ordinary activities**. Selling products → **revenue** (costs shown separately as expenses). Selling **surplus land** → a **gain or loss**.

$$
\begin{gathered}\text{Gain (loss) on disposal} \\[4pt] = \text{Proceeds} - \text{Carrying value}\end{gathered}
$$

- AB InBev: **loss of $39m** (2017), gains of **$377m** (2016, mainly selling a Mexican brewery) and **$524m** (2015) on business and asset disposals.

⚠️ The calc trap: the gain is **proceeds minus carrying value**, not proceeds minus original cost. Carrying value already reflects depreciation.

> **Example:** land carried at 800 (bought for 600) sold for 950 → gain = 950 − 800 = **150**, not 350.

### What IFRS requires on the face 🟡
- Certain items **must be presented separately**: **revenue, finance costs, tax expense** (among others).
- Plus **any line items, headings, and subtotals relevant to understanding performance**, even if not specified.

### Expenses grouped by NATURE vs. by FUNCTION 🔴
| Grouping | What it means | Example |
|---|---|---|
| **By nature** | Expenses pooled by **what they are** | A single "**depreciation**" line combining depreciation on manufacturing equipment *and* on administrative facilities |
| **By function** | Expenses pooled by **what they're for** | "**Cost of goods sold**" — containing labour, materials, depreciation, some salaries (salespeople's), other direct sales costs |

- All three companies present **by function** — the "**cost of sales**" method.

⚠️ The one-word swap: a stem describing "depreciation shown as one line regardless of where incurred" is **by nature**; "COGS including depreciation" is **by function**.

### Single-step vs. multi-step 🔴
| Format | Defining feature | Examples |
|---|---|---|
| **Multi-step** | Shows a **gross profit subtotal** | **AB InBev, Molson Coors** |
| **Single-step** | **No** gross profit subtotal | **Danone** |

**Gross profit (gross margin)** = revenue − cost of sales. For **manufacturing/merchandising** companies: revenue − **cost of goods sold**. For **service** companies: revenue − **cost of services provided** (CRA International, Exhibit 4).

⚠️ "Single-step" does **not** mean no subtotals at all — Danone shows operating income, income before tax, etc. It means **no gross profit line**.

> ### ⭐ YOU MISSED OFFICIAL Q3 HERE — gross profit
> Revenue 4.0m, COGS 3.0m, other operating expenses 0.5m, interest 0.1m, tax 0.12m → you picked **$500,000**; correct is **$1,000,000**.
> **Gross profit = revenue − COGS = 4.0 − 3.0 = 1.0m** — the *first* subtotal. $500k also took off the operating expenses: that's **operating profit**.
> **Wrong-quantity miss:** the stem lists every expense, so the trap is to keep subtracting. **Fix:** name the subtotal first, then use only the lines above it:
> gross = revenue − COGS → operating = gross − opex → EBT = operating − interest → NI = EBT − tax.

### Operating profit — and why it is NOT always EBIT 🔴
- **Operating profit (= operating income)** = gross profit − operating expenses (selling, general, administrative, R&D).
- Reflects profits from business activities **before taxes** and, **for non-financial companies, before interest expense**.
- ⚠️ **Financial companies:** interest expense **is an operating expense** — it relates to their operating activities — so it's subtracted *in arriving at* operating profit.
- **Segment use:** operating profit is useful for evaluating **individual business segments**, because interest and tax are more relevant at the **overall-company** level.
- Calculations **vary by company** — consult the **notes**.

**Operating profit vs. EBIT — the distinction the exam tests:**
> Operating profit is *sometimes called* EBIT, but **they are not necessarily the same.** Interest and taxes are **not the only differences** between net income and operating income.

| Company | Item between operating income and net income that is NOT interest or tax |
|---|---|
| **AB InBev** | **Share of results of associates and joint ventures** ($430m) |
| **Molson Coors** | **Income from discontinued operations** ($1.5m) |
| Danone | Share of profit of associates (€109m) |

⚠️ An option asserting "operating profit always equals EBIT" is wrong by the curriculum's own words.

### Exhibit 4 — CRA International: the service-company and 53-week case 🟡
- A **consulting** firm → deducts **cost of services** (not cost of goods) to get gross profit. Costs of services are shown **exclusive of depreciation and amortization** (D&A is its own line).
- **Fiscal year ends the Saturday nearest 31 December** → occasionally a **53-week** year. Immaterial for annual growth rates, but **may be material for the quarter** containing the extra week. ⚠️ **Analyst alert:** check for an extra week when making historical comparisons and forecasts.

### What the exhibits teach 🟡
Variation across statements comes from (1) **industry and/or country**, (2) a company's **accounting policies and practices**; within an industry, some differences are **terminology only**, others are **fundamental accounting differences**. **The notes identify which.**

---

## 2. Revenue Recognition (§2.03)
**Exam importance: 🔴 VERY HIGH — the five-step model is a guaranteed list item; the over-time (cost-to-cost) revenue calculation, the contract-modification catch-up, variable consideration, and principal-vs-agent are the guaranteed calculations and classifications. The IFRS-vs-US GAAP "probable" threshold is a reliable one-liner.**

### The converged standard 🔴
- **IFRS 15** and **ASC Topic 606**, both issued **May 2014** — for **convergence, consistency, and transparency**. The two are **nearly identical**. **Principles-based**.
- **Core principle (quotable):** recognize revenue to "**depict the transfer of promised goods or services to customers in an amount that reflects the consideration to which the entity expects to be entitled** in exchange."

### Income, revenue, gains 🟡
🔗 F1 §4. The restaurant example: **selling surplus equipment above carrying value = a gain**, not revenue (peripheral activity). Gains and losses can be **operating** (inventory write-down) or **non-operating** (sale of non-trading investments).

### Revenue is independent of cash 🔴
Accrual accounting (🔗 F1 §4): revenue is recognized **when earned** — often at **delivery**.

| Timing of cash | What's recorded |
|---|---|
| **Cash after delivery** (credit sale) | Revenue at delivery + an **asset: accounts receivable**; later cash just settles the receivable |
| **Cash before delivery** (subscription) | A **liability: unearned revenue** when cash arrives; revenue recognized **as earned** |

### The five steps 🔴 MEMORIZE IN ORDER
| Step | Action | What it governs |
|---|---|---|
| **1** | **Identify the contract(s)** with a customer | Existence |
| **2** | **Identify the separate/distinct performance obligations** | Unit of account |
| **3** | **Determine the transaction price** | **Amount** |
| **4** | **Allocate** the transaction price to the performance obligations | **Amount** |
| **5** | **Recognize revenue when (or as) the entity satisfies** a performance obligation | **Timing** |

**Memory hook:** *Contract → Obligations → Price → Allocate → Recognize.* Steps 3–4 = *how much*; step 5 = *when*.

**Definitions behind the steps:**
- **Contract** = agreement **with commercial substance**, establishing each party's **obligations and rights** incl. payment terms. Exists **only if collectability is probable**.
- ⚠️ **"Probable" differs:** **IFRS = more likely than not** (>50%); **US GAAP = likely to occur** (a higher bar) → economically similar contracts can be treated differently.
- **Performance obligation** = a promise to transfer a **distinct** good or service. **Distinct** requires **both**: (1) customer can **benefit from it on its own or with readily available resources**, and (2) the promise is **separately identifiable** from other promises in the contract.
- **Transaction price** = what the seller **expects to receive**; allocated across obligations.

### The "highly probable not reversed" constraint 🔴
Revenue is recognized **only when it is highly probable it will not be subsequently reversed.**
- If total revenue can't be reliably estimated → recognize a **minimal amount** at sale.
- Balance sheet shows the **entire refund obligation as a liability** plus an **asset for the "right to returned goods"** at **carrying amount of inventory less costs of recovery**.

### Contract assets, receivables, and contract liabilities 🔴
| Situation | Balance-sheet item |
|---|---|
| Revenue recognized but **not all obligations yet met** | **Contract asset** |
| **All obligations met except payment** | **Receivable** |
| **Consideration received before** transferring goods/services | **Contract liability** |

⚠️ A receivable appears **only** when everything except payment is done; before that it's a contract asset.

### Control transfers at a point in time — the five indicators 🟡
1. Entity has a **present right to payment**
2. Customer has **legal title**
3. Customer has **physical possession**
4. Customer has the **significant risks and rewards of ownership**
5. Customer has **accepted** the asset

### Exhibit 5 — applying the standard (the exam's five scenarios) 🔴

**Part 1 — one obligation or many?**
Builder Co. contracts to construct a building: engineering, components, plumbing, wiring, finishes. **Single performance obligation.** Criterion 1 may hold, but criterion 2 fails — the customer contracted for the **building**, and the seller **integrates** everything into a **combined output**. ⚠️ Distractor: treating each trade as a separate obligation.

**Part 2 — revenue over time, cost-to-cost 🔴 CALCULATION**
Consideration $1,000,000; expected total costs $700,000; year-1 costs $420,000.

$$
\begin{gathered}
\text{Progress} = \frac{\text{Costs to date}}{\text{Total expected costs}} \\[6pt]
= \frac{420{,}000}{700{,}000} = 60\% \\[10pt]
\text{Year-1 revenue} = 60\% \times 1{,}000{,}000 \\[4pt]
= \$600{,}000
\end{gathered}
$$

- Same number as the old **"percentage-of-completion" method — but that term is not used** in the converged standard. Progress is measured by an **input method** (costs incurred ÷ total expected costs, as here) or an **output method** (units produced, milestones).

⚠️ Progress is measured on **costs**, then applied to **revenue**. Don't recognize $420,000 (the cost) as revenue.

**Part 3 — variable consideration**
Same contract **plus a $200,000 bonus** if completed within two years; Builder has **limited experience** and faces delays outside its control (weather, regulation). **Year-1 revenue: still $600,000 — none of the bonus.** Rule: variable consideration is included **only if the company can conclude it will not have to reverse cumulative revenue** later.

**Part 4 — contract modification and the cumulative catch-up 🔴 CALCULATION**
Year 2: floor plan changed; consideration **+$150,000**; bonus window extended; expected costs **+$120,000**; Builder now **can** include the $200,000 bonus.
- A change is a **new contract** only if it adds goods/services **distinct** from those already transferred. This doesn't → **modification** → **cumulative catch-up**.

$$
\begin{gathered}
\text{New price} = 1.00 + 0.15 + 0.20 = \$1.35\text{m} \\[6pt]
\text{New total costs} = 700 + 120 = \$820\text{k} \\[6pt]
\text{Progress} = \frac{420}{820} = 51.2\% \\[8pt]
\text{Cumulative revenue} = 51.2\% \times 1.35\text{m} \\[4pt]
= \$691{,}200 \\[8pt]
\text{Catch-up} = 691{,}200 - 600{,}000 \\[4pt]
= \$91{,}200
\end{gathered}
$$

The catch-up is booked **on the modification date**. (Unrounded: 51.22% → $691,463 → $91,463; the curriculum's $91,200 uses 51.2%.)

⚠️ **Three traps:** (1) the denominator updates to the **new** total costs; (2) the bonus enters the price **now** because the reversal conclusion changed; (3) the catch-up is **cumulative-to-date minus previously recognized**, booked in one go — not spread forward.

**Part 5 — principal vs. agent 🔴**
A website takes customer payment in advance, suppliers ship directly, the Company keeps a **10% commission**. **Agent → report only the commission (net).** The four tests — the Company:
1. is **not primarily responsible** for fulfilling the contract
2. takes **no inventory risk**
3. takes **no credit risk**
4. has **no discretion in setting the price**; compensation is a **commission**

**Principal = gross (100% of sales); agent = net (the commission).** ⚠️ Reporting gross as an agent overstates revenue while leaving profit unchanged.

### Contract costs and the profitability effect 🟡
- **Incremental costs of obtaining a contract** and certain **costs to fulfil** a contract must be **capitalized**.
- → A company that previously **expensed** these shows **higher profitability initially**. ⚠️ Direction: capitalizing raises current profit (expense deferred).

### Disclosure requirements 🟢
Contracts **disaggregated** by category (product type, region, customer, pricing terms, duration, timing); **contract asset and liability balances** and significant changes; **remaining performance obligations**; **significant judgments**.

---

## 3. Issues in Expense Recognition: Doubtful Accounts, Warranties (§2.04)
**Exam importance: 🔴 HIGH — "matching principle" is one of the most-quoted concepts in FSA; bad-debt and warranty estimates are its standard illustrations. The direct write-off method is the named distractor.**

### Two definitions of expenses 🟡
| Framework | Definition |
|---|---|
| **IFRS Conceptual Framework** | "Decreases in assets, or increases in liabilities, that result in decreases in equity, other than those relating to distributions to holders of equity claims" — 🔗 F1 §4 |
| **FASB Concepts Statement 6** | "**Outflows or other use of assets, or incurrences of liabilities** from **delivering or producing goods, rendering services, or carrying out other activities** that constitute the entity's **ongoing major or central operations**" |

### The matching principle 🔴
> **Expenses are recognized in the same period as the revenue they help generate** — not when cash is paid, not when the loss is finally confirmed.

### Doubtful accounts 🔴
- Credit sales → some customers will **default**; at the time of sale, **which** customer is unknown.
- **The wrong way — direct write-off method:** wait until a customer defaults, *then* recognize the loss. **"Usually not consistent with GAAP"** — violates matching.
- **The required way:** **at the time revenue is recognized**, record an **estimate of the uncollectible portion**.

| Feature | Detail |
|---|---|
| Basis of the estimate | Primarily **previous experience** |
| Form of the estimate | **% of sales**, **% of receivables**, or **% of receivables overdue** (aging) |
| Where it's recorded | As an **expense on the income statement** — **NOT a direct reduction of revenue** |

⚠️ **Two traps:** (1) direct write-off is the distractor whenever "matching" is in the stem; (2) bad-debt expense is an *expense*, not a revenue reduction.

### Warranties 🔴
- **The wrong way:** expense when actual warranty costs occur — fails matching.
- **The required way:** **estimate** future warranty expense, **recognize it in the period of sale**, then **adjust based on actual experience over the life of the warranty**.

### Side by side 🔴
| | Doubtful accounts | Warranties |
|---|---|---|
| Unknown at sale | *Which* customer defaults | *How much* repair will cost |
| Non-GAAP shortcut | Direct write-off | Expense when repairs occur |
| Matching treatment | Estimate **at sale**, as an expense | Estimate **at sale**, as an expense |
| Basis | Past experience | Past experience; trued up later |

> **One-liner:** *estimated future costs tied to today's revenue are expensed today, from experience, and trued up later.*

---

## 4. Issues in Expense Recognition: Depreciation and Amortisation (§2.05)
**Exam importance: 🔴 VERY HIGH — straight-line and double-declining-balance are guaranteed calculations (the DDB residual-value floor catches people); the three IFRS-vs-US GAAP differences are reliable one-liners; "accelerated = conservative = lower early net income" is a direction item.**

### Long-lived assets and the two that are NOT allocated 🔴
- **Long-lived assets** = provide benefits over **more than one year**: land, plant, equipment, **intangibles**.
- **Two exceptions — never allocated over time:** **land** and **intangibles with indefinite useful lives** (incl. goodwill).

| Term | Applies to |
|---|---|
| **Depreciation** | **Physical** long-lived assets. **Land is not depreciated** |
| **Amortisation** | **Intangibles with a finite life** — mailing list, patent with set expiry, copyright with set legal life. (Also spreading a **bond premium/discount**) |

### IFRS vs. US GAAP — the three differences 🔴
| Issue | IFRS | US GAAP |
|---|---|---|
| **Valuation model for PP&E** | **Cost model OR revaluation model** (fair value) | **Cost model only** |
| **Component depreciation** | **Required** | **Not required** |
| **Annual review of residual value and useful life** | **Required** | **Not explicitly required** |

- **Cost model:** asset at **cost less accumulated depreciation**. Revaluation is permitted under IFRS but **not widely used**.

⚠️ Most-tested: "revaluation permitted under IFRS, not under US GAAP."

### Method choice 🟡
The method should **reflect the pattern in which economic benefits are consumed**. **Neither standard prescribes a method.** Common: **straight-line**, **diminishing balance**, **units of production**.

### Straight-line 🔴 FORMULA

$$
\text{Depreciation} = \frac{\text{Cost} - \text{Residual}}{\text{Useful life}}
$$

- **Two estimates drive it:** **useful life** and **residual (salvage) value**.

**Example 1 — sensitivity:** cost $10,000.
| Useful life | Residual value | Annual expense |
|---|---|---|
| 5 yrs | $0 | **$2,000** |
| 5 yrs | $4,000 | **$1,200** |
| 10 yrs | $0 | **$1,000** |

⚠️ **Direction item:** longer life **or** higher residual → **lower** expense → **higher** net income.

### Diminishing balance (DDB) 🔴 CALCULATION
- **Accelerated** = a **greater share of cost in the early years** (an automobile).

$$
\begin{gathered}
\text{SL rate} = \frac{100\%}{\text{Useful life}} \\[8pt]
\text{DDB rate} = \text{SL rate} \times 2 \\[8pt]
\text{Expense}_t = \text{DDB rate} \times \text{NBV}_{\text{start of } t}
\end{gathered}
$$

**NBV** = cost − accumulated depreciation. ⚠️ Residual value is **not** subtracted first — it only acts as a **floor**: stop when NBV reaches residual.

**Example 2:** cost $11,000, residual $1,000, 5 years → SL rate 20% → **DDB rate 40%**.

| Year | NBV start | Expense | NBV end |
|---|---|---|---|
| 1 | 11,000 | 4,400 | 6,600 |
| 2 | 6,600 | 2,640 | 3,960 |
| 3 | 3,960 | 1,584 | 2,376 |
| 4 | 2,376 | 950 | 1,426 |
| 5 | 1,426 | **426** ⚠️ (not 570) | **1,000** = residual |

⚠️ **Three traps, in order of frequency:**
1. **Applying the rate to (cost − residual).** DDB applies it to **full NBV**.
2. **Overshooting the floor in the final year.** Year 5's mechanical 570 would take NBV to 856 < 1,000 → capped at **426**.
3. **Using the straight-line rate (20%)** instead of the doubled rate (40%).

**Zero residual:** diminishing balance **never fully depreciates** the asset → companies often **switch to straight-line** partway through.

### Accelerated vs. straight-line — the income effect 🔴 DIRECTION
| Period | Accelerated expense vs SL | Net income |
|---|---|---|
| **Early years** | **Higher** | **Lower** |
| **Later years** | **Lower** | **Higher** |
| Total over life | Same | Same |

Accelerated = **conservative** = **lower early net income**; same total.

### Amortisation of intangibles 🔴
- Finite-life intangibles: **same process as depreciation**. Usually **straight-line with no residual value** (both standards).
- **Goodwill and indefinite-life intangibles are NOT amortised** → **tested at least annually for impairment**.

⚠️ Classification drill: patent with set expiry → amortise; indefinite-life trademark → impairment only; goodwill → impairment only; land → neither.

### The three choices that move net income 🔴
(1) **method**, (2) **useful life**, (3) **residual value**.

---

## 5. Non-Operating Items (§2.06)
**Exam importance: 🔴 HIGH — holds the IFRS-vs-US GAAP cash-flow classification grid for interest and dividends, one of the most reliably tested one-liners in FSA (it returns in the cash-flow reading).**

### Operating activities — defined differently 🔴
| Standard | Definition of operating |
|---|---|
| **IFRS** | **No definition.** Operating income should reflect activities **normally regarded as operating** |
| **US GAAP** | **All transactions not defined as investing or financing** (the residual category) |

### Non-operating for a NON-financial company 🔴
- **Interest, dividends, gains on sale** of securities → **non-operating income** (investing income).
- **Interest expense** (incl. amortisation of discount/premium) → non-operating.
- **Financial companies:** interest income and expense are **operating**.

### The cash-flow classification grid 🔴
Income-statement placement is **not necessarily consistent** with the **cash flow statement**:

| Cash flow item | **IFRS** | **US GAAP** |
|---|---|---|
| **Interest received** | Operating **or** Investing | **Operating** |
| **Dividends received** | Operating **or** Investing | **Operating** |
| **Interest paid** | Operating **or** Financing | **Operating** |
| **Dividends paid** | Operating **or** Financing | **Financing** |

**Memory hooks:** **US GAAP = everything operating except dividends paid.** **IFRS = received → operating or investing; paid → operating or financing.**

⚠️ **Three swaps:** (1) giving IFRS a fixed answer; (2) US GAAP interest *paid* in financing (it's operating); (3) US GAAP dividends *paid* in operating (it's financing).

### Net presentation 🟡
| Company (2017) | Finance cost | Finance income | Net |
|---|---|---|---|
| **AB InBev** | $6,885m | $378m | **$6,507m** |
| **Danone** | €414m | €151m | **€263m** |

### Analyst's reading 🔴
- **Financing expense** depends on **capital structure** and **borrowing costs**.
- **Investing income** depends on the **purpose and success** of investments. For a **non-financial** company, **significant financial income warrants further exploration** (excess cash parked? strategic stakes?).

---

## 6. Common-Size Analysis of the Income Statement (§2.07)
**Exam importance: 🔴 HIGH — the calculation and its interpretation are guaranteed; the tax-line exception is a reliable one-word swap.**

### The method 🔴 FORMULA

$$
\text{Common-size \%} = \frac{\text{Line item}}{\text{Revenue}} \times 100\%
$$

- **Removes the effect of size** → **time-series** and **cross-sectional** comparison.

### Exhibit 7 — the model question 🔴
A and B each have **$10m sales**; C has **$2m**.

| % of sales | A | B | C |
|---|---|---|---|
| Cost of sales | 30 | **75** | 30 |
| **Gross profit** | **70** | **25** | **70** |
| SG&A | 10 | 10 | 10 |
| R&D | 20 | 0 | 20 |
| Advertising | 20 | 0 | 20 |
| **Operating profit** | **20** | **15** | **20** |

1. **C's percentages = A's** — C is a scaled-down A.
2. **C is more profitable than B** (20% vs 15%) despite smaller dollar profit ($0.4m vs $1.5m): **$5 more operating profit per $100 of sales.** ⚠️ Trap: picking B for the larger dollar profit.
3. **Strategy shows in the structure:** A spends heavily on R&D and advertising → **premium, better-branded products**; B competes on **price**.

> ### ⭐ YOU MISSED OFFICIAL Q4 HERE — "fails to help identify strategies"
> You picked **"standardizes each line but fails to help identify differences in strategy"**; correct is **"allows cross-sectional analysis by removing the effect of size."**
> The first half of your option was true; the **second half contradicts reading 3 above** — standardization is exactly what *reveals* strategy (A's 70% gross margin + 40% R&D/advertising vs B's 25%). **Fix for two-clause options:** test each clause separately; one false clause kills the option. (Option A was also wrong: the base is **revenue**, not net income.)

### The tax exception 🔴

$$
\text{Effective tax rate} = \frac{\text{Income tax expense}}{\text{Pretax income}}
$$

Taxes are compared with **pretax income**, not revenue. Forecast: project pretax income × estimated effective rate.

### Sector margins (Exhibit 8) 🟢 reference only
Margins differ **structurally by sector** (IT 62% and health care 59% gross; financials 36.5% operating) → compare a company **within its sector**.

---

## 7. Comprehensive Income (§2.08)
**Exam importance: 🔴 VERY HIGH — the OCI back-solve is a guaranteed calculation; the four OCI types are a guaranteed list; the securities grid is the module's densest truncated-rule item.**

### Definitions 🔴
| Standard | Term | Definition |
|---|---|---|
| **IFRS** | **OCI** | Income and expense **"not recognized in profit or loss as required or permitted by other IFRS"** |
| **IFRS** | **Total comprehensive income** | Change in equity **other than transactions with owners in their capacity as owners** |
| **US GAAP** | **Comprehensive income** | Change in equity **from non-owner sources** |

Comprehensive income = **net income + OCI**.

### The back-solve 🔴 CALCULATION

$$
\begin{gathered}
\text{Expected end} = \text{Begin} + \text{NI} \\[4pt] - \text{Div} \pm \text{Shares} \\[10pt]
\text{OCI} = \text{Actual end} - \text{Expected end}
\end{gathered}
$$

**Example:** beginning €110m, NI €10m, dividends €2m, ending €123m → without OCI: 110 + 10 − 2 = 118 → **OCI = 123 − 118 = €5m**.

⚠️ Traps: (1) forgetting dividends; (2) treating a share issue as OCI (owner transaction).

> ### ⭐ YOU MISSED EXAMPLE 3, Q1 HERE
> *Beginning equity €200m, NI €20m, dividends €3m, ending €227m — OCI?* — you picked **€7m**; correct is **€10m**.
> Expected ending without OCI = 200 + 20 − 3 = 217 → OCI = 227 − 217 = **€10m**.
> **What produced €7m:** 227 − 220 — the dividend was dropped. **Fix:** write `End − (Begin + NI − Div ± Shares)` with all four slots filled *before* subtracting.

> ### ⭐ YOU MISSED EXAMPLE 3, Q2 HERE
> *"Which best describes OCI?"* — you picked **income from activities outside ordinary business**; correct is **income that increases equity but is NOT reflected in net income**.
> "Outside ordinary activities" describes **gains and losses** — which **are in net income**. OCI is defined by **where it is reported**. **Anchor:** OCI = **equity ↑, net income unchanged.**

### The four OCI item types 🔴 MEMORIZE (F-H-S-P)
| # | Item |
|---|---|
| **F** | **Foreign currency translation adjustments** (foreign subsidiaries) |
| **H** | **Unrealized gains/losses on derivatives accounted for as hedges** (certain) |
| **S** | **Unrealized holding gains/losses on certain securities** — US GAAP **available-for-sale debt**; IFRS **FVOCI** (IFRS — not US GAAP — also allows **equity at FVOCI**) |
| **P** | **Certain defined-benefit pension costs** not recognized in the current period |

**IFRS-only:** **revaluation-model** changes go to OCI; some OCI items **cannot be reclassified** to profit or loss; present will/won't-reclassify separately.

> ### ⭐ YOU MISSED OFFICIAL Q6 HERE — which item is OCI
> You picked **"a realized gain on a derivative not accounted for as a hedge"**; correct is **"a foreign currency translation adjustment"** (the F in F-H-S-P).
> The H item needs **both** qualifiers: **unrealized** AND **accounted for as a hedge**. Your option failed both — *realized* gains are never OCI, and a derivative *not* designated as a hedge goes through net income. (The other distractor, an unrealized gain on a **trading** security, also goes to net income.)
> **Truncated-rule miss:** "derivative" matched the H in F-H-S-P and the qualifiers were dropped. **Fix:** read every adjective in an OCI option — *unrealized? hedge? available-for-sale/FVOCI?* If any is missing or reversed → net income.

### The securities-classification grid 🔴
**Held-to-maturity debt** → **amortised cost** → **no unrealized gain reported anywhere.**

| | **Income statement** | **OCI** |
|---|---|---|
| **US GAAP** | **Trading** debt; **all equity investments** (without significant influence) | **Available-for-sale** debt |
| **IFRS** | **FVPL**: equity (unless elected) + debt that fits no other category | **FVOCI**: debt held to **collect AND sell**; **equity by irrevocable election** |

**The swaps the exam runs:**
1. Held-to-maturity → **not in OCI**, not anywhere.
2. **US GAAP equity → always income statement**; IFRS has an OCI election.
3. Trading ↔ FVPL; available-for-sale ↔ FVOCI.
4. Excluded from NI ≠ excluded from comprehensive income.

### Example 4 — comprehensive EPS 🔴

$$
\begin{gathered}
\text{Comprehensive EPS} = \text{EPS} + \frac{\text{OCI}}{\text{Shares}} \\[10pt]
\text{Ratio} = \frac{\text{Price}}{\text{Comprehensive EPS}}
\end{gathered}
$$

| | Company A | Company B |
|---|---|---|
| Price | $35 | $30 |
| EPS | $1.60 | $0.90 |
| **P/E** | **21.9×** | **33.3×** |
| OCI (loss) | ($16.272m) | ($1.757m) |
| Shares | 22.6m | 25.1m |
| OCI per share | (0.72) | (0.07) |
| Comprehensive EPS | 0.88 | 0.83 |
| **Price / comp. EPS** | **39.8×** | **36.1×** |

**The conclusion flips** — A looked cheap only because its large OCI losses are excluded from the P/E. ⚠️ An OCI *loss* **lowers** comprehensive EPS → **raises** the ratio.

---

## 8. Quick-Reference Sheet

```
── FORMAT ──
Revenue reported NET of discounts/returns. AB InBev "revenue"
  ≈ Molson Coors "NET sales" (excise taxes) — check the notes
Gain on disposal = proceeds − CARRYING value
BY NATURE (one depreciation line) vs BY FUNCTION (COGS)
MULTI-STEP = gross profit line; SINGLE-STEP = none
OPERATING PROFIT: before interest for non-financials;
  financial cos: interest IS operating. ≠ EBIT necessarily
IFRS face: revenue, finance costs, tax expense
53-week year: material for the quarter, not the year

── REVENUE RECOGNITION ──
Contract → Obligations → Price → Allocate → Recognize
  (3–4 = amount; 5 = timing)
Probable: IFRS more likely than not | US GAAP likely
DISTINCT = benefit alone AND separately identifiable
Contract ASSET | RECEIVABLE (only payment left) |
  Contract LIABILITY (cash first)
Over time: costs to date / total costs × PRICE
Variable consideration: only if won't reverse
Modification → cumulative catch-up at once
Agent = net commission; principal = gross
Capitalized contract costs → higher initial profit

── MATCHING ──
Bad debts & warranties: estimate AT SALE as EXPENSE;
  direct write-off = not GAAP

── DEPRECIATION ──
Land, goodwill, indefinite intangibles: NOT allocated
IFRS only: revaluation; IFRS requires component
  depreciation + annual review
SL = (Cost − Residual) / Life
DDB = (2 / Life) × NBV; residual = floor only
Accelerated: lower early NI, same total (conservative)

── NON-OPERATING ──
US GAAP: all OPERATING except dividends PAID (financing)
IFRS: received → op/inv; paid → op/fin

── COMMON-SIZE ──
Line ÷ revenue; TAX ÷ PRETAX income

── COMPREHENSIVE INCOME ──
OCI = End − (Begin + NI − Div ± Shares)
F-H-S-P. HTM → nothing; US GAAP equity → NI;
  AFS / FVOCI → OCI
Comp. EPS = EPS + OCI/shares
```

---

## 9. How This Module Shows Up on the Exam

| Topic | Style | Likelihood |
|---|---|---|
| Five-step revenue model — order and what each step governs | Concept | 🔴 Very high |
| Over-time revenue via cost-to-cost | **Calc** | 🔴 Very high |
| Contract modification → cumulative catch-up | **Calc** | 🔴 Very high |
| Straight-line depreciation; sensitivity to life and residual | **Calc** | 🔴 Very high |
| DDB — rate on NBV, residual floor | **Calc** | 🔴 Very high |
| Cash-flow classification grid (IFRS vs US GAAP) | Concept | 🔴 Very high |
| OCI back-solve (all four bracket terms) | **Calc** | 🔴 Very high ⭐ *your miss* |
| OCI definition: equity ↑, NI unchanged | Concept | 🔴 Very high ⭐ *your miss* |
| Four OCI types (F-H-S-P) | Concept | 🔴 Very high |
| Securities grid: HTM / trading / AFS / FVPL / FVOCI | Concept | 🔴 Very high |
| Comprehensive EPS; P/E vs price/comprehensive EPS | **Calc** | 🔴 High |
| Common-size: compute and interpret | **Calc**/concept | 🔴 High |
| Principal vs agent | Concept | 🔴 High |
| Variable consideration | Concept | 🔴 High |
| Matching: bad debts & warranties; direct write-off | Concept | 🔴 High |
| Accelerated = conservative | Concept | 🔴 High |
| Revaluation (IFRS only); component; annual review | Concept | 🔴 High |
| Goodwill / land exceptions | Concept | 🔴 High |
| Probable threshold IFRS vs US GAAP | Concept | 🔴 High |
| Operating profit ≠ EBIT; financial-co interest | Concept | 🔴 High |
| By nature vs function; single- vs multi-step | Concept | 🔴 High |
| Contract asset vs receivable vs contract liability | Concept | 🟡 Medium-High |
| Gain on disposal = proceeds − carrying value | **Calc** | 🟡 Medium-High |
| Tax ÷ pretax income | Concept | 🟡 Medium |
| Revenue comparability (excise taxes) | Concept | 🟡 Medium |
| Capitalized contract costs → higher initial profit | Concept | 🟡 Medium |
| 53-week year; sector margins | Concept | 🟢 Low |

**⭐ Flagged weak spots (this module):**
- **Example 3 Q1 — OCI back-solve:** dropped the dividend → €7m instead of €10m. *(truncated rule — third module in a row where a multi-term identity lost a term: M6, M7, now F2)*
- **Example 3 Q2 — OCI definition:** picked "non-ordinary activities" (that's gains/losses, which are IN net income). *(off-model: adjacent axis)*

**⭐ Carry-over watch:**
- **Formula assembly / wrong quantity:** cost-to-cost % applies to *revenue*; DDB rate hits *NBV*; catch-up = cumulative − already recognized.
- **Truncated rule:** five steps; four OCI types; the securities grid; three IFRS/US GAAP depreciation differences; four agent tests.
- **Polarity:** longer life/higher residual → *higher* NI; accelerated → *lower* early NI; capitalizing → *higher* profit; US GAAP dividends *paid* → financing.
- **Stem negation:** "least likely to be amortised," "NOT consistent with GAAP" — T/F every option.

**Study priority order:**
1. Securities grid + four OCI types + OCI back-solve
2. DDB schedule; SL sensitivity
3. Cost-to-cost revenue + cumulative catch-up
4. Cash-flow classification grid
5. Five-step model + probable threshold + distinct test + principal/agent
6. Matching — bad debts, warranties
7. IFRS/US GAAP depreciation differences; accelerated = conservative
8. Common-size, tax exception
9. Format distinctions
10. Non-operating definitions, comparability, 53-week year

---

## 10. Curriculum examples — log (paraphrased in the Study Hub as `fsa-m2-p01…`)

| # | Topic | Your answer | Correct | Pattern |
|---|---|---|---|---|
| Ex 3 Q1 | OCI back-solve | €7m | **€10m** | truncated-rule (dividend dropped) |
| Ex 3 Q2 | OCI definition | non-ordinary activities | **raises equity, not in NI** | off-model (adjacent axis) |

**Official practice set 1 (`fsa-m2-p03…p08`): 3 / 6**

| # | Topic | Your answer | Correct | Pattern |
|---|---|---|---|---|
| Q1 | Expenses by nature or function (IAS 1) | either | ✅ | — |
| Q2 | Function example = COGS | COGS | ✅ | — |
| Q3 | Gross profit | $500k (= operating profit) | **$1,000,000** | asked-quantity (kept subtracting) |
| Q4 | Common-size statement | "fails to reveal strategy" | **removes size → cross-sectional** | definition (two-clause option, 2nd clause false) |
| Q5 | OCI from components (5 − 3 + 2) | $4m OCI | ✅ | — |
| Q6 | Which item is OCI | realized non-hedge derivative gain | **FX translation** | truncated-rule (dropped "unrealized" + "hedge") |

None of the three misses was arithmetic: one stopped at the wrong subtotal, one accepted a half-true option, one matched a keyword ("derivative") without its qualifiers.

**Curriculum examples: 0 / 2. Official set 1: 3 / 6.** Practice questions Q1–Q46 → Study Hub (Financial Statement Analysis → M2, `fsa-m2-q01…`).

> **Note status: COMPLETE** — §2.01 through §2.08.
