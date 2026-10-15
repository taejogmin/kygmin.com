# CFA Level I — Financial Statement Analysis
# Module 5: Inventories
## Complete — §5.01 Introduction through §5.13 Impacts of Write-downs (Deduplicated vs. FSA Modules 1–4 and Economics)

> **Big picture:** The first single-account deep-dive, and the most calculation-heavy reading in FSA so far. Inventory is often a large balance-sheet asset and cost of sales the largest expense, so the *method* that splits costs between them moves both statements, the tax bill, operating cash flow and every ratio built on them. Actual scope (per the official curriculum) runs §5.01 → §5.13: **costs capitalised vs. expensed**; the **four cost formulas** (specific ID, FIFO, weighted average, LIFO — US GAAP only) and their effects under **rising and falling** prices; **periodic vs. perpetual** systems; **LIFO vs. FIFO** effects including the higher operating cash flow; the **LIFO reserve** and LIFO→FIFO conversion (inventory, COGS, net income, equity, deferred tax); **LIFO liquidations**; **method changes** (retrospective, except to-LIFO prospective); **write-downs and reversals** (IFRS NRV vs. US GAAP market with ceiling/floor; agricultural exception); **disclosures and inventory ratios**; and three company illustrations (Caterpillar, Volvo, Jollof). Pattern risks: every direction rule carries two conditions (price direction, unit levels) — **truncated-rule** territory; the reserve conversions are **formula-assembly** territory (level vs. change); the LIFO cash-flow line and the write-down turnover effect are **polarity** traps.

**Importance legend:**
- 🔴 **High** — appears on nearly every exam
- 🟡 **Medium** — regularly tested, usually conceptual
- 🟢 **Low** — occasionally tested, know the definition

**Deduplication cross-references used below:**
| Marker | Points to |
|---|---|
| 🔗 F1 | FSA Module 1 (Introduction to Financial Reporting) |
| 🔗 F2 | FSA Module 2 (Analyzing Income Statements) |
| 🔗 F3 | FSA Module 3 (Analyzing Balance Sheets) |
| 🔗 F4 | FSA Module 4 (Cash Flow Statements) |
| 🔗 E1–E7 | Economics Module notes 1–7 |

**Already covered elsewhere (study it there, not here):**
| Topic | Where it lives |
|---|---|
| Inventory measurement grid: IFRS lower of cost and NRV; US GAAP lower of cost or market for LIFO/retail (ceiling/floor); write-down reversal IFRS only; LIFO prohibited under IFRS; "cost formulas" vs "cost flow assumptions" | F3 §4 |
| Cost of inventories = purchase + conversion + other costs to bring to present location and condition; NRV definition | F3 §4 |
| Inventory is a current asset even if held > 1 year (tobacco/distillery/lumber — operating cycle governs) | F3 §1 |
| COGS and gross profit on the income statement; expenses by function | F2 §1 |
| Inventory ↑ → subtract in the NI → CFO reconciliation | F4 §5–6 |
| Apple's inventory line; SAP has none (business model) | F3 §4 |

---

## 0. Introduction (§5.01)
**Exam importance: 🟡 Medium as a section; 🔴 for two items — the three manufacturing inventory categories, and the permitted-method list (IFRS three, US GAAP four). Both are one-word-swap items.**

### Who holds what kind of inventory 🔴
| Company type | Buys | Inventory categories |
|---|---|---|
| **Merchandiser** (wholesaler, retailer) | Finished inventory, ready for sale, from manufacturers | **One** — finished goods only |
| **Manufacturer** | Raw materials from suppliers, then adds value by transforming them | **Three** — **raw materials**, **work in progress**, **finished goods** |

- **Work in progress (WIP)** = has **started** the conversion process from raw materials but is **not yet** finished goods ready for sale.
- **Disclosure:** a manufacturer may report the three carrying amounts **separately on the balance sheet** or report **only the total**. If only the total, the three amounts **must be disclosed in a footnote**.
- ⚠️ Swap: "a retailer reports raw materials, WIP and finished goods" — no, merchandisers have finished goods only.

### Why inventory matters to the analyst 🟡
- Inventory can be a **significant asset**, and **cost of sales (COGS)** a **significant expense**.
- **Comparing companies is hard** because the standards allow a **choice of valuation method**, and different methods can assign **significantly different amounts** to inventory and to COGS.
- The analyst therefore needs to understand each method's effect on the **financial statements and ratios**, to judge performance **over time** and **against peers**. The **statements and notes** supply the information needed to assess that effect.

### The core mechanism 🔴 — one pool, two destinations
$$
\begin{gathered}
\text{Goods available} \\[2pt] = \text{Beginning inv.} + \text{Purchases} \\[2pt] = \text{Ending inv.} + \text{COGS}
\end{gathered}
$$

| Destination | Statement |
|---|---|
| **Ending inventory** | Balance sheet |
| **Cost of goods sold** | Income statement |

The cost method decides how the pool is **split** between the two.
The method doesn't change the total. It only decides **how much goes to each side**. More to COGS means less left in inventory, and the reverse.

### Permitted methods — IFRS vs. US GAAP 🔴 (🔗 F3 §4)
| Method | IFRS ("cost formulas") | US GAAP ("cost flow assumptions") |
|---|---|---|
| **Specific identification** | ✓ | ✓ |
| **First-in, first-out (FIFO)** | ✓ | ✓ |
| **Weighted average cost** | ✓ | ✓ |
| **Last-in, first-out (LIFO)** | ✗ **prohibited** | ✓ |
| **Count** | **3** | **4** |

**Memory hook:** *same three everywhere, plus LIFO in the US only.*

