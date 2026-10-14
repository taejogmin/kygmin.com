# CFA Level I — Financial Statement Analysis
# Module 4: Analyzing Statements of Cash Flows
## Complete — §4.01 Introduction through §4.07 Indirect Method under US GAAP (Deduplicated vs. FSA Modules 1–3 and Economics)

> **Big picture:** The third statement deep-dive. Module 2 was about accrual timing on the income statement; Module 3 about what the balance sheet's balances mean; this reading is about how the **cash flow statement** is organised and read: the **three-activity classification** and its boundary cases (trading securities, trade credit, non-cash items); the full **IFRS-vs-US GAAP interest/dividend grid**; **non-cash transactions** (disclosed, not reported); the **direct vs. indirect** formats and the standards' stance; and **four worked company statements** — Unilever (IFRS, indirect), Telefónica (IFRS, direct), Tech Data (US GAAP, direct + required reconciliation), Walmart (US GAAP, indirect + required interest/tax disclosure). *Preparing* a statement from balance-sheet changes and cash-flow *analysis* (free cash flow, ratios) come in the next reading. Pattern risks: every working-capital adjustment is a **polarity** item (asset ↑ = cash ↓; liability ↑ = cash ↑); "net cash from X" lists with planted gains/losses are **wrong-quantity** items (your Example 1 miss); the classification grid and the two US GAAP disclosure rules are **truncated-rule** territory.

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
| 🔗 E1–E7 | Economics Module notes 1–7 |

**Already covered elsewhere (study it there, not here):**
| Topic | Where it lives |
|---|---|
| The cash flow statement as one of the four statements; three activities named | F1 §9 |
| Accrual vs. cash basis | F1 §4, F2 §2 |
| Interest and dividend classification grid (seeded) | F2 §5 |
| Cash and cash equivalents (≤ 3 months; restricted excluded) | F3 §3 |
| Receivables, allowance and write-offs | F3 §3 |
| Deferred revenue and accrued expenses | F3 §5 |
| Prepaid expenses as assets | F3 §4 |
| Working capital = CA − CL | F3 §1 |

---

## 0. Introduction (§4.01)
**Exam importance: 🟡 Medium as a section, but 🔴 for one idea: cash-basis information *contrasts with* accrual-basis information, and the reconciliation between the two is what the statement is for.**

### What the statement provides 🔴
- Information about **cash receipts and cash payments** — **cash-based**, in contrast to the **accrual-based** income statement. Revenue shows on the income statement **when earned**; the receipt shows here **when collected**.
- **Two reconciliations:**
  1. **Reported income ↔ cash flow from operating activities** — *when, whether, and how* the company turns operations into cash.
  2. **Beginning cash ↔ ending cash** on the balance sheet.

### Why income alone is not enough 🔴 (quotable)
> A company that makes **all sales on account**, without regard to collection, would report **healthy sales and possibly significant income** — yet with **zero cash inflow it would not survive**.

⚠️ Income is *important*; cash flow is *also essential*. An option claiming the cash flow statement replaces the income statement overstates it.

### The three activities and the analyst's questions 🔴
| Question | What it tests |
|---|---|
| Does the company generate **enough cash from operations to pay for new investments**, or rely on **new debt**? | Self-funding or borrowing |
| Are **dividends** paid from **operations**, **asset sales**, or **debt**? | What funds distributions |

**Sustainability (quotable):**
- Cash from **operations** can, in theory, continue **indefinitely**.
- Cash from **selling assets** lasts only **as long as there are assets to sell**.
- Cash from **debt** lasts only **as long as lenders are willing to lend**.

⚠️ "Positive total cash flow" says nothing by itself — look at *which activity* produced it.

### Summary line 🟡
Sources and uses of cash help users evaluate **liquidity, solvency, and financial flexibility** (the ability to respond to unexpected needs and opportunities).

---

## 1. Classification of Cash Flows and Non-Cash Activities (§4.02)
**Exam importance: 🔴 VERY HIGH — "which section does X go in," "compute net cash from investing/financing" with non-cash distractors planted, and the IFRS-vs-US GAAP interest/dividend grid. Example 1 is the model distractor question — and you missed it.**

### The three activities 🔴
| Activity | What it is | Inflows | Outflows | ⚠️ Boundary cases |
|---|---|---|---|---|
| **Operating** | Day-to-day revenue activities **plus the residual** | Cash sales; **collection of receivables**; services, royalties | **Inventory, salaries, taxes**; **paying accounts payable** | **Trading securities** → operating, for **any** company |
| **Investing** | Buying/selling **long-term assets and other investments** | Sale of **non-trading securities**, PP&E, intangibles | Purchases of those | "Other investments" = **short- AND long-term** equity/debt of other companies, **excluding** trading securities |
| **Financing** | Obtaining or repaying **capital** from **shareholders and creditors** | Issuing stock (common **or preferred**), bonds, **borrowing** | **Repurchasing stock**, **repaying** borrowings | ⚠️ **Indirect borrowing via accounts payable is OPERATING** |

**Memory hooks:**
- Operating = *make and sell*; Investing = *buy and sell the long-lived stuff*; Financing = *raise and return capital*.
- **Trading securities → operating; held as investments → investing.**
- **Trade credit (A/P) is operating.** A bank loan — even a short-term note — is financing.

> ### ⭐ YOU MISSED OFFICIAL Q1 AND Q2 HERE — the three activities themselves
> **Q1:** "the three classifications" → you picked **inflows / outflows / net flows**; correct is **operating / investing / financing**. Inflow vs outflow is the *direction* inside each activity, not the classification.
> **Q2:** sale of a **building** for cash → you picked **operating**; correct is **investing**. A building is a long-term asset; buying or selling long-term assets is investing, whatever the cash is later used for.
> **Fix — one question per item:** *Is this the day-to-day business (O), the long-lived stuff (I), or the capital providers (F)?* Ask it before reading options.

### Example 1 — net cash flow from investing ⭐ MISSED
| Item | Amount | Section |
|---|---|---|
| Proceeds from issuance of long-term debt | 300,000 | **Financing** |
| Purchase of equipment | (200,000) | **Investing** |
| Loss on sale of equipment | 70,000 | ❌ **Not a cash flow** |
| Proceeds from sale of equipment | 120,000 | **Investing** |
| Equity in earnings of affiliate | 10,000 | ❌ **Not a cash flow** |

$$
\begin{gathered}\text{Net investing} = -200{,}000 + 120{,}000 \\[4pt] = -80{,}000\end{gathered}
$$

> ### ⭐ YOU MISSED EXAMPLE 1 HERE
> You picked **(150,000) = −200,000 + 120,000 − 70,000** — you subtracted the **loss on sale**. The loss is the gap between carrying value and proceeds; it lives on the **income statement**. **The cash flow is the proceeds — the whole proceeds, and nothing but the proceeds.**
> *(Wrong quantity — fourth module where an income-statement figure was carried into a cash or equity total: Econ M3, F2 Ex3, now F4.)*
> **Routine for every "net cash from X" list:**
> 1. **Strike** every non-cash line (gains, losses, equity-method income, depreciation, impairment).
> 2. **Label** each survivor **O / I / F**.
> 3. **Sum** only the requested letter.
> Step 1 *before* step 2 — the loss *looks* like it belongs with the equipment sale, which is exactly the lure.

### Example 2 — operating vs. financing (correct) ✓
Issue a **£30,000 180-day note** → pay for **inventory**; issue **£110,000 long-term debt** → pay for **equipment**:

| Leg | Section | Amount |
|---|---|---|
| Issue 180-day note | **Financing** | +30,000 |
| Pay for inventory | **Operating** | **−30,000** ✓ |
| Issue long-term debt | **Financing** | +110,000 |
| Pay for equipment | **Investing** | −110,000 |

- ⚠️ **Short-term notes are financing** — "180-day" doesn't make it operating. Only *supplier* credit is operating.
- Financing rises **£140,000** in total; the £110,000 option was the half-answer distractor (you avoided it).

### Interest and dividends — the full grid 🔴 MEMORIZE
| Item | **IFRS** | **US GAAP** |
|---|---|---|
| **Interest received** | Operating **or Investing** | Operating |
| **Interest paid** | Operating **or Financing** | Operating |
| **Dividends received** | Operating **or Investing** | Operating |
| **Dividends paid** | Operating **or Financing** | **Financing** |