⚠️ Swaps: "IFRS permits four methods" ✗; "US GAAP prohibits weighted average" ✗; "IFRS calls them cost flow assumptions" ✗ (that's the US GAAP term).

---

## 1. Cost of Inventories (§5.02)
**Exam importance: 🔴 HIGH — "which costs are capitalised into inventory vs. expensed" is a reliable classification item, and the Acme-style calculation (add the included costs, strike the excluded ones) is a near-guaranteed small calc. The *direction* point — wrongly capitalising costs **overstates both profit and inventory** — is a quotable polarity item.**

### What goes INTO inventory (capitalised) 🔴
IFRS definition (US GAAP is similar): **all costs of purchase, costs of conversion, and other costs incurred in bringing the inventories to their present location and condition.** (🔗 F3 §4 gave the one-line version.)

| Bucket | Includes | ⚠️ Note |
|---|---|---|
| **Costs of purchase** | Purchase price; **import and tax-related duties**; **transport** (freight-in); **insurance during transport**; **handling**; other costs directly attributable to acquiring finished goods, materials, services | **Trade discounts, rebates and similar items REDUCE** the cost of purchase |
| **Costs of conversion** | Costs directly related to units produced: **direct labour**; **fixed and variable production overhead** | Fixed overhead is included too, not just variable |
| **Other costs** | Anything else needed to bring inventory to its **present location and condition** | — |

**Why it matters:** capitalised costs sit on the balance sheet as an **asset** and reach the income statement **as cost of sales only when the inventory is sold**.

### What stays OUT of inventory (expensed when incurred) 🔴 — both IFRS and US GAAP
| Excluded cost | ⚠️ Boundary |
|---|---|
| **Abnormal** costs from **waste** of materials, labour or other conversion inputs | Only *abnormal* waste; normal spoilage is part of production cost |
| **Storage** costs | **Unless required as part of the production process** (e.g., ageing wine or whisky) |
| **Administrative overhead** | All of it |
| **Selling costs** | All of them |

**Memory hook — the four OUTs: Abnormal waste, Storage, Admin, Selling ("WSAS").** Everything needed to *get the goods made and to their location* goes in; everything *after* (storing finished goods, selling) or *wasteful* goes out.

### The direction rule 🔴 (polarity — write it down)
```
Wrongly CAPITALISING a cost that should be expensed
   → expense deferred to a later period
   → current-period PROFIT OVERSTATED
   → INVENTORY (balance sheet) OVERSTATED
```
⚠️ Both are overstated together. An option saying "profit overstated, inventory understated" is the polarity distractor. (Same logic as F2's capitalised contract costs → higher initial profitability.)

### Example 1 — Acme Enterprises (IFRS, tables) (verified) 🔴 THE MODEL CALC
2018: 900,000 finished tables made; 1,000 scrapped (**abnormal waste**). Costs for finished tables: raw materials €9m; direct labour €18m; production overhead €1.8m. Scrapped tables cost €30,000 (€10,000 materials + €20,000 conversion — **not** in the €9m / €19.8m). Freight on raw materials €1m. Storage of finished goods €500,000. No WIP at year-end.

**Q1 — costs included in inventory:**
```
Raw materials                       9,000,000
Direct labour  (conversion)        18,000,000
Production overhead (conversion)    1,800,000
Transportation for raw materials    1,000,000   ← freight-in = cost of purchase
Total inventory costs             €29,800,000   ✓
```
**Q2 — costs expensed in 2018:**
```
Abnormal waste (scrapped tables)       30,000
Storage of FINISHED goods             500,000   ← not part of production → expense
Total expensed                       €530,000   ✓
```
- Implied cost per finished table: 29,800,000 / 900,000 = **€33.11**. If the €530,000 were wrongly capitalised it would be €33.70, and both inventory and 2018 profit would be overstated by €530,000 (less whatever was sold).
- ⚠️ **The two traps in this example:** (1) **freight on raw materials is IN** (getting materials to their location), but **storage of finished goods is OUT**. Both are "logistics" costs, and the stem places them next to each other to tempt a wrong pairing. (2) The scrapped tables' costs are given **separately** and are **not inside** the €9m and €18m figures, so don't subtract them again.

### Classification drill 🟡
| Cost | In / Out |
|---|---|
| Import duty on raw materials | **In** |
| Insurance while goods are shipped to the factory | **In** |
| Trade discount received from supplier | **Reduces** cost |
| Factory supervisor's salary (production overhead) | **In** |
| Depreciation on factory equipment (fixed overhead) | **In** |
| Abnormal spoilage from a machine failure | **Out** |
| Warehouse rent for finished goods awaiting sale | **Out** |
| Ageing barrels of whisky (storage required by production) | **In** |
| Head-office accounting salaries | **Out** |
| Sales commissions; advertising | **Out** |
| Freight to deliver goods to customers (freight-out) | **Out** (a selling cost) |

---

## 2. Inventory Valuation Methods (§5.03)
**Exam importance: 🔴 VERY HIGH — the core of the reading. Guaranteed items: (1) the definition of each method and which costs go to COGS vs. ending inventory; (2) the **direction table** under rising and falling prices; (3) the consistency rule (same method for items of similar nature and use); (4) "method choice is largely irrelevant if prices are constant." The FIFO/LIFO/weighted-average calculation is the most-tested calc in this reading.**

### Why the method matters 🔴
- Purchase and conversion costs **change over time**, so the split of **cost of goods available for sale** between **COGS** (income statement) and **ending inventory** (balance sheet) depends on the method.
- A method that puts **more cost into COGS** and **less into inventory** makes current-year **gross profit, net income and inventory carrying amount all lower** than the alternatives would.
- ⚠️ **If prices are constant (or nearly so), the choice is largely irrelevant.** All four methods give very similar COGS and ending inventory. The method only matters when **prices change**, and then it also moves **gross profit, net income, current assets and total assets**.

### Rules that apply to every method 🔴
- **Permitted:** specific identification, FIFO, weighted average cost (IFRS and US GAAP); **LIFO — US GAAP only** (🔗 §0).
- **Consistency rule:** the **same method for all items of similar nature and use**. Items with a **different nature or use** may use a different method. ⚠️ Swap: "a company must use one method for all its inventory" ✗.
- When items are sold, their carrying amount is recognised as **cost of sales** according to the method in use.

### Physical flow vs. cost flow 🔴
| | Specific identification | FIFO, weighted average, LIFO |
|---|---|---|
| Used for | Items **not ordinarily interchangeable**; goods produced and **segregated for specific projects**; **expensive, uniquely identifiable** goods (e.g., **precious gemstones**) | **Large numbers of interchangeable items** |
| Basis | **Actual** historical cost of the specific items | **Cost flow ASSUMPTIONS** about which goods were sold and which remain |
| Matches physical flow? | **Yes** — costs follow the actual items | **Not necessarily** — the cost allocation can **differ from the physical movement** of goods |

⚠️ LIFO doesn't require that the newest goods are *physically* sold first. It's an assumption about **costs**, not about the warehouse.

### The four methods 🔴
| Method | Assumption | COGS reflects | Ending inventory reflects |
|---|---|---|---|
| **Specific identification** | Track each item | Actual cost of the items **identified as sold** | Actual cost of the items **identified as remaining** |
| **FIFO** | **Oldest** goods sold first | **Beginning inventory + earliest** purchases/production | **Most recent** costs |
| **Weighted average cost** | Every unit carries the **average** cost | Units sold × average cost | Units remaining × average cost |
| **LIFO** (US GAAP only) | **Newest** goods sold first | **Most recent** costs | **Oldest** costs, **including beginning inventory** |

**Weighted average cost per unit — FORMULA 🔴**
$$
\begin{gathered}\text{Avg cost per unit} \\[4pt] = \frac{\text{Cost of goods available}}{\text{Units available}}\end{gathered}
$$

(goods available = beginning inventory + purchases, in both cost and units)
⚠️ It's weighted by **units**, not a simple average of the purchase prices. Including the beginning inventory in both numerator and denominator is the step most often dropped.

### The direction table 🔴 MEMORIZE (polarity — your pattern 1)
| | **Rising prices** | **Falling prices** |
|---|---|---|
| **FIFO** — ending inventory | **Higher** (newest, higher costs) | **Lower** |
| **FIFO** — COGS | **Lower** (oldest, cheaper costs) | **Higher** |
| **LIFO** — ending inventory | **Lower** (oldest, cheaper costs) | **Higher** |
| **LIFO** — COGS | **Higher** (newest, dearer costs) | **Lower** |
| **Weighted average** | **Between** FIFO and LIFO | **Between** |

**Curriculum wording (quotable):** under **FIFO** in rising prices, costs assigned to units in **ending inventory are higher** than costs assigned to units sold; under **LIFO** in rising prices, costs assigned to **ending inventory are lower** than those assigned to units sold. Falling prices reverse both.

**One-line hook:** *FIFO puts the NEW prices on the balance sheet; LIFO puts the NEW prices on the income statement.* Rising prices + LIFO → highest COGS → **lowest** gross profit, net income and inventory.

### Worked illustration (my numbers, not curriculum) 🔴 — the calc the exam will ask
Rising prices. Sold **350 units** at $20 = sales $7,000.
```
Beginning inventory   100 units @ $10  =  1,000
Purchase 1            200 units @ $12  =  2,400
Purchase 2            200 units @ $15  =  3,000
Goods available       500 units        = $6,400
Units sold 350  → units in ending inventory 150
```
**FIFO** — sell the oldest first:
```
COGS = 100×10 + 200×12 + 50×15 = 1,000 + 2,400 + 750 = 4,150
EI   = 150×15                                         = 2,250   (newest costs)
```
**LIFO** — sell the newest first:
```
COGS = 200×15 + 150×12        = 3,000 + 1,800       = 4,800
EI   = 50×12 + 100×10         =   600 + 1,000       = 1,600   (oldest costs, incl. beginning inv.)
```
**Weighted average:**
```
Avg cost = 6,400 / 500 = $12.80
COGS = 350 × 12.80 = 4,480
EI   = 150 × 12.80 = 1,920
```
**Results (all verified):**
| | COGS | Ending inventory | Gross profit | Gross margin |
|---|---|---|---|---|
| FIFO | 4,150 | **2,250** (highest) | **2,850** (highest) | 40.7% |
| Weighted average | 4,480 | 1,920 | 2,520 | 36.0% |
| LIFO | **4,800** (highest) | 1,600 (lowest) | 2,200 (lowest) | 31.4% |

**Check every time:** COGS + EI = goods available ($6,400) under **every** method. If your two numbers don't add back to the pool, a layer was dropped. The weighted-average figures always sit **between** FIFO and LIFO.

⚠️ **Three calc traps:**
1. **LIFO ending inventory includes beginning inventory** (the oldest layer). Forgetting it is the classic error.
2. **Weighted average uses total units available** (500), not units sold (350) and not the number of purchases (3).
3. **The question may ask for COGS or for ending inventory.** Read the last line (your wrong-quantity pattern) and use the COGS + EI = goods available check.

*(This is a periodic calculation: the cost split is done once, at period end. The curriculum's own numbered example comes in the next section.)*

---

## 3. Calculations of Cost of Sales, Gross Profit and Ending Inventory (§5.04)
**Exam importance: 🔴 VERY HIGH — Example 2 is the template for the reading's most-tested calculation. Its twist: prices are FALLING (110 → 100 → 90), so the §2 direction table runs in reverse. LIFO gives the highest gross profit here. A candidate who memorised "LIFO = lowest profit" without the "in rising prices" condition gets this wrong — that's your truncated-rule pattern.**

### Example 2 — Global Sales, Inc. (GSI), luxury soap (verified, AED) 🔴 THE MODEL
2018, first year of operations (no beginning inventory). Sells at **240 AED/kg**. Shipments are stored so each is identifiable.
```
Shipment 1   100,000 kg @ 110 AED  =  11,000,000
Shipment 2   200,000 kg @ 100 AED  =  20,000,000
Shipment 3   300,000 kg @  90 AED  =  27,000,000
Goods available  600,000 kg        =  58,000,000 AED
Sold         520,000 kg   →  ending inventory 80,000 kg
Sales  =  520,000 × 240  =  124,800,000 AED   (same under every method)
Physically shipped: all 100,000 of #1, 180,000 of #2, 240,000 of #3
```
**PRICES ARE FALLING** — the most recent kg is the cheapest.

**Q1 — Specific identification** (match the actual kg shipped):
```
COGS = 100,000×110 + 180,000×100 + 240,000×90 = 11.0m + 18.0m + 21.6m = 50,600,000
EI   =  20,000×100 +  60,000×90               =  2.0m +  5.4m         =  7,400,000
GP   = 124,800,000 − 50,600,000                                       = 74,200,000
```
**Q2 — Weighted average cost:**
```
Avg cost = 58,000,000 / 600,000 kg = 96.667 AED/kg
COGS = 520,000 × 96.667 = 50,267,000
EI   =  80,000 × 96.667 =  7,733,000   (curriculum shows 7,733,360 using the rounded 96.667;
                                        answers rounded to the nearest 1,000)
GP   = 124,800,000 − 50,267,000 = 74,533,000
```
**Q3 — FIFO** (oldest, dearest kg sold first):
```
COGS = 100,000×110 + 200,000×100 + 220,000×90 = 11.0m + 20.0m + 19.8m = 50,800,000
EI   =  80,000×90  (newest, cheapest)                                 =  7,200,000
GP   = 124,800,000 − 50,800,000                                       = 74,000,000
```
**Q4 — LIFO** (newest, cheapest kg sold first):
```
COGS = 300,000×90 + 200,000×100 + 20,000×110 = 27.0m + 20.0m + 2.2m  = 49,200,000
EI   =  80,000×110  (oldest, dearest)                                 =  8,800,000
GP   = 124,800,000 − 49,200,000                                       = 75,600,000
```
⚠️ The curriculum's LIFO line writes the layers oldest-first: (20,000×110) + (200,000×100) + (300,000×90). Same answer. **Build LIFO from the newest layer down** and stop when the units sold are used up; whatever is left of the oldest layer is ending inventory.

### Summary table (AED thousands, verified) 🔴
| | Specific ID | Weighted average | FIFO | LIFO |
|---|---|---|---|---|
| Cost of sales | 50,600 | 50,267 | **50,800** (highest) | **49,200** (lowest) |
| Ending inventory | 7,400 | 7,733 | **7,200** (lowest) | **8,800** (highest) |
| Goods available | 58,000 | 58,000 | 58,000 | 58,000 |
| Gross profit | 74,200 | 74,533 | **74,000** (lowest) | **75,600** (highest) |

**The curriculum's two conclusions (quotable):**
1. **In the first year of operations, goods available for sale is the same under all four methods** (no beginning inventory). In later years it **will typically differ**, because **beginning inventories differ** by method.
2. Because the **cost per kg declined**, **LIFO had the highest ending inventory, lowest cost of sales and highest gross profit; FIFO had the lowest ending inventory, highest cost of sales and lowest gross profit.**

### The direction table, now confirmed both ways 🔴 (🔗 §2)
| | Rising prices (§2 illustration) | **Falling prices (GSI)** |
|---|---|---|
| Highest COGS | LIFO | **FIFO** |
| Highest ending inventory | FIFO | **LIFO** |
| Highest gross profit | FIFO | **LIFO** |
| Weighted average | Between | **Between** (50,267 sits between 49,200 and 50,800) |

**The rule underneath both columns:** *LIFO's COGS always carries the newest prices; FIFO's ending inventory always carries the newest prices.* Ask "are the newest prices higher or lower?" and the rest follows.

⚠️ **Specific identification is not guaranteed to sit between FIFO and LIFO.** It depends on which units were physically sold. Here it happens to fall between (50,600), but only the weighted average is always in the middle.

### Calculation routine for every cost-flow question 🔴
1. **Tabulate the layers** (units × cost), oldest to newest, including beginning inventory. Total = goods available.
2. **Note the price direction** (rising or falling), and predict which method gives the highest COGS *before* calculating.
3. **Units in ending inventory** = units available − units sold.
4. **FIFO:** ending inventory = the **newest** layers; COGS = goods available − EI. **LIFO:** ending inventory = the **oldest** layers (beginning inventory first); COGS = goods available − EI. **Weighted average:** cost per unit = goods available ÷ units available.
5. **Check:** COGS + EI = goods available. Answer matches the prediction from step 2.

**Shortcut worth using:** ending inventory is usually the smaller calculation (80,000 kg vs. 520,000 kg). Calculate EI first, then **COGS = goods available − EI**.

---

## 4. Periodic versus Perpetual Inventory Systems (§5.05)
**Exam importance: 🔴 HIGH — two reliable items: (1) **which methods give the same answer under both systems** (specific ID and FIFO — yes; weighted average — not generally; LIFO — generally different); (2) the **LIFO-vs-FIFO effects list** in rising prices: lower profit at every level, **lower taxes → higher operating cash flow**, lower current assets / working capital / total assets. The second is one of the most-tested paragraphs in the reading, and the cash-flow line is a polarity trap.**

### The two systems 🔴
| | **Periodic** | **Perpetual** |
|---|---|---|
| When inventory and COGS are determined | **At the end of the period** | **Continuously updated** for each purchase and sale |
| Purchases | Recorded in a **purchases account** | Added to inventory as they happen |
| How COGS is found | Goods available (**beginning inventory + purchases**) **− ending inventory** | Calculated at each sale |
| Ending inventory quantity | Usually obtained or verified by a **physical count** | Running balance |

### Does the system change the answer? 🔴 MEMORIZE
| Method | Periodic vs. perpetual |
|---|---|
| **Specific identification** | **Same** |
| **FIFO** | **Same** — the oldest units are the oldest units whenever you look |
| **Weighted average cost** | **Not generally the same**. Periodic uses one average for the year; perpetual recalculates the average after each purchase (a "moving" average) |
| **LIFO** | **Generally different**. "Newest" at the time of each sale ≠ newest at year-end |

**The FIFO vs. weighted average comparison (curriculum point):**
- **Periodic:** FIFO and weighted average can allocate **quite different** amounts to COGS and inventory.
- **Perpetual:** FIFO and weighted average give **similar** amounts.
- Because of **limited disclosure** and the **dominance of perpetual systems**, analysts **typically do not adjust** when comparing a weighted-average company with a FIFO company.

**Proof with the GSI numbers (my calculation, verified):**
| Ending inventory (AED) | Periodic | Perpetual |
|---|---|---|
| FIFO | 7,200,000 | 7,200,000 (same) |
| Weighted average | 7,733,333 | 7,254,545 (moving average) |
| Gap vs. FIFO | **533,333** — quite different | **54,545** — similar |

That's exactly the curriculum's claim: the perpetual moving average stays close to FIFO, while the periodic year-end average does not.

### LIFO vs. FIFO — the effects list 🔴 THE MOST-TESTED PARAGRAPH
Condition: **inventory costs increasing AND inventory unit levels stable or increasing.** Under either system, LIFO gives significantly different results from other methods. Compared with FIFO, LIFO gives:

| Statement | Item | LIFO vs. FIFO |
|---|---|---|
| **Income statement** | Cost of sales | **Higher** |
| | Gross profit | **Lower** |
| | Operating income | **Lower** |
| | Income before taxes | **Lower** |
| | Income tax expense | **Lower** |
| | Net income | **Lower** |
| **Cash flow statement** | **Net operating cash flow** | **HIGHER** ⚠️ |
| **Balance sheet** | Inventory carrying amount | **Lower** |
| | Current assets | **Lower** |
| | Working capital | **Lower** |
| | Total assets | **Lower** |

⚠️ **The polarity trap:** everything on the income statement and balance sheet goes **down**, but **operating cash flow goes UP**. Why: COGS is an accounting allocation (the cash paid for inventory is the same whichever method you use), but **taxes are real cash**, and lower taxable income means less tax paid. An option saying "LIFO lowers net income and operating cash flow" is the standard distractor.

⚠️ **The two conditions are part of the rule.** If prices are falling, everything reverses. If unit levels are falling (old, cheap LIFO layers being sold off), the picture changes too. A later section of the reading covers that case.

### Example 3 — GSI under a perpetual LIFO system (verified) 🔴
Same purchases and total sales as Example 2, but now LIFO is applied **at each sale**.

**Transaction log and running carrying amount (all ten rows verified):**
```
Date      Event                     On hand    Layers left (LIFO)                      Carrying amount
5 Jan     Buy 100,000 @ 110         100,000    100,000@110                              11,000,000
1 Feb     Sell 80,000               20,000     20,000@110                                2,200,000
8 Mar     Buy 200,000 @ 100         220,000    20,000@110 + 200,000@100                 22,200,000
6 Apr     Sell 100,000              120,000    20,000@110 + 100,000@100                 12,200,000
23 May    Sell 60,000               60,000     20,000@110 +  40,000@100                  6,200,000
7 Jul     Sell 40,000               20,000     20,000@110                                2,200,000
2 Aug     Buy 300,000 @ 90          320,000    20,000@110 + 300,000@90                  29,200,000
5 Sep     Sell 70,000               250,000    20,000@110 + 230,000@90                  22,900,000
17 Nov    Sell 90,000               160,000    20,000@110 + 140,000@90                  14,800,000
8 Dec     Sell 80,000               80,000     20,000@110 +  60,000@90                   7,600,000
```
**Results:**
```
                     Perpetual LIFO     Periodic LIFO (Ex. 2)
Sales                 124,800,000        124,800,000
Cost of sales          50,400,000         49,200,000     = 58,000,000 − EI
Gross profit           74,400,000         75,600,000
Ending inventory        7,600,000          8,800,000
   composition       20,000@110 + 60,000@90     80,000@110
```
**Why they differ (curriculum explanation):** under perpetual LIFO, by 7 July the company had sold down to the first 20,000 kg, so **only 20,000 kg of the oldest, highest-cost (110) layer survives** to year-end. The rest of ending inventory is the newest, cheapest (90) soap. Periodic LIFO assumes **all 80,000 kg** come from the oldest 110 layer. So with falling prices, perpetual LIFO has **lower EI, higher COGS, lower gross profit** than periodic LIFO.

- **First year:** goods available (58m) and sales (124.8m) are the **same** under both systems. Only the split differs.
- ⚠️ The perpetual figure **depends on timing**. You need the dated log; you can't get it from totals alone. The periodic figure needs only totals.

### Calculation routine for perpetual LIFO 🟡
1. Keep a running list of layers (date, units, cost).
2. At each **sale**, remove units from the **newest** layer first, moving to older layers as needed.
3. At each **purchase**, add a new layer on top.
4. At year-end, value the layers left = ending inventory. **COGS = goods available − EI.**
5. **Sanity check:** a layer that was ever fully used up can't come back. In GSI, the 110 layer fell to 20,000 kg on 1 February and stayed there.

---

## 5. Comparison of Inventory Valuation Methods (§5.06)
**Exam importance: 🔴 VERY HIGH — three reliable items: (1) the **direction statements** for FIFO vs. LIFO/weighted average in rising and falling costs, now stated for gross profit, operating profit and pre-tax income; (2) **which method gives the more current value on which statement** (FIFO → balance sheet; LIFO → income statement); (3) Example 4's **ratio distortion**: LIFO inflates inventory turnover, which looks like better management but isn't. The turnover point is a classic "deceptive" question.**

### The direction statements, as the curriculum writes them 🔴
Both conditions: **constant or increasing inventory quantities.**
| Environment | FIFO vs. weighted average or LIFO | Consequence under FIFO |
|---|---|---|
| **Declining** unit costs | FIFO allocates **more** to cost of sales, **less** to ending inventory | Gross profit, operating profit, income before taxes **lower** |
| **Rising** unit costs | FIFO allocates **less** to cost of sales, **more** to ending inventory | Gross profit, operating profit, income before taxes **higher** |

(🔗 §2 direction table, §3 GSI for falling prices, §4 for the full LIFO effects list including the cash-flow line.)

### Which statement gets the "current" value? 🔴 MEMORIZE
| Method | More closely reflects **current replacement value** on… | Why |
|---|---|---|
| **FIFO** | The **balance sheet** (inventory carrying amount) | Inventory = the **most recently purchased** items |
| **LIFO** | The **income statement** (cost of sales) | COGS = the most recent costs |

- ⚠️ **LIFO ending inventory is typically NOT reflective of current replacement value.** It's assumed to be the **oldest** inventory, potentially from years ago (Company L below still carries units at Year-1 cost of $8 in Year 5).
- **Hook:** *FIFO = good balance sheet, LIFO = good income statement* (in terms of current values). Neither gets both.

### Example 4 — Company L (LIFO) vs. Company F (FIFO) under 4% inflation (verified, all five years) 🔴
**Set-up:** identical except for the method. Base inventory **2,000 units** held every year. After Year 1, **units purchased = units sold**. Unit sales **+10%/yr**; purchase and selling prices **+4%/yr** (inflation), set at the start of each year. Year 1: 20,000 units sold at **$15**, purchased at **$8**.

**Formulas (X = year number):**
```
Sales, Year X           = (20,000 × $15) × (1.10)^(X−1) × (1.04)^(X−1)
Purchases, Year X       = (20,000 × $8)  × (1.10)^(X−1) × (1.04)^(X−1)    (= units sold × current cost)

LIFO (Company L):
  Ending inventory      = 2,000 × $8 = $16,000 EVERY year   ← the Year-1 units never leave
  Cost of sales         = purchases of the year              (units sold = units bought, at this year's price)

FIFO (Company F):
  Ending inventory      = 2,000 × [$8 × (1.04)^(X−1)]       ← 2,000 units at THIS year's cost
  Cost of sales         = Beginning inventory + Purchases − Ending inventory
  e.g. Year 2 = 16,000 + 183,040 − 16,640 = 182,400
```

**Company L — LIFO:**
| | Yr 1 | Yr 2 | Yr 3 | Yr 4 | Yr 5 |
|---|---|---|---|---|---|
| Ending inventory | 16,000 | 16,000 | 16,000 | 16,000 | 16,000 |
| Sales | 300,000 | 343,200 | 392,621 | 449,158 | 513,837 |
| Cost of sales | 160,000 | 183,040 | 209,398 | 239,551 | 274,046 |
| Gross profit | 140,000 | 160,160 | 183,223 | 209,607 | 239,791 |

**Company F — FIFO:**
| | Yr 1 | Yr 2 | Yr 3 | Yr 4 | Yr 5 |
|---|---|---|---|---|---|
| Ending inventory | 16,000 | 16,640 | 17,306 | 17,998 | 18,718 |
| Sales | 300,000 | 343,200 | 392,621 | 449,158 | 513,837 |
| Cost of sales | 160,000 | 182,400 | 208,732 | 238,859 | 273,326 |
| Gross profit | 140,000 | 160,800 | 183,889 | 210,299 | 240,511 |

**Q2 — the ratios:**
```
Inventory turnover  =  Cost of sales / Ending inventory      (this example uses ENDING inventory)
Gross profit margin =  Gross profit / Sales
```
| | Yr 1 | Yr 2 | Yr 3 | Yr 4 | Yr 5 |
|---|---|---|---|---|---|
| **L** inventory turnover | 10.0 | 11.4 | 13.1 | 15.0 | **17.1** |
| **F** inventory turnover | 10.0 | 11.0 | 12.1 | 13.3 | **14.6** |
| **L** gross margin | 46.7% | 46.7% | 46.7% | 46.7% | 46.7% |
| **F** gross margin | 46.7% | 46.9% | 46.8% | 46.8% | 46.8% |

### What the ratios show (curriculum interpretation) 🔴 QUOTABLE
1. **Turnover rises for both companies** because units sold grow 10%/yr while units in inventory stay at 2,000.
2. **Turnover is higher for L (LIFO)**, because L's cost of sales rises with inflation but its inventory carrying amount is **unaffected by inflation** (stuck at $8/unit).
3. ⚠️ **"It might appear that a company using LIFO manages its inventory more effectively, but this is DECEPTIVE."** Both companies have **identical quantities and prices**. Only the accounting method differs.
4. **L's gross margin is stable** because sales and cost of sales both rise at the **same inflation rate** (both are current-year prices).
5. **F's gross margin is slightly higher after Year 1**, because part of F's cost of sales reflects an **older (cheaper) purchase price**: the beginning-inventory units bought last year.

### LIFO liquidation — first mention 🔴
- If a company **sells more units than it purchases** in a year, inventory falls. Under LIFO this is a **LIFO liquidation**: the extra units sold come out of the **old LIFO layers**, at their **old carrying cost**.
- Company L: each unit sold beyond purchases would carry a cost of sales of **$8** (Year-1 cost) → **higher gross profit**. With inflation that profit isn't from better operations; it's from **old, cheap costs flowing through**.
- ⚠️ This is why §4's LIFO effects list requires **"stable or increasing unit levels."** Liquidation reverses the usual LIFO result: lower COGS, higher profit (and higher taxes).

### Hidden pattern in Example 4 — preview of the LIFO reserve (my observation, verified) 🟡
```
FIFO inventory − LIFO inventory:     Yr1 0   Yr2 640   Yr3 1,306   Yr4 1,998   Yr5 2,718
Change in that gap each year:                 640        666          692         720
FIFO GP − LIFO GP each year:          0       640        666          692         720   ← identical
```
- The **gap between FIFO and LIFO inventory** builds up over time; the **year's change** in the gap equals the **year's difference in COGS (and gross profit)**.
- This is the arithmetic behind the **LIFO reserve**, which US GAAP LIFO companies must disclose and analysts use to convert LIFO figures to FIFO. If the next part covers it, the rule will be: **balance-sheet adjustment uses the reserve's level; income-statement adjustment uses the reserve's change.** (Mixing those up is the formula-assembly trap flagged at the module start.)

---

## 6. The LIFO Method and the LIFO Reserve (§5.07)
**Exam importance: 🔴 VERY HIGH — the LIFO-to-FIFO conversion is the single most-tested calculation in the inventories reading, and it's pure formula assembly: **inventory uses the reserve's LEVEL (add it); cost of sales uses the reserve's CHANGE (subtract an increase, add a decrease).** The ratio effects list (lower current ratio, higher D/E, lower profitability) and the LIFO conformity rule are reliable concept items.**

### Why companies choose LIFO 🔴
- When inventory costs are **rising**, LIFO → higher COGS → lower taxable income → **lower income taxes paid** → **higher cash flows**.
- Higher cash flows **may make the company more valuable**, because company value = **present value of future cash flows**. (🔗 §4: the "operating cash flow higher" line.)
- The cost: ending inventory = the units **held the longest**, so carrying amounts are generally **below current replacement cost**. COGS more closely reflects current replacement cost (🔗 §5).

### The full LIFO effects list — rising costs 🔴 MEMORIZE (extends §4's table)
| Area | LIFO vs. other methods |
|---|---|
| **Income statement** | Cost of sales **higher**; gross profit, operating profit, **income tax expense**, net income **lower** |
| **Balance sheet** | Ending inventory, working capital, total assets, **retained earnings, shareholders' equity** **lower** |
| **Cash flow** | Lower income tax paid → net cash flow from operating activities **HIGHER** |
| **Ratios** | **Current ratio lower**; **debt-to-equity higher**; **profitability ratios lower** |

**Why each ratio moves (derive, don't memorise blind):**
```
Current ratio   = Current assets ↓ (inventory ↓) / Current liabilities (unchanged)          → LOWER
Debt-to-equity  = Debt (unchanged) / Equity ↓ (lower retained earnings)                     → HIGHER
Profitability   = Profit ↓ / Sales (unchanged)                                              → LOWER (margins)
```
⚠️ New items vs. §4: **retained earnings and equity are lower** (cumulative lower net income), which is what drives the **higher D/E**. And again: everything is worse *except* operating cash flow, which is **better**.

### Falling costs and the LIFO conformity rule 🔴
- **LIFO conformity rule (US tax):** a company that uses **LIFO for tax** must also use **LIFO for financial reporting**.
- With **falling** costs, LIFO gives **lower** cost of sales → **higher taxable income and taxes** → a company is **unlikely to choose LIFO** for tax, and therefore (by conformity) not for reporting either.
- But a company **already on LIFO** that **cannot justify changing** methods when costs start to fall will see **all the effects reverse**: income statement, balance sheet and ratios move opposite to the rising-cost case.

### The LIFO reserve 🔴 DEFINITION
$$
\text{LIFO reserve} = \text{FIFO inv.} - \text{LIFO inv.}
$$
- **US GAAP requires disclosure** of the LIFO reserve, **in the notes or on the balance sheet**, for companies using LIFO.
- Purpose: gives analysts what they need to restate a LIFO company's **cost of sales and ending inventory to FIFO**, so it can be compared with FIFO (or non-LIFO) companies.
- In rising prices the reserve is **positive** (FIFO inventory > LIFO inventory) and usually **grows** over time.

### The conversion formulas 🔴 THE CORE CALCULATION
**Inventory (balance sheet) — uses the reserve's LEVEL:**

$$
\text{FIFO inv.} = \text{LIFO inv.} + \text{reserve}
$$

**Cost of sales (income statement) — uses the reserve's CHANGE:**

$$
\begin{gathered}
\text{FIFO COGS} = \text{LIFO COGS} \\[4pt]
- (\text{End reserve} - \text{Begin reserve})
\end{gathered}
$$

Reserve **increased** → subtract the increase. Reserve **decreased** → FIFO COGS is **higher** (add the decrease).
**Memory hooks:**
- *Balance sheet = a stock → use the reserve's stock (level). Income statement = a flow → use the reserve's flow (change).*
- *Signs: inventory goes UP to FIFO (add); COGS goes DOWN to FIFO in rising prices (subtract the increase).*

⚠️ **The three formula-assembly traps (your pattern 4):**
1. **Using the level for COGS** (subtracting the whole reserve from COGS instead of its change) — the most common wrong option.
2. **Using the change for inventory** (adding only this year's increase to inventory).
3. **Wrong sign on a declining reserve.** If the reserve **fell**, FIFO COGS is **higher** than LIFO COGS: **add** the decrease. (A falling reserve usually means falling prices or a LIFO liquidation.)

### Proof with Example 4 — converting Company L into Company F (verified) 🔴
Company L's LIFO reserve each year = F's inventory − L's inventory:
```
                         Yr 1     Yr 2      Yr 3      Yr 4      Yr 5
LIFO inventory (L)      16,000   16,000    16,000    16,000    16,000
LIFO reserve                 0      640     1,306     1,998     2,718
Increase in reserve          —      640       666       692       720

FIFO inventory = 16,000 + reserve:        16,640    17,306    17,998    18,718   = F's figures ✓
FIFO COGS = L's COGS − increase:
   Yr 2: 183,040 − 640 = 182,400 ✓      Yr 3: 209,398 − 666 = 208,732 ✓
   Yr 4: 239,551 − 692 = 238,859 ✓      Yr 5: 274,046 − 720 = 273,326 ✓
```
Every converted figure matches Company F's FIFO statements exactly. That's the whole point of the disclosure: Company L's notes would let an analyst rebuild Company F's numbers.

**Wrong-answer check, Year 5:** subtracting the *level* gives 274,046 − 2,718 = 271,328 (wrong — that's trap 1). Adding the *change* to inventory gives 16,000 + 720 = 16,720 (wrong — trap 2).

### Conversion routine 🔴
1. Find the **beginning and ending** LIFO reserve (two numbers — the question often gives both, or gives one and the change).
2. **Inventory:** LIFO inventory + **ending** reserve.
3. **COGS:** LIFO COGS − (ending reserve − beginning reserve). Check the sign: reserve up → COGS down; reserve down → COGS up.
4. **Gross profit (pre-tax):** FIFO GP = LIFO GP + increase in reserve.
5. Sanity check: rising prices → FIFO inventory higher, FIFO COGS lower, FIFO gross profit higher.

---

## 7. LIFO Liquidations (§5.08)
**Exam importance: 🔴 VERY HIGH — the densest section of the reading. Caterpillar (Example 5) is the model for the full LIFO → FIFO conversion including **taxes, net income, retained earnings, deferred tax and ratios**; Reliable Fans (Example 6) is the model for measuring **profit caused by a liquidation**. Recognising a liquidation from a **falling LIFO reserve**, and knowing that its profits are **one-time and unsustainable**, are reliable concept items. Several direction traps sit here because a liquidation *reverses* the usual LIFO results.**

### Why the LIFO reserve grows 🟡
In rising unit costs, **FIFO inventory always exceeds LIFO inventory**. The reserve may grow because:
1. The gap between **older LIFO costs** and **recent FIFO costs** widens over time (inflation); and
2. When units purchased/manufactured **exceed** units sold, a **new LIFO layer** is added (each increase in quantity creates a layer).

### What a LIFO liquidation is 🔴
- **Units sold > units purchased or manufactured** → ending units < beginning units → some **older units** held in inventory are assumed sold = **LIFO liquidation**.
- With **rising costs**, the liquidated units carry **low, old costs** into cost of sales, while **sales are at current prices** → an **inventory-related increase in gross profit**.
- ⚠️ **These inventory profits are one-time events and are NOT sustainable.** They don't come from operations; they come from old cheap costs passing through COGS.

### Why liquidations happen 🔴
| Cause | Within management's control? |
|---|---|
| Supply disruption — e.g., **labour strike at a supplier** forces the company to run down inventory to meet demand | **No** |
| **Recession / declining demand** — company chooses to reduce inventory rather than buy new | Partly (a business decision) |
| **Deliberate manipulation** — intentionally reducing quantities to liquidate old layers and **inflate gross profit and net income at critical times** | **Yes** — the red flag |

- During **downturns**, a liquidation can produce **higher gross profit than would otherwise be realised**.
- If layers are **temporarily depleted and not replaced by fiscal year-end**, the liquidation happens and the higher profit is unsustainable.
- **Analyst action (quotable):** **review the LIFO reserve footnote.** **A decline in the LIFO reserve from the prior period may indicate a LIFO liquidation.**

### Example 5 — Caterpillar (CAT): full LIFO → FIFO conversion (verified) 🔴 THE MODEL
**Data:** CAT uses LIFO for ~65% (2017) / ~60% (2016, 2015) of inventory; inventory stated at **lower of cost and NRV** (🔗 F3 §4). Note 1.D: if FIFO had been used, inventories would have been **$1,924m (2017), $2,139m (2016), $2,498m (2015) higher** → these are the **LIFO reserves**. Effective tax rates: **28% (2017), 36% (2016)**.
```
($ millions)                     2017      2016      2015
Inventories (LIFO)             10,018     8,614     9,700
   raw materials 2,802 / WIP 2,254 / finished goods 4,761 / supplies 201  (2017)
LIFO reserve                    1,924     2,139     2,498      ← FALLING both years
Sales of Machinery & Engines   42,676    35,773    44,147
Total sales and revenues       45,462    38,537    47,011
Cost of goods sold (LIFO)      31,049    28,309    33,546
Profit (loss)                     754       (67)    2,512
Total current assets           36,244    31,967    33,508
Total assets                   76,962    74,704    78,342
Total current liabilities      26,931    26,132    26,242
Total liabilities              63,196    61,491    63,457
Total stockholders' equity     13,766    13,213    14,885
```

**Q1 — FIFO inventory (level of the reserve):**
```
2017: 10,018 + 1,924 = 11,942     2016: 8,614 + 2,139 = 10,753     2015: 9,700 + 2,498 = 12,198
```
→ The reserve **fell** 2015→2016 and 2016→2017: **likely a LIFO liquidation in both 2016 and 2017.**

**Q2 — FIFO COGS (change in the reserve; it DECREASED, so ADD):**
```
2017: 31,049 + (2,139 − 1,924 = 215) = 31,264
2016: 28,309 + (2,498 − 2,139 = 359) = 28,668
```
⚠️ This is the **opposite** of Example 4. A falling reserve means FIFO COGS is **higher** than LIFO COGS. (🔗 §6 trap 3.)

**Q3 — FIFO net income (after tax):**
```
                                              2017       2016
Net income (LIFO)                              754        (67)
Less: increase in COGS under FIFO             (215)      (359)
Add: tax reduction on lower profit  215×28% = 60    359×36% = 129
Net income (FIFO)                              599       (297)
```
**FORMULA:** `ΔNI = −ΔCOGS × (1 − t)`  → 2017: −215 × 0.72 = −155 → 754 − 155 = 599 ✓

**Q4 — operating cash flow:** only **taxes** change cash; the COGS/inventory split doesn't move cash. Under FIFO, CAT would pay **$60m (2017) and $129m (2016) less tax** → operating cash flow **HIGHER** under FIFO by those amounts.
⚠️ **Direction trap:** the curriculum's question asks by how much CFO "would **decline**" under FIFO, but the answer is an **increase**, because CAT's reserve fell (liquidation). The usual "LIFO → higher CFO" result (§4) holds only when the reserve is *rising*. Always check the reserve's direction first.

**Q5 — cumulative tax savings from LIFO through 2017:**
```
Through 2016: reserve 2,139 × 36% = 770      (cumulative extra gross profit under FIFO × tax rate)
2017:        −215 × 28%          = −60      (reserve fell → savings partly reversed)
Cumulative ≈ 2,139 × 36% − 215 × 28% = $710m
```
Equivalent view: by end-2017 FIFO **cumulative** gross profit would be **$1,924m higher** (= the reserve). Higher (lower) assumed tax rates → higher (lower) estimated savings.

**Q6 — addition to retained earnings under FIFO:**
```
Retained earnings ↑  =  LIFO reserve − cumulative taxes  =  1,924 − 710  =  $1,214m
                     (check: 2,139 × 64% − 215 × 72% = 1,369 − 155 = 1,214 ✓)
```
- **Rule of thumb: equity ↑ = reserve × (1 − t)**; the **t** part becomes a liability.
- Alternative view some analysts use: **ignore taxes** and add the **full reserve** to both inventory and equity. Argument: equity is understated by the gap between current inventory value (≈ FIFO) and LIFO carrying value.

**Q7 — effect on cash and the balance sheet:**
- If CAT actually switched to FIFO for tax, it would owe **$710m** of extra taxes, a **cash outflow** in the transition year (a significant immediate tax liability).
- But for **analysis**, the company **isn't converting**, so reflect a **deferred tax liability**, **not** a cash reduction. Restated FIFO balance sheet:
```
Inventory                 + 1,924   (assets)
Equity (retained earnings)+ 1,214
Non-current liabilities   +   710   (deferred tax)
                           1,924 = 1,214 + 710 ✓  (balance sheet still balances)
```

### Example 5 Q8 — ratios, LIFO vs. FIFO (2017, verified) 🔴
| Ratio | Formula | LIFO | FIFO | Appearance under LIFO |
|---|---|---|---|---|
| Inventory turnover | COGS ÷ **average** inventory | 31,049 ÷ [(10,018 + 8,614)/2] = **3.33** | 31,264 ÷ [(11,942 + 10,753)/2] = **2.76** | Seems to manage inventory better (deceptive) |
| Days of inventory on hand | 365 ÷ turnover | **109.6** | **132.2** | Same — driven by lower LIFO carrying amounts |
| Gross profit margin | (Machinery & Engines sales − COGS) ÷ M&E sales | (42,676 − 31,049) ÷ 42,676 = **27.24%** | (42,676 − 31,264) ÷ 42,676 = **26.74%** | More profitable |
| Net profit margin | NI ÷ **total** revenue | 754 ÷ 45,462 = **1.66%** | 599 ÷ 45,462 = **1.32%** | More profitable |
| Return on assets | NI ÷ **average** total assets | 754 ÷ [(76,962 + 74,704)/2] = **0.99%** | 599 ÷ [(78,886 + 76,843)/2] = **0.77%** | More profitable |
| Current ratio | CA ÷ CL | 36,244 ÷ 26,931 = **1.35** | (36,244 + 1,924) ÷ 26,931 = **1.42** | Less liquid |
| Total liabilities-to-equity | TL ÷ equity | 63,196 ÷ 13,766 = **4.59** | (63,196 + 710) ÷ (13,766 + 1,214) = **4.27** | More leveraged |

**Ratio-construction details the exam reuses:**
- **Gross margin uses only Sales of Machinery & Engines** (financial products revenue excluded — gross profit is M&E sales − COGS). **Net margin uses total revenue** (45,462). Using the wrong denominator is a wrong-quantity trap.
- **FIFO ROA:** **both** years' total assets are increased by **that year's** reserve (76,962 + 1,924; 74,704 + 2,139).
- **FIFO current ratio:** add the reserve to current assets; current liabilities unchanged (the deferred tax is **non-current**).
- **FIFO liabilities-to-equity:** liabilities + 710 (deferred tax), equity + 1,214.
- ⚠️ **Two small curriculum inconsistencies (my check):** (1) days on hand use the *rounded* turnover (365/3.33, 365/2.76); unrounded gives 109.5 and 132.5. (2) The printed FIFO liabilities-to-equity formula shows 63,196 ÷ (13,766 + 1,214), which equals **4.22**; the stated **4.27** requires adding the 710 deferred tax to liabilities, consistent with Q7. Use **4.27** with the +710.

**Curriculum summary (quotable):** under LIFO, CAT appears **more profitable, less liquid, and more highly leveraged**. **Yet** because value = PV of future cash flows, **LIFO increases company value** when it lowers taxes in earlier years. **LIFO is primarily used for the tax benefits it provides.**

⚠️ **Why CAT looks MORE profitable under LIFO** (the opposite of §4's rule): its reserve **fell** — a **liquidation** pushed old, cheap layers into COGS, lowering LIFO COGS below FIFO. The *usual* rising-cost result (LIFO less profitable) assumes stable or growing units. **Read the reserve's direction before predicting any ratio.**

### Example 6 — Reliable Fans (RF): profit due to a LIFO liquidation (verified) 🔴
LIFO, **periodic** system. Purchases 12,000 units every year; costs and prices rising $5/yr.
```
                       2015        2016        2017        2018
Units purchased       12,000      12,000      12,000      12,000
Purchase cost/fan       $100        $105        $110        $115
Units sold            10,000      12,000      12,000      13,000   ← 2018: sold > bought
Sales price/fan         $200        $205        $210        $215
Beginning inventory        0     200,000     200,000     200,000
Purchases          1,200,000   1,260,000   1,320,000   1,380,000
Goods available    1,200,000   1,460,000   1,520,000   1,580,000
Ending inventory    (200,000)   (200,000)   (200,000)   (100,000)   ← 2,000 units @ $100; 2018: 1,000 @ $100
COGS               1,000,000   1,260,000   1,320,000   1,480,000
Sales              2,000,000   2,460,000   2,520,000   2,795,000
Gross profit       1,000,000   1,200,000   1,200,000   1,315,000
```
- 2015 created a **2,000-unit layer at $100**. 2016–2017: bought = sold, so the layer was untouched.
- **2018: sold 13,000, bought 12,000** → **1,000 units liquidated** from the 2015 layer at **$100**.

**Q — How much of 2018 gross profit is due to the liquidation?** *(the solution page wasn't in the upload; this is my verified calculation)*
$$
\begin{gathered}
\text{Liquidation profit} = \text{Units liquidated} \\[4pt]
\times (\text{Current cost} - \text{Old layer cost})
\end{gathered}
$$

$$
1{,}000 \times (\$115 - \$100) = \$15{,}000
$$

Check: 2018 COGS = 12,000 × $115 + 1,000 × $100 = 1,480,000 ✓. Had the 1,000 units been replaced at $115: COGS = 1,495,000 → gross profit 1,300,000 instead of 1,315,000 → difference **$15,000** ✓
**FORMULA (general):** for each liquidated layer, `Σ units × (current replacement cost − layer's LIFO cost)`. If several layers are liquidated, liquidate the **newest old layer first** and sum layer by layer.

⚠️ The $15,000 is **not sustainable**: next year RF has only 1,000 units of the cheap layer left, and once they're gone there's nothing more to liquidate.

---

## 8. Inventory Method Changes (§5.09)
**Exam importance: 🔴 HIGH — short section, three reliable items: (1) the IFRS condition for a change ("reliable and more relevant information"); (2) **retrospective vs. prospective** — every change is retrospective **except a US GAAP change TO LIFO, which is prospective**; (3) the analyst's suspicion: the unstated motive is usually **lower taxes** (to LIFO) or **higher profits** (from LIFO). The prospective-LIFO exception is a classic one-word swap.**

### When a change is allowed 🔴
- Changes are **rare**.
- **IFRS:** acceptable **only if** the change "results in the financial statements providing **reliable and more relevant** information about the effects of transactions, other events, or conditions on the business entity's financial position, financial performance, or cash flows."
- **US GAAP:** conditions **similar** to IFRS, **but** the company must **thoroughly explain why the new method is superior and preferable** to the old one. (A heavier justification burden than IFRS.)

### How a change is applied 🔴 — retrospective (the default)
- **Retrospective application** = apply the new method to **comparative information for prior periods**, **as far back as is practicable**.
- **Prior periods presented** → **restated** as if the new method had always been used.
- **Periods before those presented** → their **cumulative effect** goes into the **opening balance of each affected component of equity** (e.g., **retained earnings** or comprehensive income) of the **earliest period presented**.
- **Exemption:** restatement isn't required if it's **impracticable** to determine either the period-specific effects or the cumulative effect.

**The curriculum's example — change in 2018, three years presented (2016, 2017, 2018):**
```
2018 statements          → new method
2016 and 2017 statements → RESTATED as if the new method had always been used
Effect on all years before 2016 → one cumulative adjustment to the
                                  OPENING 2016 balance of retained earnings (and other affected equity)
```
(🔗 F3 §9: this is item 2 of the IFRS statement of changes in equity — "effects of accounting changes retrospectively applied.")

### The exception — changing TO LIFO under US GAAP 🔴 MEMORIZE
| Change | US GAAP treatment |
|---|---|
| **From LIFO** to another method | **Retrospective** restatement (as above) |
| **To LIFO** from another method | **Prospective** — **no retrospective adjustments**. The **carrying amount of inventory under the old method becomes the initial LIFO layer** in the year LIFO is adopted |

- Why prospective makes sense: LIFO layers can't be rebuilt reliably for past years, so the old balance simply becomes the base layer.
- ⚠️ Swaps: "all inventory method changes are applied retrospectively" ✗ (the to-LIFO exception); "a change to LIFO requires restating prior years" ✗; "IFRS permits a prospective change to LIFO" ✗ (IFRS doesn't permit LIFO at all, 🔗 §0).

**Hook:** *Leaving LIFO → look back (retrospective). Joining LIFO → look forward (prospective).*

### The analyst's view — question the stated reason 🔴 QUOTABLE
| Change | Stated reason (plausible) | Real, unstated purpose may be… |
|---|---|---|
| **To LIFO** from FIFO or average cost | e.g., better matching of inventory costs with sales revenue | **Reduce income tax expense** (rising costs → higher COGS → lower taxable income; 🔗 §6) |
| **From LIFO** to FIFO or average cost | some other plausible business explanation | **Increase reported profits** (lower COGS in rising costs; plus the reserve flows into equity) |

- The method choice has a **significant impact** on the statements and the **ratios** derived from them (🔗 §5, §7 Caterpillar ratios).
- When comparing a company with its **industry or competitors**, consider **both** the effect of the **change** and the **differences in methods** across companies.

---

## 9. Inventory Adjustments — Write-downs and Reversals (§5.10)
**Exam importance: 🔴 VERY HIGH — the IFRS vs. US GAAP write-down rules (🔗 F3 §4 had the grid) now become **calculations**: Hatsumei is the model for "how much is written down and how much can be reversed," including the **ceiling/floor on market** under US GAAP. Volvo is the model for **removing an obsolescence allowance** and seeing which ratios improve and which worsen. The ratio directions after a write-down are a classic split-direction item (profitability ↓, activity ↑).**

### Why write-downs happen 🟡
Holding inventory carries **financial risk**: its cost may not be recoverable because of **spoilage, obsolescence, or declines in selling prices**. Risk is highest where **technological obsolescence** is significant.

### IFRS — lower of cost and NRV 🔴 (🔗 F3 §4)
- **NRV** = estimated selling price in the ordinary course of business − estimated costs to **make the sale** − estimated costs to **get the inventory in condition for sale** (completion).
- Assessed **item by item**, or by **groups of similar or related items**.
- If value falls below carrying amount → **write down to NRV**; the loss is an **expense** on the income statement, either **inside cost of sales or reported separately**.
- **Each subsequent period, NRV is reassessed.** A **reversal is REQUIRED** if value recovers, **limited to the amount of the original write-down**, and is recognised as a **reduction in cost of sales**.

⚠️ **Reversal is *required* under IFRS** (not just permitted), and **capped** at the original write-down. The inventory can never go back above its original cost.

### US GAAP — two regimes 🔴 (🔗 F3 §4)
| Methods | Measured at | "Market" |
|---|---|---|
| All **except** LIFO and retail | **Lower of cost or NRV** | — |
| **LIFO and retail** | **Lower of cost or market** | **Current replacement cost**, bounded: **ceiling = NRV**; **floor = NRV − normal profit margin** |

- **Reversals: PROHIBITED** under US GAAP (both regimes). This is the **major difference** from IFRS.
- The write-down loss is **generally in cost of goods sold**.

**Market value under LIFO/retail — the three-number rule:**
```
Market = Replacement cost, but:
   if Replacement cost > NRV                          → Market = NRV  (ceiling)
   if Replacement cost < NRV − normal profit margin   → Market = NRV − normal margin  (floor)
   otherwise                                          → Market = Replacement cost
Then: carrying amount = lower of COST and MARKET
```
**Shortcut:** market is the **middle value** of {replacement cost, NRV, NRV − normal margin}.

### Example 7 — Hatsumei Enterprises (computers) (verified) 🔴 THE MODEL
2017: **cost €5.2m**, **NRV €4.9m**, **replacement cost €4.7m** (above NRV − normal margin). 2018: NRV rises to **€0.5m above** the carrying amount.

| | **Q1: IFRS** | **Q2: US GAAP, LIFO** | **Q3: Agricultural products** |
|---|---|---|---|
| 2017 measure | Lower of cost (5.2) and **NRV (4.9)** | Lower of cost (5.2) and **market**: replacement 4.7 is ≤ NRV (4.9) and above the floor → **market = 4.7** | NRV (fair value less costs to sell) |
| 2017 write-down | 5.2 − 4.9 = **€0.3m** expense | 5.2 − 4.7 = **€0.5m**, typically in COGS | — |
| 2018 recovery (+0.5) | **Reverse €0.3m** only (capped at original write-down) → increase inventory, **reduce cost of sales** by 0.3 | **No reversal** | Increase inventory, **gain of €0.5m** (no cap) |

⚠️ **Three traps here:**
1. Under US GAAP LIFO the write-down is **bigger** (0.5 vs. 0.3) because "market" uses **replacement cost**, which is lower than NRV in this case.
2. The IFRS reversal is **0.3, not 0.5**: capped at the original write-down even though NRV rose by 0.5.
3. Agricultural products aren't under the cost model at all, so the full **0.5 is a gain**.

### Exception — inventories outside IAS 2 🔴
IAS 2 (*Inventories*) **does not apply** to:
- Producers of **agricultural and forest products**, and **minerals and mineral products**;
- **Commodity broker-traders**.

These may be measured at **NRV (fair value less costs to sell and complete)** according to well-established industry practice.
- **Fair value:** quoted price in an **active market** if one exists; otherwise **market-determined prices** (e.g., the most recent transaction price).
- **Changes in value — increases AND decreases — go to profit or loss** in the period of the change. (No cost ceiling; gains above cost are recognised.)
- **US GAAP is similar** for agricultural and forest products and mineral ores. **Mark-to-market inventory accounting is allowed for bullion.**

### Ratio effects of a write-down 🔴 SPLIT DIRECTION — MEMORIZE
A write-down **reduces profit** and **reduces inventory** (assets):
| Ratio type | Effect | Why |
|---|---|---|
| **Profitability** (margins, ROA, ROE) | **Negative** | Profit ↓ |
| **Liquidity** (current ratio) | **Negative** | Current assets ↓ |
| **Solvency** (e.g., debt-to-equity) | **Negative** | Equity ↓ |
| **Activity** (**inventory turnover, total asset turnover**) | **POSITIVE** | The **denominator (asset base) is smaller** |

⚠️ **The split is the trap:** a write-down makes the company look *more efficient* at managing inventory (higher turnover) while making it look *less profitable, less liquid, more leveraged*. "A write-down reduces inventory turnover" is wrong.

**Behavioural consequence (quotable):** the hit to key ratios may make companies **reluctant to record write-downs** unless there is **strong evidence the decline is permanent**, **especially under US GAAP, where reversal is prohibited** (a write-down can never be undone).

**Analyst actions:**
- Consider the **possibility** of write-downs: the ratio impact may be substantial.
- Evaluate **prospective inventory (and other asset) impairments** against **debt covenants** tied to financial ratios. **Breaching covenants can have a significant impact** on the company.

### LIFO vs. FIFO — who writes down more? 🔴
- **Specific ID, weighted average and FIFO** companies are **more likely** to incur write-downs than **LIFO** companies.
- Why: with **rising** costs, LIFO inventory already carries the **oldest, lowest** costs, so it is **conservatively presented**. Write-downs are **far less likely** under LIFO and, if they happen, **smaller**.

### Example 8 — Volvo Group (IFRS, FIFO): removing the obsolescence allowance (verified) 🔴
Volvo reports inventory at **lower of cost and NRV**, cost by **FIFO** (standard cost method). When NRV < cost it records an **allowance for inventory obsolescence** (a contra account, 🔗 F3 §3's allowance logic applied to inventory).
```
(SEK millions)                                 2017       2016       2015
Net sales                                   334,748    301,914    312,515
Cost of sales                              (254,581)  (231,602)  (240,653)
Gross income                                 80,167     70,312     71,862
Profit (income for the period)               21,283     13,223     15,099
Inventories, net                             52,701     48,287     44,390
   finished products 32,304; production materials 20,397  (2017)
Allowance for obsolescence, 31 Dec            3,489      3,683      3,624
   roll: opening + charged to income − scrapping ± translation ± reclass
   2017: 3,683 + 304 − 391 − 116 + 8 ≈ 3,489
Tax rates: 25% (2017), 31% (2016)
```
*(Exhibit typo: 2017 total equity and liabilities prints 412,404; components sum to 412,494 = total assets.)*

**Q1 — inventory without the allowance (gross up, 🔗 F3 §3's gross = net + allowance):**
```
2017: 52,701 + 3,489 = 56,190     2016: 48,287 + 3,683 = 51,970     2015: 44,390 + 3,624 = 48,014
```
**Q2 — cost of sales without write-downs** (assumes all allowance changes go through cost of sales):
```
2017: allowance DECREASED 194 (3,683 → 3,489) → had lowered COGS → remove: 254,581 + 194 = 254,775
2016: allowance INCREASED 59  (3,624 → 3,683) → had raised COGS  → remove: 231,602 −  59 = 231,543
```
⚠️ Same logic as the LIFO reserve (🔗 §6): **balance sheet uses the LEVEL** (add 3,489); **income statement uses the CHANGE** (±194). A decrease in the allowance **lowered** reported COGS; an increase **raised** it.

**Q3 — profit without write-downs:**
```
                                      2017                        2016
Profit (reported)                    21,283                      13,223
COGS change                           (194)                         +59
Tax effect               +194 × 25% = +49            −59 × 31% = −18
Profit without allowance             21,138                      13,264
```
**FORMULA:** `ΔNI = −ΔCOGS × (1 − t)` (🔗 §7 Caterpillar Q3)

**Q4 — profit if ALL past write-downs were reversed in 2017** (independent question):
```
21,283 + 3,489 − (3,489 × 25% = 872) = 23,900
```
(Uses the full allowance **level**, because reversing everything releases the whole cumulative amount into one year's income.)

**Q5 — 2017 ratios, as reported vs. without the allowance:**
| Ratio | Formula | With allowance (reported) | Without (adjusted) |
|---|---|---|---|
| Inventory turnover | COGS ÷ avg inventory | 254,581 ÷ [(52,701 + 48,287)/2] = **5.04** | 254,775 ÷ [(56,190 + 51,970)/2] = **4.71** |
| Days of inventory on hand | 365 ÷ turnover | **72.4** | **77.5** |
| Gross profit margin | Gross income ÷ net sales | 80,167 ÷ 334,748 = **23.95%** | (80,167 − 194) ÷ 334,748 = **23.89%** |
| Net profit margin | Profit ÷ net sales | 21,283 ÷ 334,748 = **6.36%** | 21,138 ÷ 334,748 = **6.31%** |

**Interpretation (curriculum, quotable):**
- **Turnover higher / days lower with the allowance** → the company **appears to manage inventory more efficiently** with write-downs. This is mainly the **lower carrying amount**.
- **Margins slightly higher with the allowance in 2017** because the allowance **fell** (a net release lowered COGS). The net-margin gap is smaller than the gross-margin gap because of the **tax effect**.
- So in 2017, write-downs made Volvo look **slightly more profitable** *and* **more efficient**. That 2017 result depends on the allowance falling. In a year when the allowance rises (2016), margins are *lower* with it.

**Q6 — why Volvo has write-downs and CAT doesn't:** Volvo uses **FIFO**; CAT uses **LIFO**. With rising costs, LIFO carrying amounts reflect the **oldest, lowest** costs, so they're already conservative and write-downs are **less likely**. (🔗 §7 Example 5.)

---

## 10. Evaluation of Inventory Management: Disclosures and Ratios (§5.11)
**Exam importance: 🔴 HIGH — the three inventory ratios (formulas plus interpretation) are near-guaranteed, and the **"high turnover — good or bad?"** diagnosis is a favourite concept question. The IFRS disclosure list is a truncated-rule item; the US GAAP differences (no reversal disclosures; LIFO liquidation income disclosed) are one-word swaps.**

### What the method choice touches 🟡
Items affected: **cost of sales, gross profit, net income, inventories, current assets, total assets.** So ratios built from them move too: **current ratio, ROA, gross profit margin, inventory turnover**. Write-downs to NRV or replacement cost also move them (🔗 §9). Analysts must consider method differences when comparing a company **over time** or **against the industry/competitors**.

### Presentation and disclosure — IFRS list 🔴 (eight items)
| | IFRS requires disclosure of… |
|---|---|
| **a** | **Accounting policies** for measuring inventories, including the **cost formula** used |
| **b** | **Total carrying amount** and the carrying amount by **classification** (merchandise, raw materials, production supplies, WIP, finished goods) |
| **c** | Carrying amount of inventories carried at **fair value less costs to sell** |
| **d** | Amount of inventories **recognised as an expense** in the period (**cost of sales**) |
| **e** | Amount of any **write-down** recognised as an expense in the period |
| **f** | Amount of any **reversal** of a write-down recognised as a **reduction in cost of sales** |
| **g** | **Circumstances or events** that led to the **reversal** |
| **h** | Carrying amount of inventories **pledged as security for liabilities** |

**Memory hook — "Policy, Pieces, Fair value, Expense, Down, Up, Why up, Pledged."**

### US GAAP differences 🔴
- **Very similar**, **except (f) and (g) don't apply**, because US GAAP **doesn't permit reversals** (🔗 §9).
- **Additionally requires:** disclosure of **significant estimates** applicable to inventories, and of **any material amount of income resulting from the liquidation of LIFO inventory** (🔗 §7: the one-time profit).

⚠️ Swaps: "US GAAP requires disclosure of write-down reversals" ✗; "IFRS requires disclosure of LIFO liquidation income" ✗ (no LIFO under IFRS).

### The three inventory ratios 🔴 FORMULAS
Directly affected by the method choice:
$$
\begin{gathered}
\text{Inventory turnover} = \frac{\text{Cost of sales}}{\text{Average inventory}} \\[12pt]
\text{Days on hand} = \frac{365}{\text{Inventory turnover}} \\[12pt]
\text{Gross margin} = \frac{\text{Gross profit}}{\text{Sales}}
\end{gathered}
$$
- **Turnover and days on hand are inversely related.** Higher turnover → fewer days.
- ⚠️ **Denominator detail (quotable):** turnover may be calculated using **average** inventory, while days on hand may be based on **ending** inventory. Read which one the question gives. (Example 4 used ending inventory; Caterpillar and Volvo used average.)

**Worked check with Volvo 2017 (verified):**
```
Average inventory basis:  254,581 / [(52,701 + 48,287)/2] = 5.04×  → 365 / 5.04 = 72.4 days
Ending inventory basis:   254,581 / 52,701 = 4.83×             → 365 × 52,701 / 254,581 = 75.6 days
```
Same company, same year: 72.4 vs. 75.6 days. The denominator choice alone moves the answer.

**Ratios affected less directly (quotable):**
| Ratio | Why inventory method matters |
|---|---|
| **Current ratio** | Inventory is a component of current assets |
| **Return on assets** | Cost of sales drives net income; inventory is part of total assets |
| **Debt-to-equity** | Cumulative net income since inception sits in retained earnings (equity) |

### Interpreting turnover — the diagnosis 🔴 THE CONCEPT QUESTION
Benchmark turnover and days on hand against **industry norms** and **across years**.

**HIGH turnover / LOW days — three possible explanations:**
| Explanation | Evidence that supports it |
|---|---|
| **Highly effective inventory management** | **Minimal write-downs** + **sales growth at or above the industry's** |
| **Inadequate inventory levels** — risk of **lost sales** or **production problems** (raw-material shortages for a manufacturer) | **Slower sales growth combined with higher turnover** |
| **Inventory written down** (smaller denominator, 🔗 §9) | Write-downs in the disclosures, which could reflect **poor inventory management** |

**LOW turnover / HIGH days relative to industry:** could indicate **slow-moving or obsolete inventory**. Again, check sales growth (across years and vs. industry) and the disclosures.

**Analyst's toolkit:** compare the company's **turnover AND sales growth** with the industry's, and **review the disclosures** (write-downs, policies).

⚠️ **The trap:** "high inventory turnover always indicates efficient inventory management" is false. It's one of three explanations, and the stem's extra facts (sales growth, write-downs) tell you which.

### Gross profit margin — interpretation 🔴
- Shows the **percentage of sales contributing to net income** rather than covering cost of sales.
- **Competition:** firms in **highly competitive** industries generally have **lower** margins than firms in industries with fewer competitors.
- **Product type:**
| | Gross margin | Inventory turnover |
|---|---|---|
| **Luxury products** | **Higher** | **Much lower** |
| **Staple products** | Lower | Higher |

⚠️ Margin and turnover often move in **opposite directions across business models**. A luxury retailer's low turnover isn't a red flag by itself; compare against luxury peers.

---

## 11. Illustrations of Inventory Analysis: Adjusting LIFO to FIFO (§5.12)
**Exam importance: 🔴 HIGH — the reading's capstone. Three testable ideas: (1) **inventory-composition signals** (raw materials/WIP ↑ = expected demand ↑; finished goods ↑ while RM/WIP ↓ = demand ↓, possible write-down); (2) **finished-goods growth > sales growth** = warning sign; (3) **a LIFO company must be restated to FIFO** before comparing it with a FIFO or IFRS company. The CAT-vs-Volvo comparison pulls together every conversion from §6–§9.**

### Classification disclosures as signals 🔴
Both IFRS and US GAAP require the carrying amounts of inventory **by classification** (on the balance sheet or in the notes): manufacturers → production supplies, raw materials, WIP, finished goods; retailers → significant merchandise categories. These can signal **future sales and profits**:

| Pattern | Possible signal |
|---|---|
| **Raw materials and/or WIP ↑ significantly** (from **volume**, not unit cost) | Company **expects higher demand** → anticipated **higher sales and profit** |
| **Finished goods ↑ substantially** while **RM and WIP ↓** | **Falling demand** → lower future sales and profit; possible future **write-down of finished goods** |

⚠️ The volume qualifier matters: an increase from **higher unit costs** isn't a demand signal. And **whatever the signal, investigate the underlying reasons** for significant changes.

### Finished-goods growth vs. sales growth 🔴
**If inventories grow faster than sales** → could indicate **declining demand** and **lower future earnings**, because the company may have to:
- **Mark down** selling prices to clear inventory, or
- **Write down** inventory for obsolescence.
Both hurt profits.

**Other costs of too much (or the wrong) inventory:** higher **insurance, storage costs and taxes**; and **less cash and working capital** for other purposes.

### Write-down sensitivity and information sources 🟡
- Write-downs can substantially affect **activity, profitability, liquidity and solvency** ratios (🔗 §9). Know the **industry's obsolescence trends** and test ratios for **sensitivity to potential impairment**.
- Companies can **minimise write-downs** by matching inventory **composition and growth** to **prospective customer demand**.
- Sources beyond the statements: **MD&A** (or similar sections), **industry news and publications**, **industry economic data**.
- **Comparability:** method differences can **significantly** affect ratio comparability. **Restating LIFO to FIFO is critical** for a valid comparison with non-LIFO companies (e.g., anyone under IFRS).

### Comparative Illustration — CAT (LIFO and FIFO-adjusted) vs. Volvo (verified) 🔴
**Q1 — 2017 ratios** (instructions: Volvo's **current provisions** go in current liabilities; **all provisions** go in total liabilities):
| Ratio | CAT (LIFO) | CAT (FIFO) | Volvo |
|---|---|---|---|
| Inventory turnover | 3.33 | 2.76 | **5.04** |
| Days of inventory on hand | 109.6 | 132.2 | **72.4** |
| Gross profit margin | 27.24% | 26.74% | 23.95% |
| Net profit margin | 1.66% | 1.32% | **6.36%** |
| Return on assets | 0.99% | 0.77% | **5.25%** |
| Current ratio | 1.35 | 1.42 | 1.12 |
| Total liabilities-to-equity | 4.59 | 4.27 | 2.78 |
| Return on equity | 5.59% | 4.05% | **20.59%** |

**New calculations (CAT figures from §7, Volvo from §9):**
```
Volvo ROA  = 21,283 / [(412,494 + 398,916)/2]                   = 5.25%
Volvo CR   = 199,039 / (10,806 + 167,317)                       = 1.12   ← current provisions added
Volvo TL/E = (29,147 + 96,213 + 10,806 + 167,317) / 109,011     = 2.78   ← both provisions added
Volvo ROE  = 21,283 / [(109,011 + 97,764)/2]                    = 20.59%

ROE = Net income / Average shareholders' equity
CAT LIFO ROE = 754 / [(13,766 + 13,213)/2]                      = 5.59%
CAT FIFO ROE = 599 / {[(13,766 + 1,924 − 710) + (13,213 + 2,139 − 770)] / 2}
             = 599 / [(14,980 + 14,582)/2]                      = 4.05%
   FIFO equity each year = equity + reserve − deferred tax on it
   (2017: 1,924 − 710 = 1,214; 2016: 2,139 − 770, where 770 = 2,139 × 36%)
```
⚠️ **FIFO equity must be adjusted for BOTH years** when you average. 2016 uses its own reserve (2,139) and its own tax (770).

**Interpretation (curriculum):** comparing **CAT (FIFO)** with Volvo, **Volvo appears to manage inventory more effectively** (higher turnover, fewer days) and has **superior profitability** (net margin). A primary reason for CAT's weak 2017 profit was a **large increase in the provision for income taxes**. An analyst should **investigate the causes** rather than conclude from ratios alone.

⚠️ **Compare like with like:** the fair inventory comparison is **CAT (FIFO) vs. Volvo (FIFO)**. Using CAT's reported LIFO turnover (3.33) narrows the apparent gap with Volvo (5.04) but that's distorted by LIFO's low carrying amounts (🔗 §5 "deceptive").

**Q2 — inventory as a % of total assets:**
| | CAT (LIFO) | CAT (FIFO) | Volvo |
|---|---|---|---|
| 2017 | 10,018 / 76,962 = **13.02%** | 11,942 / (76,962 + 1,924 − 710) = **15.28%** | 52,701 / 412,494 = **12.78%** |
| 2016 | 8,614 / 74,704 = **11.53%** | 10,753 / (74,704 + 2,139 − 770) = **14.14%** | 48,287 / 398,916 = **12.10%** |

*(Curriculum inconsistency, my check: here FIFO total assets **subtract** the deferred tax. In Example 5 (§7) the tax was a **liability** and assets rose by the full reserve (78,886), which gives 15.14% / 13.99%. Same conclusion either way.)*

- As reported, CAT looks **similar** to Volvo. **Adjusted to FIFO, CAT has a higher share of assets tied up in inventory.**
- **Rising inventory share is a concern:** higher maintenance costs (**storage, financing**), and slow-moving/obsolete build-ups may lead to **future write-downs**.
- **Volvo (Note 17):** a **significant increase in production materials** → may be planning to **increase production** of finished goods (which also rose).
- **CAT (Note 7):** **all classifications increasing**, and because they're on **LIFO**, CAT must be **increasing quantities and adding new LIFO layers**. Some cause for concern.

**Q3 — growth rates (reported numbers):**
$$
\text{Growth rate} = \frac{\text{This year} - \text{Last year}}{\text{Last year}}
$$
| | CAT 2017 | Volvo 2017 | CAT 2016 | Volvo 2016 |
|---|---|---|---|---|
| Sales | **19.3%** | **10.9%** | −19.0% | −3.4% |
| Finished goods | 4.0% | 4.2% | −10.7% | **12.8%** |
| Inventories other than finished goods | 30.2% | 18.1% | −11.8% | 2.3% |
```
CAT sales: Sales of Machinery & Engines only (42,676 vs. 35,773); Volvo: net sales
CAT "other": raw materials + WIP + supplies, e.g. 2017 (2,802 + 2,254 + 201) vs. (2,102 + 1,719 + 217)
```
**Interpretation (curriculum):**
- For **both** companies, **finished-goods growth exceeded sales growth** (in at least one year) → could indicate **excess inventory accumulating**.
- **Volvo's** finished-goods growth vs. sales growth is **significantly higher** (2016: FG +12.8% while sales −3.4%).
- **CAT's** lower finished-goods growth may partly be **a LIFO effect** (old costs understate growth in value).
- Volvo appears **aware of the issue** and may be **cutting back production**, given the relatively small rise in non-finished inventories (2016: +2.3%).
- **Conclusion: investigate further** before reaching any conclusion about future sales and profit.

⚠️ **Read the 2016 Volvo row as the textbook warning sign:** sales fell, finished goods rose sharply, raw materials barely moved. That's the §11 "finished goods ↑ while sales ↓" pattern.

---

## 12. Illustrations of Inventory Analysis: Impacts of Write-downs (§5.13)
**Exam importance: 🔴 HIGH — the reading's final worked example ties together the **valuation allowance** (🔗 §9 Volvo), the **standard ratio set**, and a **method-switch direction question** (FIFO → weighted average with rising costs). Two reliable takeaways: **historical cost = carrying amount + valuation allowance**, and the ratio directions when moving to a method that puts higher costs into COGS. The ROA direction needs a short argument, which makes it a favourite trap.**

### Example 10 — Jollof Inc. (hypothetical telecom; exhibits are Alcatel-Lucent's) (verified) 🔴
**Policies (Note 1, Note 2):**
- Finished goods and WIP at **lower of cost and NRV**. NRV = estimated sales revenue for a normal period of activity − expected **completion and selling costs**.
- Valuation allowances are based on **foreseeable changes in demand, technology or the market** (to identify obsolete or excess inventory). They're recorded in **cost of sales or restructuring costs**, depending on their nature.
- **Write-down impact on income before tax:** **€239m (2017), €156m (2016), €65m (2015)**. Steadily increasing.

**Note 3(a) — inventory analysis (€ millions):**
```
                                              2017     2016     2015
Raw materials and goods                        545      474      455
WIP excluding construction contracts           816      805      632
Finished goods                               1,011      995    1,109
Gross value (excl. construction contracts)   2,373    2,274    2,196
Valuation allowance                           (528)    (396)    (298)
Net value (excl. construction contracts)     1,845    1,877    1,898   ← = balance sheet "Inventories and WIP, net"
WIP on construction contracts, gross           184      228      291
Valuation allowance                            (21)     (35)     (19)
WIP on construction contracts, net             163      193      272
Total, net                                   2,008    2,071    2,170
Total allowance (528 + 21)                     549      432      318
```
**Note 3(b) — change in valuation allowance:**
```
                                              2017     2016     2015
At 1 January                                  (432)    (318)    (355)
(Additions)/reversals                         (239)    (156)     (65)   ← = the write-down impact in Note 2
Utilization                                     58       32       45
Changes in consolidation group                  —        —        45
Net effect of FX and other changes              63       10       12
At 31 December                                (549)    (432)    (318)
```
*(Rounding note per the curriculum: 2017 rolls to 550, and the 2016 split sums to 431. The Note 2 table prints 2015's allowance as "318" without brackets; it's a deduction like the other years.)*

**What the notes reveal (curriculum, quotable):**
- The allowance = **the total of write-downs taken** on inventory still on the balance sheet. So: **historical cost = reported carrying amount + valuation allowance** (🔗 §9 Volvo Q1; 🔗 F3 §3 gross = net + allowance).
  - 2017: 1,845 + 528 = **2,373** historical cost (excl. construction contracts).
- The allowance **increased in amount and as a % of gross inventory**: 298 / 2,196 = **13.6%** (2015) → 396 / 2,274 = **17.4%** (2016) → 528 / 2,373 = **22.3%** (2017). A growing share of inventory is impaired: an obsolescence warning.

### Q1 — Jollof's ratios (verified) 🔴
Instructions: **average** for inventory and total assets; **year-end** for everything else. **Debt = long-term bonds and notes + other long-term debt + current portion of long-term debt** only.
| Ratio | Formula | 2017 | 2016 |
|---|---|---|---|
| Inventory turnover | Cost of sales ÷ avg inventory | 9,400 ÷ [(1,845 + 1,877)/2] = **5.05** | 10,150 ÷ [(1,877 + 1,898)/2] = **5.38** |
| Days of inventory | 365 ÷ turnover | **72.3** | **67.8** |
| Gross profit margin | Gross profit ÷ total revenue | 4,867 ÷ 14,267 = **34.1%** | 4,795 ÷ 14,945 = **32.1%** |
| Current ratio | CA ÷ CL | 12,238 ÷ 9,817 = **1.25** | 11,504 ÷ 9,117 = **1.26** |
| Debt-to-equity | Total debt ÷ equity | (3,302 + 56 + 921) ÷ 4,388 = **0.98** | (3,794 + 40 + 406) ÷ 9,830 = **0.43** |
| Return on total assets | NI ÷ avg total assets | −4,345 ÷ [(22,941 + 28,417)/2] = **−16.9%** | −2,921 ÷ [(28,417 + 35,188)/2] = **−9.2%** |

⚠️ **Debt definition trap:** debt here **excludes** pensions, deferred tax, provisions, trade payables, etc. Only interest-bearing borrowings. Total debt barely moved (4,240 → 4,279); **D/E more than doubled because equity collapsed** (9,830 → 4,388).

### Q2 — Interpretation, 2016 → 2017 (curriculum) 🔴
| Ratio | Change | Meaning |
|---|---|---|
| Inventory turnover / days | 5.38 → 5.05; days **+4.5** | Managing inventory **less efficiently** |
| Gross margin | 32.1% → 34.1% (**+2.0 pts**) | Improved |
| Current ratio | ~unchanged | — |
| Debt-to-equity | 0.43 → 0.98 | Debt stable; **equity falling fast** from cumulative **net losses** hitting retained earnings |
| ROA | −9.2% → −16.9% | **Worse**: larger net loss **and** lower total assets |

**Root causes to investigate:** gross profit **didn't cover admin/selling and R&D** expenses in 2016 or 2017 (operating income before special items: **−594** and **−47**). **Restructuring costs and asset impairments** (2017: 472 + 3,969) drove the operating losses.

⚠️ **Turnover fell even though write-downs rose.** Write-downs normally *raise* turnover (smaller denominator, 🔗 §9), but here cost of sales fell faster (10,150 → 9,400) than average inventory. Don't assume the "write-down boosts turnover" effect dominates every other change.

### Q3 — What if Jollof used weighted average instead of FIFO? 🔴 DIRECTION QUESTION
**Assumption:** replacement costs **increasing**, quantities **stable or increasing**, and **no write-downs** neutralising the method difference.
- Weighted average puts **higher** costs into COGS than FIFO (FIFO's COGS = oldest, cheapest costs, 🔗 §2).
- So under weighted average: **COGS higher; inventory lower; gross profit, net income, retained earnings lower.**

| Ratio (weighted average vs. reported FIFO) | Direction | Why |
|---|---|---|
| **Inventory turnover** | **Higher** | Numerator (COGS) ↑ **and** denominator (inventory) ↓ |
| **Days of inventory** | **Lower** | Turnover ↑ |
| **Gross profit margin** | **Lower** | COGS ↑ |
| **Current ratio** | **Lower** | Inventory ↓; current liabilities unchanged |
| **Return on assets** | **Lower** | See argument below |
| **Debt-to-equity** | **Higher** | Retained earnings (equity) ↓ |

**Why ROA is lower under weighted average (the curriculum's argument):** the method moves **net income and total assets by the same amount**, but the change in the **numerator** dominates because NI is much smaller than assets.
```
Weighted average:  NI €3m,  assets €100m  → ROA = 3 / 100 = 3.00%
FIFO:              NI €4m,  assets €101m  → ROA = 4 / 101 = 3.96%   (FIFO adds €1m after tax to both)
```
⚠️ **The trap:** "assets are also lower, so ROA is unchanged or higher." No: a €1m change is 33% of NI but only 1% of assets.

**If costs were FALLING:** weighted average COGS would be **lower** than FIFO and inventory **higher** → **every conclusion above reverses**. (🔗 §3: always ask whether the newest costs are higher or lower first.)

---

## 13. Quick-Reference Sheet

```
── INTRODUCTION & COST (§0–1) ──
Merchandiser: finished goods only | Manufacturer: RAW MATERIALS, WIP, FINISHED GOODS
  (total only on face → three amounts in a FOOTNOTE)
Goods available for sale = Beginning inventory + Purchases = Ending inventory + COGS
  Method changes the SPLIT, not the total
IN inventory: purchase price, import duties, freight-in, transit insurance, handling,
  direct labour, FIXED and variable production overhead; trade discounts REDUCE cost
OUT (expense): ABNORMAL waste, STORAGE (unless needed for production), ADMIN, SELLING
  ("WSAS"); freight-out = selling cost
Wrongly capitalising → PROFIT and INVENTORY both OVERSTATED
  Acme: 9.0 + 18.0 + 1.8 + 1.0 freight = €29.8m in; 30k waste + 500k storage = €530k out

── METHODS (§2–3) ──
IFRS: specific ID, FIFO, weighted average (3) | US GAAP: + LIFO (4)
Same method for items of SIMILAR NATURE AND USE
Specific ID = actual cost (gems, segregated projects); others = cost-flow ASSUMPTIONS
Weighted avg cost/unit = Total cost of goods available / Total UNITS available
Prices constant → method choice largely irrelevant
RISING prices:  FIFO → COGS LOW, EI HIGH, profit HIGH | LIFO → COGS HIGH, EI LOW, profit LOW
FALLING prices: everything REVERSES (GSI: LIFO GP 75,600 highest; FIFO 74,000 lowest)
Weighted average ALWAYS between; specific ID not necessarily
Rule: LIFO's COGS and FIFO's EI carry the NEWEST prices
CHECK: COGS + EI = goods available, every method
First year: goods available same for all methods; later years differ (beginning inv. differs)

── PERIODIC vs. PERPETUAL (§4) ──
Periodic: COGS = beg + purchases − ending (physical count) | Perpetual: updated each transaction
Same under both: SPECIFIC ID, FIFO | Different: weighted average (moving avg), LIFO
Perpetual: FIFO ≈ weighted average → analysts usually don't adjust
GSI perpetual LIFO EI 7.6m vs periodic 8.8m (old layer depleted to 20,000 kg on 1 Feb)

── LIFO vs. FIFO EFFECTS, RISING COSTS + STABLE/RISING UNITS (§4, §6) ──
LIFO: COGS ↑; GP, op. income, pretax, TAX, NI ↓; inventory, CA, WC, total assets,
  RE, EQUITY ↓; OPERATING CASH FLOW ↑ (lower tax);
  current ratio ↓, D/E ↑, profitability ↓, inventory turnover ↑ (deceptive)
FIFO = current values on BALANCE SHEET | LIFO = current values on INCOME STATEMENT
LIFO conformity: LIFO for tax ⇒ LIFO for reporting

── LIFO RESERVE (§6–7) ──
LIFO reserve = FIFO inventory − LIFO inventory (US GAAP disclosure, notes or B/S)
FIFO inventory = LIFO inventory + RESERVE (LEVEL)
FIFO COGS      = LIFO COGS − INCREASE in reserve  (+ DECREASE if reserve fell)
FIFO NI        = LIFO NI + Δreserve × (1 − t)
FIFO equity    = LIFO equity + reserve × (1 − t);  reserve × t → DEFERRED TAX LIABILITY
  (not a cash reduction — no actual change)
Cumulative tax saved ≈ reserve × t
CAT: reserve 2,498 → 2,139 → 1,924 FELL → LIFO liquidation; FIFO COGS = LIFO + 215;
  FIFO NI 599; inventory +1,924 = equity +1,214 + DTL +710

── LIFO LIQUIDATION (§5, §7) ──
Units sold > units purchased → old cheap layers into COGS → GP ↑ (one-time, unsustainable)
Signal: DECLINE in LIFO reserve.  Causes: supplier strike, recession, MANIPULATION
Liquidation profit = units liquidated × (current cost − old layer cost)
  RF: 1,000 × (115 − 100) = $15,000
With liquidation, LIFO looks MORE profitable than FIFO and FIFO CFO is HIGHER

── METHOD CHANGES (§8) ──
IFRS: only if RELIABLE AND MORE RELEVANT | US GAAP: + explain why PREFERABLE
Default: RETROSPECTIVE — restate presented years; earlier effect → OPENING equity
EXCEPTION (US GAAP): change TO LIFO = PROSPECTIVE; old carrying amount = first LIFO layer
Motives: to LIFO = lower TAX; from LIFO = higher PROFIT

── WRITE-DOWNS (§9) ──
IFRS: lower of cost and NRV; REVERSAL REQUIRED, capped at original write-down,
  recognised as REDUCTION in cost of sales
US GAAP: lower of cost or NRV; LIFO/retail = lower of cost or MARKET
  market = replacement cost, ceiling NRV, floor NRV − normal margin (= MIDDLE value)
  NO reversals
Hatsumei: IFRS write-down 0.3 (reverse 0.3 only); US GAAP LIFO 0.5 (no reversal);
  agricultural: gain 0.5
Outside IAS 2: agricultural/forest/mineral producers, commodity broker-traders →
  NRV/fair value less costs to sell, changes in P&L; US GAAP bullion mark-to-market
Write-down: profitability, liquidity, solvency ↓ | ACTIVITY (turnover) ↑
LIFO companies write down less (already oldest, lowest costs)
Allowance removal: inventory + allowance LEVEL; COGS ± allowance CHANGE (like LIFO reserve)
Historical cost = carrying amount + valuation allowance

── DISCLOSURES & RATIOS (§10–12) ──
IFRS disclosures (8): policy/cost formula | amounts by class | at FV less costs to sell |
  expensed | write-downs | reversals | reasons for reversals | pledged as security
US GAAP: no reversal items; + significant estimates + LIFO liquidation income
Inventory turnover = COGS / average inventory
Days on hand = 365 / turnover  (may use ENDING inventory — check)
Gross margin = gross profit / sales
High turnover: efficiency (few write-downs, sales growth ≥ industry) OR too little
  inventory (slower sales growth) OR write-downs
Low turnover: slow-moving / obsolete
Luxury: high margin, low turnover | Staples: low margin, high turnover
RM/WIP ↑ (volume) = demand ↑ | FG ↑ while RM/WIP ↓ = demand ↓, write-down risk
FG growth > sales growth = warning (mark-downs, write-downs)
Restate LIFO → FIFO before comparing with FIFO/IFRS companies
FIFO → weighted avg (rising costs): turnover ↑, days ↓, GM ↓, CR ↓, ROA ↓, D/E ↑
  ROA: €3/€100 = 3.00% vs €4/€101 = 3.96% — numerator effect dominates
```

---

## 14. How This Module Shows Up on the Exam

| Topic | Style | Likelihood |
|---|---|---|
| FIFO / LIFO / weighted average COGS and ending inventory | **Calc** | 🔴 Very high |
| Direction table: rising vs. falling prices | Concept | 🔴 Very high |
| LIFO → FIFO conversion: inventory (level), COGS (change), NI (× (1 − t)) | **Calc** | 🔴 Very high |
| LIFO effects list incl. HIGHER operating cash flow | Concept | 🔴 Very high |
| IFRS vs. US GAAP write-downs; reversal rules; market ceiling/floor | **Calc**/concept | 🔴 Very high |
| Ratio effects of write-downs (profitability ↓, turnover ↑) | Concept | 🔴 Very high |
| Inventory turnover, days on hand, gross margin | **Calc** | 🔴 Very high |
| LIFO liquidation: signal (reserve ↓), profit calc, unsustainable | **Calc**/concept | 🔴 High |
| Costs included vs. excluded from inventory | **Calc**/concept | 🔴 High |
| Periodic vs. perpetual: which methods differ | Concept | 🔴 High |
| FIFO = current B/S, LIFO = current I/S | Concept | 🔴 High |
| LIFO-inflated turnover is deceptive | Concept | 🔴 High |
| Method changes: retrospective; to-LIFO prospective | Concept | 🔴 High |
| High-turnover diagnosis (efficient / too little / written down) | Concept | 🔴 High |
| Equity/deferred tax restatement; FIFO ROE with both years adjusted | **Calc** | 🟡 Medium-High |
| Inventory composition and FG-vs-sales growth signals | Concept | 🟡 Medium-High |
| IFRS disclosure list; US GAAP differences | List | 🟡 Medium |
| LIFO conformity rule; why LIFO is chosen (tax) | Concept | 🟡 Medium |
| Agricultural/commodity exception from IAS 2 | Concept | 🟡 Medium |
| Allowance as % of gross inventory; historical cost = net + allowance | **Calc** | 🟡 Medium |
| Perpetual LIFO transaction log | **Calc** | 🟢 Low-Medium |
| Luxury vs. staples margin/turnover | Concept | 🟢 Low |

**⭐ Flagged weak spots (this module):**
- **No scored curriculum examples** in this reading (Examples 1–8 and 10 were reveal-the-answer pages). **Module tally: — / —.** The 90-question practice set is the test.
- **Highest risk for your patterns:** the LIFO-reserve conversion (pattern 4: level vs. change; sign when the reserve falls), the falling-price and liquidation reversals (pattern 7: dropping the "rising prices, stable units" condition), and the "LIFO → higher CFO" line (pattern 1).

**⭐ Carry-over watch (your error patterns applied to this module):**
- **Polarity (pattern 1):** LIFO lowers every income-statement and balance-sheet item **but raises operating cash flow**; write-downs lower every ratio **except turnover**; capitalising a cost overstates **both** profit and inventory.
- **Formula assembly (pattern 4):** inventory uses the reserve's **level**; COGS uses its **change**; NI uses change × (1 − t); equity uses level × (1 − t). Write the four lines before reading the options.
- **Truncated rule (pattern 7):** every direction rule has two conditions — **price direction** and **unit levels**. CAT and GSI both reverse the "usual" answer. Also: IFRS reversal is **capped**; US GAAP **never** reverses; to-LIFO changes are **prospective**.
- **Wrong quantity (pattern 3):** weighted average divides by **units available**, not units sold; gross margin may use a **segment's** sales (CAT M&E) while net margin uses total revenue; debt may exclude non-interest-bearing liabilities (Jollof).
- **Stem negation (pattern 9):** Q7, Q67, Q75, Q83 are "least likely / not" stems.

**Study priority order:**
1. **FIFO / LIFO / weighted average calculations** (§2–3) with the COGS + EI check, both price directions
2. **LIFO reserve conversions** (§6–7): level vs. change, sign on a falling reserve, NI and equity with tax
3. **LIFO vs. FIFO effects list** incl. cash flow and ratios (§4, §6)
4. **Write-downs:** IFRS vs. US GAAP, market ceiling/floor, reversal cap, ratio split (§9)
5. **LIFO liquidation:** signal, profit calc, why unsustainable (§7)
6. **Inventory ratios and the turnover diagnosis** (§10–12)
7. **Costs in vs. out of inventory** (§1)
8. **Periodic vs. perpetual** (§4); FIFO = B/S, LIFO = I/S (§5)
9. **Method changes** (§8)
10. Disclosures, agricultural exception, composition signals

> **Note status: COMPLETE** — §5.01 introduction through §5.13 impacts of write-downs (the reading's final section). Curriculum examples worked and verified: Example 1 (Acme), 2 (GSI), 3 (GSI perpetual), 4 (L vs. F), 5 (Caterpillar), 6 (Reliable Fans), 7 (Hatsumei), 8 (Volvo), the CAT-vs-Volvo comparative illustration, and 10 (Jollof). Scored tally: **— / —** (no scored examples in this reading). Practice questions Q1–Q90 → Study Hub (Financial Statement Analysis → M5, `fsa-m5-q01…`).