**The logic behind the IFRS choices:**
- Anything **received** can alternatively be **investing** (a return *on* an investment).
- Anything **paid** can alternatively be **financing** (a cost *of* capital).

**US GAAP:** no discretion — three operating, **dividends paid = financing**.

**IFRS conditions:** classification **consistent year to year**; amounts **disclosed separately**.

⚠️ **Swaps:** (1) "IFRS: interest paid may be investing" ✗; (2) "US GAAP: dividends received are financing" ✗; (3) "US GAAP allows a choice if disclosed" ✗.

### Non-cash investing and financing transactions 🔴
- **No inflow or outflow of cash**: exchanging one non-monetary asset for another; a **stock dividend**; **converting** a convertible bond or preferred into common.
- **Not in the cash flow statement**, but significant ones **must be disclosed** in a **note or supplementary schedule**.

⚠️ "A conversion of debt to equity is a financing inflow and outflow" ✗ — it's not in the statement at all.

> ### ⭐ YOU MISSED OFFICIAL Q4 HERE — the exact swap flagged on the line above
> Convertible bond → common stock: you picked **"a financing cash outflow and inflow"**; correct is **"reported as supplementary information."**
> It *feels* like a financing event — debt goes down, equity goes up — but **no cash moves**, so it can't be in any section. **Test:** *did cash change hands?* No → not in the statement → disclosed in a note/schedule.

### Classification drill 🔴
| Stem item | Section |
|---|---|
| Collection of receivables; payment of A/P | Operating |
| Trading securities bought/sold | Operating |
| Bonds of another company held as an investment | Investing |
| Proceeds from sale of PP&E | Investing (the **proceeds**) |
| Gain / loss on sale; equity-method income; depreciation | **Not a cash flow** |
| 180-day note payable issued | Financing |
| Repay bonds; buy treasury stock | Financing |
| Dividends paid (US GAAP) | Financing |
| Interest paid (US GAAP) | Operating |
| Stock dividend; bond conversion; asset swap | **Not in the statement** — disclosed |

---

## 2. Direct and Indirect Methods for Operating Cash Flow (§4.03)
**Exam importance: 🔴 HIGH — (1) the CFO *amount* is identical under both; (2) what each shows and who prefers it; (3) the standards' stance; (4) the US GAAP extra disclosure for each method.**

### What's the same and what differs 🔴
- **CFO amount: identical** under both methods.
- Only the **operating section's format** differs.
- **Investing and financing are presented exactly the same** either way.

⚠️ "The direct method produces a higher CFO" ✗; "investing differs under the direct method" ✗.

### Direct vs. indirect 🔴
| | **Direct** | **Indirect** |
|---|---|---|
| Shows | **Specific cash receipts and payments** — from customers, to suppliers, employees, interest, taxes | How CFO is **obtained from net income** via adjustments |
| Starts from | Gross receipts and disbursements | **Net income** |
| Accruals | **Eliminated** | Adjusts NI for **(1) non-cash items, (2) non-operating items, (3) changes in operating accruals** |
| Main argument | **Sources** of operating cash; helps **predict future CFO** | Shows **reasons NI ≠ CFO**; **mirrors forecasting** (forecast income, then adjust) |
| Preferred by | **Analysts and commercial lenders** (capacity to repay) | **Preparers** (easier, less costly) |

- Curriculum's rebuttal: with modern systems it is **not clear** direct is costly. **CFA Institute has advocated requiring the direct format**, with the indirect reconciliation as supplementary disclosure.

### The standards' position 🔴
| | IFRS | US GAAP |
|---|---|---|
| Encourages | **Direct** | **Direct** |
| Permits | **Either** | **Either** |
| Direct users must also… | — | Present a **reconciliation of NI to CFO** |
| Indirect users must also… | (IFRS: interest, dividends, taxes disclosed separately anyway) | Disclose **cash paid for interest and taxes** |

- In practice the **vast majority** use the **indirect** method.
- ⚠️ "IFRS *requires* the direct method" ✗; "most companies use direct" ✗.

**Hook:** *Direct = gross receipts and payments, analysts' favourite, encouraged but rare. Indirect = NI + adjustments, preparers' favourite, nearly universal.*

---

## 3. Indirect Method under IFRS — Unilever (§4.04)
**Exam importance: 🔴 HIGH — "read the statement" questions and the *why* behind each indirect adjustment. Unilever uses its IFRS choices: interest received and JV dividends → investing, interest paid → financing.**

### Exhibit 1 — Unilever (IFRS, indirect), €m — operating section
| Line | 2017 | 2016 | 2015 |
|---|---|---|---|
| Net profit | 6,486 | 5,547 | 5,259 |
| + Taxation (expense added back) | 1,667 | 1,922 | 1,961 |
| − Share of JV/associate income | (173) | (231) | (198) |
| + Net finance costs | 877 | 563 | 493 |
| **= Operating profit** | **8,857** | **7,801** | **7,515** |
| + Depreciation, amortisation & impairment | 1,538 | 1,464 | 1,370 |
| ± Changes in working capital | (68) | 51 | 720 |
| − Pensions less payments | (904) | (327) | (385) |
| ± Provisions less payments | 200 | 65 | (94) |
| − (Profits)/losses on disposals | (298) | 127 | 26 |
| + Share-based compensation | 284 | 198 | 150 |
| ± Other | (153) | (81) | 49 |
| **= Cash flow from operating activities** | **9,456** | **9,298** | **9,351** |
| − Income tax **paid** | (2,164) | (2,251) | (2,021) |
| **= Net cash from operating** | **7,292** | **7,047** | **7,330** |

### Investing and financing (key lines, €m)
| Line | 2017 | 2016 | 2015 |
|---|---|---|---|
| Interest received *(IFRS choice: investing)* | 154 | 105 | 119 |
| Purchase of PP&E (capex) | (1,509) | (1,804) | (1,867) |
| Acquisitions of group cos/JVs | (4,896) | (1,731) | (1,897) |
| Dividends from JVs *(IFRS choice: investing)* | 138 | 186 | 176 |
| **Net cash from investing** | **(5,879)** | **(3,188)** | **(3,539)** |
| Dividends paid on ordinary shares | (3,916) | (3,609) | (3,331) |
| Interest & preference dividends paid *(IFRS: financing)* | (470) | (472) | (579) |
| Net change in short-term borrowings | 2,695 | 258 | 245 |
| Additional financial liabilities | 8,851 | 6,761 | 7,566 |
| Repayment of financial liabilities | (2,604) | (5,213) | (6,270) |
| Repurchase of shares | (5,014) | — | — |
| **Net cash from financing** | **(1,433)** | **(3,073)** | **(3,032)** |

### Cash reconciliation (€m)
| Line | 2017 | 2016 | 2015 |
|---|---|---|---|
| Net increase from activities | (20) | 786 | 759 |
| Cash at beginning | 3,198 | 2,128 | 1,910 |
| Effect of FX | (9) | 284 | (541) |
| **Cash at end** | **3,169** | **3,198** | **2,128** |

⚠️ **FX effect is a separate reconciling line** — not operating, investing or financing.

### The indirect adjustments — know the *why* (2017) 🔴
| Adjustment | Amount | Why |
|---|---|---|
| **Taxation** added back | +1,667 | Tax **expense** ≠ cash; add back the accrual… |
| **Income tax paid** deducted | (2,164) | …then deduct **cash paid**, shown as the last operating line |
| **JV/associate income** removed | (173) | Equity-method income isn't cash; **cash dividends** from JVs (138) go to **investing** |
| **Net finance costs** removed | +877 | Moves interest out of operating (received → investing; paid → financing) |
| **D&A and impairment** added back | +1,538 | Non-cash expenses |
| **Profits on disposals** removed | (298) | A gain isn't operating cash; **proceeds** go to investing |
| **Share-based comp** added back | +284 | Paid in shares, not cash |

⚠️ **Three traps:**
1. **Tax expense (1,667) ≠ tax paid (2,164).** Paid > expense = the F3 §7 DTA signature.
2. **JV income (173) ≠ JV dividends (138)** — different numbers, different sections.
3. **Interest classification is a choice.** Under US GAAP all interest would be operating, and CFO would be **lower** (paid 470 > received 154).

### Reading the statement 🔴
| Step | Observation |
|---|---|
| 1. Bottom line | Cash **1,910 → 3,169**; largest increase in **2016** |
| 2. Primary source | **Operating** every year — mature company |
| 3. CFO vs. NI | CFO **>** net profit every year — mainly **depreciation** |
| 4. CFO vs. capex | Covered easily (2017: 7,292 vs 1,509) |
| 5. Financing | **> €3.3bn/yr dividends**; ~€500m/yr interest + preference dividends |
| 6. 2017 | **~€5bn buyback** funded alongside **increased borrowing** |

---

## 4. Direct Method under IFRS — Telefónica (§4.05)
**Exam importance: 🟡 MEDIUM-HIGH — recognizing a direct-format operating section, and the IFRS classification contrast with Unilever.**

### Exhibit 2 — Telefónica (IFRS, direct), €m
| Operating line | 2017 | 2016 | 2015 |
|---|---|---|---|
| Cash received from operations | 63,456 | 63,514 | 67,582 |
| Cash paid from operations | (46,929) | (47,384) | (50,833) |
| Net interest & financial expenses, net of dividends received *(IFRS choice: operating)* | (1,726) | (2,143) | (2,445) |
| Taxes paid | (1,005) | (649) | (689) |
| **Net cash from operating** | **13,796** | **13,338** | **13,615** |
| **Net cash from investing** | **(10,245)** | **(8,208)** | **(12,917)** |
| **Net cash from financing** | **(1,752)** | **(4,220)** | **(3,612)** |
| FX and other | (343) | 211 | (1,000) |
| **Net increase/(decrease)** | **1,456** | **1,121** | **(3,914)** |
| Cash at 31 Dec | 5,192 | 3,736 | 2,615 |

⚠️ Telefónica puts FX **inside** its net increase line; Unilever shows FX **after**. Excluding FX, 2017 net cash from the three activities = 13,796 − 10,245 − 1,752 = **1,799**.

### What makes it "direct" 🔴
- Operating **starts with cash received** — **no net income line, no add-backs**.
- **Recognition rule:** depreciation in the operating section → **indirect**; "cash received from customers" → **direct**.

### IFRS classification contrast 🔴
| | **Telefónica** | **Unilever** |
|---|---|---|
| Interest paid | **Operating** | **Financing** |
| Interest received | Operating (netted) | **Investing** |
| Dividends received | **Operating** | **Investing** |
| Method | **Direct** | **Indirect** |

Both are IFRS-compliant — comparing their CFOs without adjusting compares different things.

### Reading the statement 🟡
- Cash **6,529 → 5,192** (a decrease); biggest drop in **2015** (−3,914).
- Primary source **operations**; CFO covered capex (~€9bn) every year.
- **Largest investing use each year: PP&E and intangibles.** Acquisitions > €3bn in 2015.
- 2015: raised **€4.2bn equity** but **net debt repayments** (13,663 repaid vs 10,386 borrowed) → financing still negative.

---

## 5. Direct Method under US GAAP — Tech Data (§4.06)
**Exam importance: 🔴 HIGH — (1) US GAAP direct filers must also give the **NI → CFO reconciliation**; (2) the first live **working-capital signs**: AR ↑ and inventory ↑ subtract, AP ↑ adds.**

### Exhibit 3 — Tech Data (US GAAP, direct), $ thousands, FY ending 31 January
| Operating line | 2018 | 2017 | 2016 |
|---|---|---|---|
| Cash received from customers | 42,981,601 | 29,427,357 | 28,119,687 |
| Cash paid to vendors and employees | (41,666,356) | (28,664,222) | (27,819,886) |
| Interest paid, net *(US GAAP: operating)* | (86,544) | (22,020) | (20,264) |
| Income taxes paid | (131,632) | (84,272) | (85,645) |
| **Net cash from operating** | **1,097,069** | **656,843** | **193,892** |
| Acquisition of business | (2,249,849) | (2,916) | (27,848) |
| **Net cash used in investing** | **(2,481,786)** | **(42,251)** | **(41,800)** |
| **Net cash from (used in) financing** | **119,894** | **976,495** | **(148,247)** |

### The required reconciliation (= the indirect method) 🔴
| Line | 2018 | 2017 | 2016 |
|---|---|---|---|
| **Net income** | **116,641** | **195,095** | **265,736** |
| + Depreciation & amortization | 150,046 | 54,437 | 57,253 |
| + Provision for losses on receivables | 21,022 | 5,026 | 6,061 |
| + Stock-based compensation | 29,381 | 13,947 | 14,890 |
| + Accretion of debt discount | 3,326 | 835 | 839 |
| ± Deferred income taxes | (4,261) | (11,002) | 2,387 |
| − Accounts receivable (asset ↑) | (554,627) | (91,961) | (297,637) |
| − Inventories (asset ↑) | (502,352) | (20,838) | (219,482) |
| ± Prepaid & other assets | 32,963 | 66,027 | (44,384) |
| + Accounts payable (liability ↑) | 1,704,307 | 459,146 | 426,412 |
| ± Accrued & other liabilities | 100,623 | (13,869) | (18,882) |
| **= Net cash from operating** | **1,097,069** | **656,843** | **193,892** |

### The sign rules 🔴 (polarity — write these before any working-capital question)

$$
\begin{gathered}
\text{CFO} = \text{NI} \\[4pt]
+ \text{non-cash expenses and losses} \\[4pt]
- \text{non-cash gains} \\[4pt]
- \Delta\,\text{operating assets} \\[4pt] + \Delta\,\text{operating liabilities}
\end{gathered}
$$

| Balance change | Effect on CFO | Cash logic |
|---|---|---|
| **Operating asset ↑** (AR, inventory, prepaids) | **Subtract** | Cash tied up |
| **Operating asset ↓** | **Add** | Cash released |
| **Operating liability ↑** (AP, accrued) | **Add** | Expense booked, cash kept |
| **Operating liability ↓** | **Subtract** | Paid cash for an earlier expense |
| Non-cash **expense or loss** (depreciation, bad-debt provision, stock comp, loss on disposal) | **Add back** | Lowered NI, no cash left |
| Non-cash **gain** | **Subtract** | Raised NI, no cash came in |

**Memory hook: assets opposite, liabilities same.**

⚠️ **Bad-debt provision is added back** — a non-cash expense (F3 §3).

### Reading the statement 🟡
- Cash $543m → $956m; biggest rise in FY2017 (operating **and** financing).
- FY2018: received **$43.0bn**, paid **$41.7bn** — both jumped because of a **major acquisition**.
- CFO **covered investing in FY2016–17 but not FY2018** ($2.25bn acquisition).
- No dividends; $147m buyback in FY2016.
- **Quality flag (my observation):** NI fell (266 → 195 → 117) while CFO rose (194 → 657 → 1,097), driven by **AP +1.7bn** — payables-driven CFO isn't sustainable.

---

## 6. Indirect Method under US GAAP — Walmart (§4.07)
**Exam importance: 🔴 HIGH — the new rule: **US GAAP indirect filers must disclose cash paid for interest and taxes**. Second sign drill, and the debt-extinguishment loss added back.**

### Exhibit 4 — Walmart (US GAAP, indirect), $m, FY ending 31 January
| Operating line | 2018 | 2017 | 2016 |
|---|---|---|---|
| **Consolidated net income** | **10,523** | **14,293** | **15,080** |
| + Depreciation and amortization | 10,529 | 10,080 | 9,454 |
| ± Deferred income taxes | (304) | 761 | (672) |
| + Loss on extinguishment of debt | 3,136 | — | — |
| ± Other operating | 1,210 | 206 | 1,410 |
| − Receivables (asset ↑) | (1,074) | (402) | (19) |
| ± Inventories | (140) | **1,021** | (703) |
| + Accounts payable (liability ↑) | 4,086 | 3,942 | 2,008 |
| + Accrued liabilities | 928 | 1,280 | 1,466 |
| ± Accrued income taxes | **(557)** | 492 | (472) |
| **= Net cash from operating** | **28,337** | **31,673** | **27,552** |
| Capex | (10,051) | (10,619) | (11,477) |
| **Net cash used in investing** | **(9,060)** | **(13,987)** | **(10,675)** |
| Payments of long-term debt | (13,061) | (2,055) | (4,432) |
| Debt extinguishment / prepayment cost | (3,059) | — | — |
| Dividends paid *(US GAAP: financing)* | (6,124) | (6,216) | (6,294) |
| Share repurchases | (8,296) | (8,298) | (4,112) |
| **Net cash used in financing** | **(19,875)** | **(19,072)** | **(16,285)** |
| Cash at end | 6,756 | 6,867 | 8,705 |
| *Supplemental:* income taxes paid | 6,179 | 4,507 | 8,111 |
| *Supplemental:* interest paid | 2,450 | 2,351 | 2,540 |

### The two US GAAP disclosure rules — a mirror pair 🔴 MEMORIZE
| Method | US GAAP **also** requires | Example |
|---|---|---|
| **Direct** | **Reconciliation of NI to CFO** | Tech Data |
| **Indirect** | **Cash paid for interest and income taxes** | Walmart |

**Hook:** *each method must supply what the other shows.*

### The sign drill, round two 🔴
| Line | FY | Balance moved | Effect |
|---|---|---|---|
| Receivables | 2018 | Asset ↑ | **−1,074** |
| Inventories | **2017** | Asset **↓** | **+1,021** ← a + on an asset line means it *fell* |
| Accounts payable | 2018 | Liability ↑ | **+4,086** |
| Accrued income taxes | **2018** | Liability **↓** | **−557** ← a − on a liability line means it *fell* |
| Loss on extinguishment | 2018 | Non-cash loss | **+3,136** added back |

⚠️ **Debt-extinguishment pair — Example 1 from the other side.** The 3,136 loss is **added back** in operating; the **cash** paid to retire the debt sits in **financing**.

### Reading the statement 🟡
- Cash **$9.1bn → $6.8bn**; CFO steady (~$28–32bn), **far above capex** every year.
- Large **dividends + buybacks** (~$14bn/yr); repaid debt, especially FY2018.
- Largest reconciling item: **depreciation and amortization** (~equal to NI).

### The four exhibits side by side 🔴
| | Unilever | Telefónica | Tech Data | Walmart |
|---|---|---|---|---|
| Standard | IFRS | IFRS | US GAAP | US GAAP |
| Method | **Indirect** | **Direct** | **Direct** | **Indirect** |
| Interest paid | Financing (choice) | Operating (choice) | Operating | Operating |
| Extra disclosure | Taxes paid separately | — | **NI → CFO reconciliation** | **Interest & taxes paid** |
| Cash trend | ↑ | ↓ | ↑ | ↓ |
| CFO covers capex? | Yes | Yes | Not FY2018 | Yes |

---

## 7. Quick-Reference Sheet

```
── INTRO ──
Cash flow = CASH; income stmt = ACCRUAL
Reconciles NI ↔ CFO and beginning ↔ ending cash
Sustainable: operations (indefinite) > asset sales
  (while assets last) > debt (while lenders lend)

── CLASSIFICATION ──
O = make & sell + residual; trading securities; A/P
I = long-term assets + other cos' debt/equity
    (not trading)
F = raise/return capital; short-term notes too
NOT CASH: gains, losses, equity income, dep'n
Routine: STRIKE non-cash → label O/I/F → sum
Ex1: −200 + 120 = −80 (not −150)

GRID           IFRS          US GAAP
Int rec'd      O or I        O
Int paid       O or F        O
Div rec'd      O or I        O
Div paid       O or F        F
Non-cash deals: excluded, DISCLOSED

── METHODS ──
Same CFO; only operating FORMAT differs
Direct: receipts/payments; analysts like it
Indirect: NI + adjustments; preparers like it
Both standards ENCOURAGE direct, PERMIT either
US GAAP direct → add NI→CFO reconciliation
US GAAP indirect → disclose interest & tax paid

── SIGNS: ASSETS OPPOSITE, LIABILITIES SAME ──
Op asset ↑ → −     Op asset ↓ → +
Op liab ↑ → +      Op liab ↓ → −
Non-cash expense/LOSS → add back
Non-cash GAIN → subtract
```

---

## 8. How This Module Shows Up on the Exam

| Topic | Style | Likelihood |
|---|---|---|
| Classify an item O / I / F | Concept | 🔴 Very high |
| Net cash from investing/financing with non-cash items planted | **Calc** | 🔴 Very high ⭐ *your miss (Ex1)* |
| IFRS vs US GAAP interest/dividend grid | Concept | 🔴 Very high |
| Working-capital signs in NI → CFO | **Calc** | 🔴 Very high |
| Non-cash expenses/losses added back; gains subtracted | **Calc**/concept | 🔴 Very high |
| Trading securities, A/P, short-term notes | Concept | 🔴 High |
| Same CFO under both methods | Concept | 🔴 High |
| Standards encourage direct, permit either; most use indirect | Concept | 🔴 High |
| US GAAP mirror disclosure rules | Concept | 🔴 High |
| Non-cash transactions excluded but disclosed | Concept | 🔴 High |
| Direct vs indirect arguments and preferences | Concept | 🔴 High |
| Reading a statement | Concept | 🔴 High |
| Sustainability of cash sources | Concept | 🟡 Medium-High |
| Tax expense vs tax paid; JV income vs dividends | Concept | 🟡 Medium-High |
| IFRS choices affect CFO comparisons | Concept | 🟡 Medium |
| Recognize direct vs indirect format | Concept | 🟡 Medium |
| FX effect is a reconciling line | Concept | 🟡 Medium |
| CFA Institute advocacy; exhibit figures | Reference | 🟢 Low |

**⭐ Flagged weak spots:**
- **Example 1** — subtracted the loss on sale → (150,000) instead of (80,000). **Strike non-cash lines first.**
- **Example 2** — correct, including the half-answer distractor.
- **Curriculum examples: 1 / 2.**

**⭐ Carry-over watch:**
- **Polarity:** assets opposite, liabilities same. Read the printed sign, then infer the movement.
- **Wrong quantity:** gains/losses, equity income and tax *expense* are not cash; proceeds, dividends *received* and tax *paid* are.
- **Truncated rule:** the 4 × 2 grid; the two US GAAP disclosure rules; the three adjustment types.
- **Category (F3 lesson):** before matching, put each item in its bucket — cash or non-cash, then O / I / F.
- **Stem negation:** "not / except" stems — T/F every option.

**Study priority order:**
1. Classification + "strike non-cash first"
2. Interest/dividend grid
3. Working-capital signs + add-backs
4. Direct vs indirect; standards; US GAAP disclosures
5. Non-cash transactions
6. Reading a statement
7. Boundary cases (trading securities, trade credit, short-term notes)
8. Unilever tax/JV adjustments; FX line
9. Sustainability; liquidity/solvency/flexibility
10. Exhibit specifics

## 9. Curriculum examples — log (paraphrased in the Study Hub as `fsa-m4-p01…`)

| # | Topic | Your answer | Correct | Pattern |
|---|---|---|---|---|
| Ex 1 | Net cash from investing | (150,000) | **(80,000)** | asked-quantity (loss treated as cash) |
| Ex 2 | Operating vs financing (note + inventory) | operating −30,000 | ✅ | — |

**Official practice set (`fsa-m4-p03…`):**

| # | Topic | Your answer | Correct | Pattern |
|---|---|---|---|---|
| Q1 | The three activities | inflows / outflows / net | **operating / investing / financing** | definition (direction ≠ classification) |
| Q2 | Sale of a building | operating | **investing** | confusion (long-term asset → investing) |
| Q3 | Trading vs investment securities | only trading is operating | ✅ | — |
| Q4 | Bond conversion | financing out + in | **supplementary disclosure** | off-model (no cash moved) |

**Running tally: 1 / 4.**

**Tally: 1 / 2.** Practice questions Q1–Q46 → Study Hub (Financial Statement Analysis → M4, `fsa-m4-q01…`).

> **Note status: COMPLETE** — §4.01 through §4.07.
