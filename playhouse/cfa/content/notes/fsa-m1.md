# CFA Level I — Financial Statement Analysis
# Module 1: Introduction to Financial Reporting
## Complete — §1.01 Introduction through §1.09 Changes in Equity & Cash Flows (Deduplicated vs. Economics Modules 1–7)

> **Big picture:** Financial Statement Analysis is **~11–14% of the Level I exam** — roughly double Economics, and tied with Ethics and Quant for the largest share. This first module has two halves. The **framework half** (§1–4): who sets and enforces standards, the IFRS Conceptual Framework's objective and qualitative characteristics, the five elements, the two assumptions, recognition, and the six measurement bases. The **statements half** (§5–8): the complete set, then each statement read through Volkswagen's (IFRS) and Walmart's (US GAAP) real reports — the accounting equation, the income-statement subtotal chain, EPS, comprehensive income and OCI, the equity roll-forward, and the three cash-flow categories with the indirect method. The exam tests the framework half with **classification** items (truncated-rule territory) and the statements half with **small calculations** (equation, EPS, roll-forward, cash reconciliation) plus **classify-this-transaction** items. Every list in this note is built as a complete object; every exhibit figure has been reconciled by computation.

**Importance legend:**
- 🔴 **High** — appears on nearly every exam
- 🟡 **Medium** — regularly tested, usually conceptual
- 🟢 **Low** — occasionally tested, know the definition

**Deduplication cross-references used below:**
| Marker | Points to |
|---|---|
| 🔗 E1–E7 | Economics Module notes 1–7 |
| 🔗 QM | Quant Methods notes |

**Already covered in Economics (study it there, not here):**
| Topic | Where it lives |
|---|---|
| Accounting profit vs. economic profit; normal profit inside economic costs | E2 §9d |
| GDP accounting conventions (income vs. expenditure approaches) — the macro analogue of the statements | E3 §2–6 |
| Inflation's effect on nominal vs. real figures; price indexes | E3 §5, E4 §5 |
| Cyclical vs. defensive companies; sector behavior through the cycle | E4 §1, E3 §14 |

---

## 0. Introduction — Framing Only
**Exam importance: 🟢 Low (no direct questions), but the two sentences below are the reading's thesis**

### What financial reporting standards do 🟡
- Provide **principles for preparing financial reports** and determine **the types and amounts of information** that must be given to users — **investors and creditors** are the named users — so they can make informed decisions.
- **The analyst's reason to care (quotable):** understanding the **underlying framework** is *broader than knowing specific rules*. It lets an analyst assess the **valuation implications** of statement elements and transactions — **including transactions the standards don't specifically address** (new developments). The framework is what you reason from when there's no rule.

### Roadmap of the reading
| Coming section | What it covers |
|---|---|
| Objective of financial reporting | Why statements exist; their role in security analysis and valuation |
| Standard-setting bodies and regulatory authorities | Roles of each, and several specific bodies (IASB, FASB, IOSCO, SEC, ESMA…) |
| The IFRS reporting framework | The Conceptual Framework: objective, qualitative characteristics, constraints |
| Elements of financial statements | Assets, liabilities, equity, income, expenses — definitions and recognition |
| General requirements for financial statements | The required statements and the presentation principles under IAS 1 |

⚠️ **The distinction the first section will press on:** **standard-setting bodies** (private-sector, write the standards — IASB, FASB) vs. **regulatory authorities** (government, legal power to enforce — SEC, ESMA). Keep them in separate columns from the start; the exam swaps their roles.

---

## 1. The Objective of Financial Reporting (§1.02)
**Exam importance: 🔴 HIGH — the Conceptual Framework's objective statement is quoted nearly verbatim on the exam; "not designed solely for valuation" and "rules-based vs. principles-based" are reliable one-liners**

### What financial reports are 🟡
- **Financial reports** = the **financial statements + supplemental disclosures** needed to assess a company's **financial position** (balance sheet view) and **periodic financial performance** (income/cash flow view).

### The objective — the IASB's Conceptual Framework 🔴 MEMORIZE THE SHAPE
> *The objective of financial reporting is to provide **financial information that is useful to users in making decisions about providing resources to the reporting entity**, where those decisions relate to **equity and debt instruments, or loans or other forms of credit**, and in **influencing management's actions** that affect the use of the entity's economic resources.*

Three parts to reconstruct:
| Part | Content |
|---|---|
| **What** | Financial information **useful for decisions** |
| **Which decisions** | **Providing resources** to the entity — buying/holding **equity and debt**, extending **loans and credit** |
| **And** | **Influencing management's actions** affecting the use of the entity's resources (the stewardship angle) |

⚠️ **Distractor shape:** an option that narrows the objective to "determining the value of the company" or "assessing tax liability" or "serving regulators." The stated users are **resource providers** (investors, creditors, lenders), and the stated purpose is *decision-usefulness*, not valuation per se.

### Why a framework comes first 🟡
- A fully articulated framework is "**an essential first step** to guide the development of a set of standards."
- **Before IFRS:** each country's standard-setter worked **independently** → a wide range of standards: some **comprehensive and complex (rules-based)**, others **more general (principles-based)**.
- **What forced convergence:** **globalization of capital flows** + **accounting scandals** → demand for uniform, high-quality global standards → **stronger coordination among the major standard-setters**. (🔗 E6 §2: trade and capital flows went global; the reporting rules followed.)

| Standard type | Character |
|---|---|
| **Rules-based** | Comprehensive, complex, specific |
| **Principles-based** | More general; relies on judgment |

### Why standards are hard — judgment is unavoidable 🔴
```
Economic activity is complex and dynamic
  → transactions and financial positions are complex
  → uncertainty about transactions requires ACCRUALS and ESTIMATES
  → accruals and estimates require JUDGMENT
  → judgment varies from preparer to preparer
  → standards exist to achieve CONSISTENCY in those judgments
```
- **The honest conclusion (quotable):** even with standards, **"there usually will be no single correct answer"** to how economic activity should be reflected. Standards **limit the range of acceptable answers** to increase consistency — they do not eliminate judgment.
- ⚠️ An option claiming standards "ensure a single correct presentation" or "eliminate the need for judgment" is wrong.

### IASB and FASB — similar frameworks 🟡
- The **IASB** (international) and the **US-based FASB** have developed **similar** frameworks specifying the **overall objective** and the **qualities of information** to be provided. (Not identical — later sections and readings flag the differences.)

### "Not designed solely with asset valuation in mind" 🔴
- Financial reports serve **many users**: **investors, creditors, employees, customers, and others**.
- → Reports are **NOT designed solely for asset valuation**. But they provide **important inputs** into valuing a company or its securities.
- ⚠️ Classic distractor: "financial statements are prepared primarily to value the company's securities." The curriculum's position is *inputs to valuation, not valuation itself*.

### What the analyst gets from understanding the framework 🔴
Understanding **how and when judgments, estimates, and management policy decisions affect the reported numbers** enables an analyst to:
1. **Evaluate** the information reported
2. **Use it appropriately** when assessing financial performance
3. Assess the **financial impact of business decisions**
4. Make **comparisons across entities**

(These four are the rest of the FSA topic in miniature — comparability across entities is the reason the later readings spend so long on IFRS-vs-US GAAP adjustments.)

---

## 2. Standard-Setting Bodies vs. Regulatory Authorities; Accounting Standards Boards (§1.03)
**Exam importance: 🔴 VERY HIGH — "who sets vs. who enforces" is one of the most reliable questions in the reading, and it's a role-swap trap by construction. The IASB/FASB structural facts (who oversees whom, where standards are published) are 🟡 but tested as one-word swaps.**

### The master distinction 🔴 — two columns, never mixed
| | **Standard-setting bodies** | **Regulatory authorities** |
|---|---|---|
| Examples | **IASB, FASB** | **SEC** (US), **Accounting and Corporate Regulatory Authority** (Singapore), **Securities and Exchange Commission of Brazil** |
| Nature | **Private-sector, self-regulated** organizations | **Government** bodies |
| Members | Experienced **accountants, auditors, users of statements, academics** | — |
| What they do | **Set** the standards | **Recognize and enforce** the standards; **legal authority** to require reporting and to **exert other controls** over capital-market participants in their jurisdiction |
| Source of authority | **None on their own** — only through recognition by regulators | **Legal** |

**The two sentences to quote:**
1. *"Generally, standard-setting bodies set the standards and regulatory authorities recognise and enforce the standards."*
2. *"Without the recognition of the standards by the regulatory authorities, the private sector standard-setting bodies would have no authority."*

⚠️ **The override clause (testable):** regulators **retain the legal authority to establish financial reporting standards** in their jurisdiction and **can overrule** the private-sector standard-setters. The SEC has this power over the FASB — it has **rarely** used it, but it exists. An option saying "the FASB has final authority over US GAAP" is wrong; the SEC does.

### Why IASB and FASB dominate 🟢
Standards boards exist in virtually every national market, but these two are the most influential because **the vast majority of issuers in global markets report under IFRS or US GAAP.**

### The IASB 🟡 — structure, in layers
```
MONITORING BOARD (public authorities)
  members: European Commission, IOSCO, Japan FSA, US SEC;
  Basel Committee chair as observer
        ↓ holds accountable
IFRS FOUNDATION TRUSTEES (independent, not-for-profit, private sector)
  diverse geographic/professional backgrounds; act in the public interest
        ↓ appoint
IASB MEMBERS
  appointed on professional competence + practical experience;
  deliberate, develop, and issue IFRS
        ← advised by ADVISORY BODIES representing affected organizations
```

**IFRS Foundation's principal objectives 🔴 (a three-item list — memorize whole):**
1. Develop and promote the use and adoption of **a single set of high-quality financial standards**
2. Ensure the standards produce **transparent, comparable, decision-useful** information, taking into account **entities of a range of sizes and types in diverse economic settings**
3. Promote the **convergence of national accounting standards and IFRS**

The Trustees are also responsible for ensuring the IASB **acts, and is perceived to act, independently** and in users' best interests.

**The IASB's standard-setting process 🟡 (four steps, in order):**
1. Issue identified as a **priority** → placed on the **agenda**
2. Consider the issue, possibly **soliciting advice** (incl. national standard-setters)
3. Publish an **exposure draft** for **public comment**
4. Review comments → issue a **new or revised standard**

⚠️ The closing clause: *these standards are authoritative **to the extent that they are recognised and adopted by regulatory authorities**.* Same dependency as the master distinction.

### The FASB 🟡 — the US mirror image
| Feature | IASB | FASB |
|---|---|---|
| Overseen by | **IFRS Foundation** (Trustees) | **Financial Accounting Foundation** — oversees, administers, finances; ensures independence; appoints members |
| Since | — | Predecessors issuing US standards **since the 1930s** |
| Process | Four steps above | **Similar** steps; thorough, independent, seeks stakeholder input |
| Output published in | IFRS | **FASB Accounting Standards Codification** — organized **by topic**; **the source of authoritative US GAAP** for **non-governmental** entities |

### The SEC's role over US GAAP 🔴
- US GAAP as established by the FASB is **officially recognized as authoritative by the SEC** — but **the SEC retains the authority to establish accounting standards and reporting requirements.**
- The SEC has **rarely overruled** the FASB, but it **does issue authoritative guidance**, including **Staff Accounting Bulletins** (the SEC's views on accounting-related disclosure practices; on the SEC website).
- **Certain portions — but not all — of SEC regulations, releases, interpretations, and guidance are included for reference in the FASB Codification.** ⚠️ "All SEC guidance is in the Codification" is the distractor.

---

## 3. The IFRS Conceptual Framework: Qualitative Characteristics and Constraints (§1.04)
**Exam importance: 🔴 VERY HIGH — the 2 fundamental + 4 enhancing characteristics are the single most tested list in this reading. The exam gives a description and asks which characteristic it is, or asks which group a characteristic belongs to. Pure truncated-rule territory: memorize the 2 + 4 split, each one's defining phrase, and the sub-components of the two fundamentals.**

### What the Conceptual Framework is for 🟡
Sets out the concepts underlying preparation and presentation of statements for **external users**. Designed to assist **four groups** (a complete list):
1. **Standard setters** — developing and reviewing standards
2. **Preparers** — applying standards **and handling issues not specifically covered** by existing standards (🔗 §0's thesis)
3. **Auditors** — forming an opinion
4. **Users** — interpreting statement information

**The central objective** (🔗 §1): useful information for **current and potential economic resource providers** — *all other aspects of the framework flow from that objective.*

### Users and their common needs 🟡
- **Primary users:** **investors, lenders, and other creditors.** Others may find the information useful too.
- Needs differ by user, but **three are common to all** — information about:
  | Need | Content | Which statement answers it |
  |---|---|---|
  | **a) Financial position** | Resources and financial obligations | Balance sheet |
  | **b) Financial performance** | How and why position changed — useful for evaluating future changes | Income statement |
  | **c) Cash position** | How cash was obtained (sales, borrowing…) and used (expenses, investment, dividends…) | Cash flow statement |
- Assessing **future net cash inflows** needs information on **economic resources (assets)**, **claims against them (liabilities and equity)**, and **how well management and the board used the resources** (stewardship). Reports are useful in **estimating economic value** — the input-to-valuation point again.

### The two FUNDAMENTAL characteristics 🔴 — with their sub-parts
| Characteristic | Defining phrase | Sub-components |
|---|---|---|
| **1. Relevance** | Would **potentially affect or make a difference in users' decisions** | **Predictive value** (useful for forecasts) and/or **confirmatory value** (useful to evaluate past decisions/forecasts). **Materiality** is discussed *within* relevance: information is material if its **omission or misstatement could influence users' decisions**; a function of the **nature and/or magnitude** of the item |
| **2. Faithful representation** | Faithfully represents the economic phenomenon it purports to represent | Ideally **complete** (all information needed to understand the phenomenon), **neutral** (selected and presented **without bias**), and **free from error** (no errors of commission or omission; an appropriate process chosen and followed). **Sometimes called "reliability"** |

**Memory hooks:** Relevance = **P-C** (predictive, confirmatory) + materiality inside it. Faithful representation = **C-N-F** (complete, neutral, free from error).
⚠️ **Traps:** (1) materiality is *part of relevance*, not a separate characteristic; (2) "reliability" is the old name for *faithful representation*; (3) "free from error" does **not** mean perfectly accurate — it means no errors in the *description* and in the *process*; estimates are fine.

### The four ENHANCING characteristics 🔴
| Characteristic | Defining phrase |
|---|---|
| **1. Comparability** | Lets users "**identify and understand similarities and differences** of items" — **consistent over time and across entities** |
| **2. Verifiability** | **Different knowledgeable and independent observers would agree** that the information faithfully represents what it purports to |
| **3. Timeliness** | Available to decision makers **before they make a decision** |
| **4. Understandability** | **Clear and concise** presentation; prepared for users with **reasonable knowledge of business** who are **willing to study with diligence**. ⚠️ Useful information should **NOT be excluded just because it's difficult** — users may need to seek help with complex phenomena |

**Memory hook: C-V-T-U** ("see-view-the-user"). Fundamental vs. enhancing is the first thing the exam asks — **relevance and faithful representation are fundamental; the other four enhance.**

> ### ⭐ YOU MISSED OFFICIAL Q2 HERE — "NOT an enhancing characteristic"
> Options: accuracy / timeliness / comparability. You picked **timeliness**; correct is **accuracy**.
> Timeliness and comparability are both on the C-V-T-U list — **true** enhancing characteristics, so in a NOT question they are the distractors. "Accuracy" isn't a characteristic at all: the framework's word is **faithful representation** (fundamental), and its "free from error" sub-part explicitly does **not** mean perfectly accurate. Two traps stacked: the **negation** (fourth NOT/least miss across subjects) and an **off-model** word that sounds like it belongs. **Routine:** write C-V-T-U, tick each option against it, pick the one that isn't there.

### Constraints and limitations 🔴
| Item | Statement |
|---|---|
| **Trade-offs among enhancing characteristics** | **No set order of priority** — any enhancing characteristic may take priority over the others; the aim is an **appropriate balance** |
| **The pervasive constraint: COST** | Cost of providing and using information. **Benefits should exceed costs** — again, a balance |
| **Limitation: non-quantifiable information is omitted** | Workforce **creativity, innovation, competence**; **customer loyalty**; **corporate culture**; **environmental responsibility** — not directly in the statements. But *to the extent these produce superior financial performance*, the reports reflect the results |

⚠️ "Cost" is the one **pervasive constraint** named — an option offering "materiality" or "timeliness" as the constraint is wrong.

> ### ⭐ YOU MISSED OFFICIAL Q3 HERE — "NOT a constraint"
> Options: understandability / benefit versus cost / balancing of qualitative characteristics. You picked **balancing**; correct is **understandability**.
> Balancing (trade-offs among characteristics) and benefit-vs-cost are **both on the constraints list** — true, so they're the distractors in a NOT question. Understandability belongs to a different list entirely: it's one of the four **enhancing characteristics**. **Second NOT miss in a row** — and the same shape as Q2: the correct answer was the option from the *wrong category*. **Routine for this reading:** before T/F, sort each option into its box — *characteristic (fundamental / enhancing)*, *constraint*, *assumption*, *element*, *measurement basis*. In a NOT question the answer is usually the one in the wrong box.

### ⭐ Example 1 — balancing characteristics (the bad-debt case) 🔴
Recording a credit sale requires simultaneously estimating **bad-debt expense**:
- Including it → **faithful representation** ✓ (represents the economic event) + **relevance** ✓ (net profit for the period) + **timely** ✓ + **understandable** ✓
- But bad debts aren't known until later → the estimate **sacrifices verifiability** ✗
> **Lesson (quotable):** *it is not always possible to simultaneously fulfill all qualitative characteristics.* Expect a stem describing an estimate and asking which characteristic is sacrificed — **verifiability**.

---

## 4. The Elements of Financial Statements (§1.05)
**Exam importance: 🔴 VERY HIGH — the five element definitions, the two underlying assumptions, and the six measurement bases are all reliable question sources, and all three are lists. The measurement-bases table is the most "one-word-swap" item in the module: six bases, each with an asset version and a liability version.**

### The five elements 🔴 — grouped by what they measure
Statements group transactions into **elements** by economic characteristic.

**Position elements (balance sheet) — three:**
| Element | Definition (Conceptual Framework wording) | Plain reading |
|---|---|---|
| **Assets** | A **present economic resource controlled** by the entity **as a result of past events**. An economic resource = a **right with the potential to produce economic benefits** | What the company **owns** (inventory, equipment) |
| **Liabilities** | A **present obligation** to **transfer an economic resource** as a result of past events. An obligation = a duty the entity has **no practical ability to avoid** | What the company **owes** (bank borrowings) |
| **Equity** | **Assets less liabilities** — the **residual interest** in the assets after subtracting liabilities | What's left for owners |

**Performance elements (income statement) — two:**
| Element | Definition | Includes |
|---|---|---|
| **Income** | **Increases in assets, or decreases in liabilities**, that result in **increases in equity** — **other than contributions from equity holders** | **Revenues** (ordinary operating activities — sales, services) **+ gains** (ordinary *or* other activities — sale of surplus equipment) |
| **Expenses** | **Decreases in assets, or increases in liabilities**, that result in **decreases in equity** — **other than distributions to equity holders** | COGS (incl. wages, rent), SG&A, **+ losses** (asset sold below carrying value, impairments) |

⚠️ **Three definitional traps:**
1. **Income ≠ revenue.** Income is the broader element; **revenue + gains = income**. Likewise **expenses include losses**.
2. **The exclusion clauses matter.** A share issue raises assets and equity but is **not income** (contribution from owners); a dividend lowers them but is **not an expense** (distribution to owners). Distractors drop these clauses.
3. **"Past events" and "present"** appear in both the asset and liability definitions — a *future* commitment with no past event is not yet a liability.

### The two underlying assumptions 🔴
| Assumption | Statement | Illustration |
|---|---|---|
| **Accrual accounting** | Transactions reflected **in the period they occur, not when cash moves**. Revenue recognized **when earned — when performance obligations are satisfied** — regardless of whether cash came before or after delivery | Ensures **related revenues and expenses land in the same period** → a **more meaningful net income** |
| **Going concern** | The company **will continue in business for the foreseeable future** | Inventory valued as sold over a **normal period** vs. forced sale in a day — very different numbers. An entity intending to **liquidate or materially curtail** needs **different information** for fair presentation |

These two assumptions **determine how elements are recognized and measured** — they sit underneath the next two subsections.

> ### ⭐ YOU MISSED OFFICIAL Q4 HERE — the two assumptions swapped
> *"Continue to operate for the foreseeable future"* — you picked **accrual basis**; correct is **going concern**. Anchor each to its one keyword: **accrual = TIMING** (period it happens, not when cash moves); **going concern = CONTINUITY** (foreseeable future; liquidation needs different numbers). The stem's keyword was *continue* → continuity → going concern.
>
> **And official Q5, the next question — the mirror image:** *"recognized when they occur, not when the cash flows occur"* → **accrual basis**; you picked **relevance**. Relevance isn't an assumption at all — it's a fundamental *characteristic*. The stem said **"assumption"**, so the category sort leaves only two candidates (accrual, going concern), and the keyword *when … not when cash* = **timing** = accrual. Q4 + Q5 together: the two assumptions are not yet stored as a pair. **Flashcard f03, daily.**

### Recognition 🔴
- **Recognition** = an item is **included in the balance sheet or income statement**.
- **Two tests, both required:** (1) meets the **definition of an element**, and (2) satisfies the **recognition criteria**.
- The criteria: recognition is appropriate if it yields **both relevant information AND a faithful representation** of the item — because the aim is information useful to investors, lenders, and other creditors. (🔗 §3: the two fundamental characteristics, now as a recognition test.)

### Measurement — the six bases 🔴 MEMORIZE AS A TABLE
**Measurement** = determining the **monetary amount** at which elements are recognized and carried. The bases are used **to different degrees and in combination**.

| Basis | For ASSETS | For LIABILITIES |
|---|---|---|
| **1. Historical cost** | Cash (or equivalents) **paid to purchase**, **including acquisition/preparation costs** (transport, sales tax). If not bought for cash → **fair value of what was given** | **Proceeds received** in exchange for the obligation |
| **2. Amortised cost** | Historical cost **adjusted for amortisation, depreciation, or depletion and/or impairment** | — |
| **3. Current cost** | Cash that would be paid to **buy the same or equivalent asset today** = **replacement cost** | **Undiscounted** cash required to **settle the obligation today** |
| **4. Realizable (settlement) value** | Cash obtainable by **selling the asset in an orderly disposal** | **Settlement value** = **undiscounted** cash expected to be paid to satisfy the liability **in the normal course of business** |
| **5. Present value (PV)** | **NPV of future expected cash inflows** the asset will generate in the normal course, **discounted** at an appropriate rate | **PV of future net cash outflows** required to settle, **discounted** |
| **6. Fair value** | An **exit price**: the price **received to sell an asset** in an **orderly transaction between market participants at the measurement date** | The price **paid to transfer a liability**, same conditions. May use **market measures or present-value measures** depending on information available |

⚠️ **The swap traps, in order of frequency:**
1. **Current cost vs. realizable value:** current cost = what you'd pay to **buy** (entry side); realizable value = what you'd get to **sell** (exit side). Both are "today" values — the direction is the discriminator.
2. **Discounted vs. undiscounted:** current cost and settlement value are **undiscounted**; present value is **discounted**. Only PV discounts.
3. **Fair value is an EXIT price** (sell / transfer), not an entry price — and it's between **market participants** at the **measurement date**.
4. **Historical cost includes acquisition costs** (transport, tax) — not just the invoice price.
5. **Amortised cost** is the only basis defined as *historical cost adjusted* — it has no separate liability version in the list.

---

## 5. Major Financial Statements (§1.06)
**Exam importance: 🔴 HIGH — "which statements make up a complete set" and "point in time vs. over a period" are reliable items; the auditor's-opinion scope and "consolidated basis" are one-word-swap items. This section opens the statement-by-statement material that the rest of the module (and the next readings) will develop.**

### Where an analyst's information comes from 🟡
| Source | Examples |
|---|---|
| **Outside the company** | Economic statistics, industry reports, trade publications, competitor databases |
| **The company itself** | **Website, financial reports, press releases, investor conference calls, webcasts** |

The mix depends on the decision being made, but typically covers **economy, industry, company, and comparable peers**. (🔗 E6 §0: the top-down country/industry/company framing from Economics.)

### Financial reports vs. financial statements 🟡
- Reports are prepared at **regular intervals** — annually, semiannually, and/or quarterly, **depending on regulatory requirements**.
- **Financial reports = financial statements + supplemental disclosures.**
- **Financial statements** = the output of an **accounting process** that records economic transactions under the applicable standards; they summarize that information **mainly for users outside the company** (investors, creditors, analysts) — **insiders already have direct access** to the underlying data.

### The audit 🔴
- Statements of **public companies and large privately owned companies** are typically **audited by independent public accountants**.
- The auditor's **opinion**: whether the statements **present fairly** the company's **performance and financial position**, **in accordance with a specified, applicable set of accounting standards**.
- ⚠️ **Scope trap:** the opinion is about *fair presentation under the standards* — not a guarantee of accuracy, not a valuation, not an endorsement of the company. An option saying the auditor "certifies the statements are free of error" or "attests to the company's value" is wrong.

### The complete set of financial statements 🔴 MEMORIZE THE LIST
| Statement | Also called | What it shows | Time dimension |
|---|---|---|---|
| **1. Statement of financial position** | **Balance sheet** | Financial position | **A point in time** |
| **2. Statement of comprehensive income** | Either a **single** statement, or an **income statement + a separate statement of comprehensive income** | Performance | **Over a period** |
| **3. Statement of changes in equity** | — | Additional information on **changes in financial position** | **Over a period** |
| **4. Statement of cash flows** | — | A different aspect of performance | **Over a period** |
| **+ Notes (footnotes)** | — | **"An integral part"** of a complete set | — |

⚠️ **Three traps:**
1. **The notes are part of the complete set** — not optional supplements. An option listing "four statements" without notes is incomplete by the curriculum's wording.
2. **Point in time vs. period:** only the **balance sheet** is a snapshot; the other three cover a period. Distractors describe the income statement as "at a point in time."
3. **Comprehensive income can be one statement or two** — a company presenting an income statement *and* a statement of comprehensive income is still compliant.

### Consolidated basis 🔴
Statements are reported on a **consolidated basis** — they include the **account balances of subsidiary companies under the control of the parent (reporting) company**. ⚠️ "Under the control of" is the operative phrase; the consolidation reading later will define control.

### Supplementary information in the financial report 🟡
In many jurisdictions, some or all of this is **mandated by regulators or standards boards**:
| Item | Content |
|---|---|
| **Letter from the chairman** | — |
| **Management discussion and analysis (MD&A)** | Management's report **discussing the results** |
| **External auditor's report** | Assurance that the statements **comply with applicable standards** AND that **internal controls over financial reporting are functioning** |
| **Governance report** | Structure of the **board of directors** |
| **Corporate responsibility report** | — |

> **Analyst instruction (quotable):** *the analyst should read and assess this additional information along with the financial statements.* ⚠️ Note the auditor's report has **two** assurance components — standards compliance **and** internal controls. An option giving only one is the truncated-rule distractor.

---

## 6. Balance Sheet (Statement of Financial Position) (§1.07)
**Exam importance: 🔴 VERY HIGH — the accounting equation is the foundation of every later balance-sheet calculation; "book value = owners' equity," the IFRS current/non-current requirement, and the liquidity-ordering difference (IFRS tradition vs. US practice) are reliable concept items. The two exhibits are the exam's model for "read a real balance sheet" questions.**

### Names and definition 🔴
- **Balance sheet** = **statement of financial position** = **statement of financial condition**. Three names, one statement — all three appear as options.
- Presents financial position by disclosing **resources controlled (assets)** and **obligations to lenders and other creditors (liabilities)** **at a specific point in time**. (🔗 §5: the only point-in-time statement.)

### Owners' equity 🔴
- **Owners' equity** = **net assets** = **assets − liabilities** = the owners' **residual interest / residual claim** on the assets after liabilities.
- **Also called the "book value" of a company.** ⚠️ Book value = total equity — a one-word-swap item (not total assets, not market value).
- Name varies by entity form: **partners' capital**, **shareholders' equity**, **shareholders' funds**.

### The accounting equation 🔴 FORMULA
```
Assets  =  Liabilities  +  Owners' equity          (the balance sheet equation)

rearranged:
Assets  −  Liabilities  =  Owners' equity          (emphasizes the RESIDUAL claim)
```
Total assets must **equal — balance with** — the combined total of liabilities and equity. Any one of the three can be solved from the other two.

### Exhibit 1 — Volkswagen (IFRS, 31 Dec 2017) 🔴 read it the way the exam does
```
Non-current assets    €262 bn
Current assets        €160 bn
Total assets          €422 bn

Equity                €109 bn
Non-current liabilities €153 bn  }  Total liabilities = 153 + 160 = €313 bn
Current liabilities   €160 bn    }  (VW does NOT report a liabilities subtotal — compute it)

Check:  422  =  313 + 109  ✓
```
⚠️ **Two reading traps the curriculum plants:**
1. **Column order:** VW puts the **most recent year on the LEFT**. "Common, but the ordering may be reversed" — always read the column headers before pulling a number.
2. **No total-liabilities line:** IFRS presenters often give only the current and non-current subtotals. Add them.

**Three questions the balance sheet answers (quotable):**
| Question | Concept |
|---|---|
| Has **liquidity** improved? | Ability to meet **short-term** obligations |
| Is the company **solvent**? | Sufficient resources to cover **its obligations** (longer-term) |
| Position **relative to industry peers**? | Comparability |

### IFRS presentation requirements vs. tradition 🔴
| What IFRS requires | What IFRS does NOT prescribe |
|---|---|
| **Current and non-current assets**, and **current and non-current liabilities**, shown as **separate classifications** | A particular **ordering or format** — order is "largely a function of **tradition**" |

**Ordering conventions:**
| Convention | Order | Where |
|---|---|---|
| **Least liquid → most liquid** | Non-current assets first; **equity before liabilities**; non-current liabilities before current | **Volkswagen / Germany** (and much of Europe) |
| **Most liquid → least liquid** | **Cash first**; current before non-current; **equity after liabilities** | **United States, Australia, Canada** |

⚠️ Neither order is "required by IFRS" — an option saying IFRS mandates liquidity ordering is wrong. The requirement is the *classification*, not the *sequence*.

### Exhibit 2 — Walmart (US GAAP, 31 Jan 2018) 🔴 the contrast
```
Total assets                         $204.5 bn   (cash first: 6,756)
Total current liabilities            $78.5 bn
Long-term debt + leases + deferred   $45.2 bn    } Liabilities & other
                                                 } non-equity claims = $124 bn
Total equity                         $80.8 bn
Total liabilities and equity         $204.5 bn   ✓
```
Features worth noticing for later readings:
- **Accumulated depreciation** shown as a deduction → **net** property and equipment (107,675). The gross/net presentation returns in the long-lived-assets reading.
- **Goodwill** as a separate line (18,242).
- **Accumulated other comprehensive loss** inside equity (−10,181) — the link to the comprehensive-income statement.
- **Noncontrolling interest** inside total equity (2,953) — both VW (229) and Walmart show it: the consolidated statements include subsidiaries, and the slice not owned by the parent sits in equity. (🔗 §5 consolidated basis.)
- **"Commitments and contingencies"** as a line with no number — a disclosure placeholder, not a liability amount.
- **Fiscal year end 31 January** — not every company uses the calendar year.

### Verification (both exhibits reconcile) ✓
VW: 262,081 + 160,112 = 422,193; 152,726 + 160,389 + 109,077 = 422,192 (rounding, as the note says). Walmart: 204,522 − 80,822 = 123,700 = 78,521 + 30,045 + 6,780 + 8,354.

---

## 7. Statement of Comprehensive Income (§1.08)
**Exam importance: 🔴 VERY HIGH — the income-statement subtotal chain (gross → operating/EBIT → pre-tax → net income → attribution) is the skeleton for every profitability ratio; basic vs. diluted EPS and net income vs. comprehensive income are guaranteed definition items; the "control = >50% voting shares" and minority-interest allocation are reliable one-liners.**

### One statement or two 🔴
Comprehensive income can be presented as **(a) a single statement of comprehensive income**, or **(b) two statements: an income statement + a statement of comprehensive income that begins with profit or loss from the income statement.** (🔗 §5.)

### The income statement — definitions 🔴
- Presents **financial performance over a period**: how much **revenue and other income** was generated and the **expenses** incurred to generate it.
- Also called the **statement of operations** or the **profit and loss (P&L) statement**. Basic format: **Revenue − Expenses = Net income.**

| Term | Meaning |
|---|---|
| **Revenue** | Amounts charged for **delivery of goods or services in the ordinary activities** |
| **Other income** | **Gains or losses NOT from ordinary activities** — e.g., profit on a business disposal |
| **Expenses** | Outflows, depletions of assets, or incurrences of liabilities that **decrease equity** — cost of sales (COGS), selling and administrative, **income tax**; may include **losses** |
| **Net income** | **Revenue + other income − expenses.** The "**bottom line**." Also **net earnings, net profit, profit or loss**; if negative, **net loss** |

🔗 §4: these are the Conceptual Framework's income and expense elements applied to a statement.

### Consolidation and minority interests 🔴
- When a **parent controls a subsidiary**, it presents **consolidated** statements. **Control is presumed at more than 50% of the voting shares.**
- Each consolidated line includes the **entire amount** from the subsidiary's line (after removing **intercompany transactions**).
- If the parent owns **less than 100%**, it must allocate net income to **minority (non-controlling) interests** — the owners of the subsidiary's remaining shares. That share is shown **at the bottom** of the income statement, alongside net income attributable to the **parent's shareholders**.

⚠️ **Two traps:** (1) consolidation uses **100% of each line**, not the ownership percentage — the ownership split appears only in the *attribution* at the bottom; (2) ">50% of voting shares" is a presumption of control, not the definition of control (a later reading refines it).

### Exhibit 3 — Volkswagen 2017: the subtotal chain 🔴 reproduce it
```
Sales revenue                                  230,682
− Cost of sales                               (188,140)
= GROSS RESULT (gross profit / gross margin)     42,542
− Distribution expenses                        (22,710)
− Administrative expenses                       (8,254)
+ Other operating income                        14,500
− Other operating expenses                     (12,259)
= OPERATING RESULT (operating profit / EBIT)     13,818
+ Share of equity-accounted investments           3,482
+ Interest income                                   951
− Interest expenses                              (2,317)
− Other financial result                         (2,022)
= Financial result                                   94
= EARNINGS BEFORE TAX                            13,913
− Income tax (current −3,205; deferred +930)     (2,275)
= EARNINGS AFTER TAX (net income)                11,638
   attributable to: noncontrolling interests         10
                    hybrid capital investors        274
                    VW AG shareholders           11,354
```
(All subtotals verified; small differences are the exhibit's stated rounding.)

**Vocabulary mapping — the exam uses all of these:**
| Subtotal | VW's name | Other names |
|---|---|---|
| Revenue − COGS | Gross result | **Gross profit, gross margin** |
| After operating costs | Operating result | **Operating profit, operating income, EBIT** |
| EBIT ± financial items | Earnings before tax | Pre-tax profit |
| After tax | Earnings after tax | **Net income, net profit** |

⚠️ **Operating profit = results of usual business activities before interest and taxes** — hence **EBIT**. Share of equity-accounted investments and interest are *below* it in VW's layout.

**Two things the analyst notices (quotable):** profit rose substantially in 2017 mainly from **higher sales and lower other operating expenses** — and the **footnotes** reveal the latter was largely **€4bn less in litigation expense**. The lesson: the number on the face needs the notes to interpret.

### Earnings per share 🔴 FORMULA
```
EPS  =  Net income attributable to the class of shareholders
        ─────────────────────────────────────────────────────
        Relevant number of shares outstanding during the period

BASIC EPS:    profit attributable to COMMON shareholders
              ÷ WEIGHTED-AVERAGE common (ordinary) shares ACTUALLY outstanding

DILUTED EPS:  appropriately ADJUSTED profit attributable to common shareholders
              ÷ DILUTED SHARES = shares that would HYPOTHETICALLY be outstanding if
                potentially dilutive claims (stock OPTIONS, CONVERTIBLE BONDS) were
                exercised or converted
```
- Both basic and diluted are presented **on the face** of the income statement.
- **VW worked example (from the notes):** €11.4bn attributable to VW shareholders, of which **€6.8bn to ordinary shareholders** (the balance to preferred) ÷ **0.295bn weighted-average ordinary shares = €22.63 basic EPS**. VW also reports EPS for its preferred shares — **not required**; the requirement is for common.

⚠️ **Traps:** (1) the denominator is **weighted-average**, not year-end, shares; (2) diluted EPS adjusts **both** numerator and denominator; (3) EPS uses income attributable to the **relevant class** — VW's €22.63 is on the €6.8bn, not the €11.4bn or the €11.6bn.

### Three analyst questions on profitability 🟡
1. Is a revenue change from **units sold, prices, or both**?
2. With **multiple segments** (VW: passenger cars, light commercial vehicles, financial services…), how are each segment's revenue and profit changing?
3. How does the company compare with **industry peers**?
Sources: income statement, **notes**, and **MD&A**.

### Other comprehensive income (OCI) 🔴
- **Comprehensive income** = **all items that affect owners' equity EXCEPT transactions with shareowners.** Some items are in **net income**; the rest are in **OCI**.
- In the two-statement format, the statement of comprehensive income **starts with profit or loss** and then lists the OCI components.

```
Total comprehensive income  =  Net income  +  Other comprehensive income
VW 2017:   13,943           =   11,638     +   2,305
```

**OCI's two categories (Exhibit 4) 🔴 — the split the exam tests:**
| Category | VW 2017 | Examples |
|---|---|---|
| **Items that will NOT be reclassified to profit or loss** | 683 | **Pension plan remeasurements** (587 net of tax); share of OCI of equity-accounted investments (96) |
| **Items that MAY be reclassified subsequently to profit or loss** | 1,622 | **Exchange differences on translating foreign operations** (−2,107); **cash flow hedges** (3,982); **available-for-sale financial assets** (93); share of OCI of equity-accounted investments (−346) |
| **OCI, net of tax** | **2,305** | Each item shown before tax with its deferred-tax effect |

⚠️ **"Unrealized currency translation gains and losses"** are the curriculum's named example of an OCI item that **may be reclassified** to profit or loss later. And OCI accumulates in equity as **accumulated other comprehensive income** — the Walmart line from §6 (🔗).

> **One-liner:** *net income is what hits the P&L; comprehensive income adds the equity changes that bypass it; neither includes owner transactions.*

---

## 8. Statement of Changes in Equity and Cash Flow Statement (§1.09)
**Exam importance: 🔴 VERY HIGH — the equity roll-forward is a small guaranteed calculation; the three cash-flow categories (classify a transaction) and indirect vs. direct method are among the most reliable items in all of FSA; the IFRS-vs-US GAAP flexibility on interest/dividends is a recurring one-liner that the cash-flow reading develops.**

### Statement of changes in equity 🔴
- Also the **statement of changes in owners' equity / shareholders' equity**. Reports **changes in the owners' investment over time**.
- **Components of equity:**
  | Component | Content |
  |---|---|
  | **Paid-in capital** | Owners' contributions (VW: subscribed capital + capital reserves) |
  | **Retained earnings** | **Cumulative profits retained** in the company |
  | **Non-controlling (minority) interests** | Subsidiary equity not owned by the parent |
  | **Reserves for accumulated OCI** | May be **shown separately or inside retained earnings** — **VW includes them in retained earnings** |

**Structure — for each component:** beginning balance → increases → decreases → ending balance.
| Component | Typical increase | Typical decrease |
|---|---|---|
| **Paid-in capital** | **New share issuance** | **Repurchase** of previously issued stock |
| **Retained earnings** | **Income — both net income AND OCI** | **Dividend payment** |

### Exhibit 5 — Volkswagen 2017 roll-forward (verified) 🔴
```
Total equity, 1 Jan 2017               92,910
+ Total comprehensive income           13,943   (= 11,638 net income + 2,305 OCI)
+ Capital increases                     3,481
− Dividends                            (1,332)
+ Other changes                            75
= Total equity, 31 Dec 2017           109,077   ✓  (matches the balance sheet, §6)

Retained earnings column:  70,446 + 11,940 − 1,015 − 4 = 81,367  ✓
```
⚠️ **The calculation trap:** the roll-forward adds **total comprehensive income**, not net income alone — OCI (2,305) is part of the change in equity. An exam stem giving net income, OCI, dividends, and share issuance expects all four to enter.
```
Ending equity = Beginning + Net income + OCI + Share issuance − Dividends − Buybacks
```

### Cash flow statement — why it exists 🔴
- The income statement and balance sheet measure **performance and position**; **cash flow is vital to long-term success**. **Net income can be influenced by accrual accounting and management's policy choices** — the cash flow statement shows how the **cash balance actually changed**.
- Users evaluate **liquidity, solvency, and financial flexibility**. **Financial flexibility** = the ability to **react and adapt to financial adversity and opportunities** (definable term).

### The three categories 🔴 MEMORIZE — classify any transaction
| Category | Definition | VW 2017 |
|---|---|---|
| **Operating activities** | Cash effects of transactions involved in **determining net income** — the **day-to-day operations** | **−1,185** (a net *use* of cash) |
| **Investing activities** | **Acquisition and disposal of long-term assets** (property, equipment; also subsidiaries, equity investments) | **−16,508** |
| **Financing activities** | **Obtaining or repaying capital** used in the business — bonds issued/repaid, capital contributions, dividends paid | **+17,625** |

```
Net change in cash  =  CFO + CFI + CFF + effect of exchange rates on cash
VW 2017:   −796    =  −1,185 − 16,508 + 17,625 − 727   ✓
Cash:   18,833 (beginning)  −  796  =  18,038 (ending)
```
⚠️ **The FX line is the fourth term** — the "sum of the three categories" alone misses it. VW's −727 is the effect of exchange-rate changes on cash held in foreign currencies.

**IFRS vs. US GAAP 🔴 (one-liner now; developed in the cash-flow reading):** **IFRS permit more flexibility than US GAAP in classifying dividend and interest receipts and payments** among the three categories.

### Indirect vs. direct method 🔴
| Method | How CFO is presented | Usage |
|---|---|---|
| **Indirect** | Start with **profit (VW: profit before tax €13.9bn)**, subtract **actual income taxes paid**, then **adjust for non-cash transactions, accruals and deferrals, and investing/financing-type items** to reach cash from operations | What **almost all** companies use |
| **Direct** | Discloses **major classes of gross cash receipts and gross cash payments** — cash received from customers, cash paid to suppliers and employees | **Very few** companies |

**VW's indirect adjustments, as a pattern:** add back **depreciation, amortisation, impairment** (non-cash); remove **gains on disposals** (investing-type); adjust for **changes in working capital** — inventories (−4,198), receivables (−1,660), liabilities (+5,302), provisions (−9,443), lease assets, financial-services receivables. The working-capital builds in VW's financial-services business are what push CFO negative.

⚠️ **"Very few companies use the direct method"** — the distractor claims the opposite, or claims the direct method is required.

### What the indirect method emphasizes — the two perspectives 🔴
| Income statement | Cash flow statement |
|---|---|
| Income reported **when earned**, expenses **when incurred** — not when cash moves (🔗 §4 accrual assumption) | **Ability to generate cash from running the business** |

> **Analyst ideal (quotable):** *for an established company, the primary source of cash flow should be **operating activities**, not investing or financing.* VW 2017 — negative CFO funded by financing — is the kind of pattern that prompts the question.

---

## 9. Quick-Reference Sheet

```
── OBJECTIVE & FRAMEWORK (§1–3) ──
Objective: info USEFUL to users in DECISIONS about PROVIDING RESOURCES
  (equity, debt, loans, credit) + influencing management's actions
Primary users: investors, lenders, other creditors
Reports = statements + supplemental disclosures; NOT designed solely
  for valuation (inputs to it); serve many users
Standards limit the RANGE of acceptable answers — no single correct one;
  judgment (accruals, estimates) is unavoidable
Rules-based (complex, specific) vs principles-based (general)
Convergence driven by: globalization of capital flows + accounting scandals
Framework assists: standard setters | preparers (incl. uncovered issues)
  | auditors | users

── SETTERS vs REGULATORS (§2) ──
SETTERS (IASB, FASB): private, self-regulated; SET standards; authority
  ONLY via regulator recognition
REGULATORS (SEC, ACRA Singapore, Brazil SEC): government; RECOGNIZE &
  ENFORCE; legal authority; CAN OVERRULE setters (SEC rarely does)
IASB: monitoring board (EC, IOSCO, Japan FSA, US SEC; Basel observer)
  → IFRS Foundation Trustees → appoint IASB members → advised by bodies
IFRS Foundation objectives: single set of high-quality standards |
  transparent, comparable, decision-useful info for all entity types |
  convergence of national standards with IFRS
Process: agenda → consider/advice → EXPOSURE DRAFT → new/revised standard
FASB: Financial Accounting Foundation oversees; since 1930s;
  output = ACCOUNTING STANDARDS CODIFICATION (by topic; authoritative
  US GAAP for non-governmental entities); SEC guidance PARTLY included;
  SEC issues Staff Accounting Bulletins

── QUALITATIVE CHARACTERISTICS (§3) ──
FUNDAMENTAL (2):
  RELEVANCE — makes a difference; PREDICTIVE and/or CONFIRMATORY value;
    MATERIALITY inside relevance (omission/misstatement could influence;
    nature and/or magnitude)
  FAITHFUL REPRESENTATION ("reliability") — COMPLETE, NEUTRAL, FREE FROM
    ERROR (process, not perfect accuracy)
ENHANCING (4) — C-V-T-U:
  COMPARABILITY (similarities/differences; consistent over time, across
  entities) | VERIFIABILITY (independent observers agree) | TIMELINESS
  (before the decision) | UNDERSTANDABILITY (clear; reasonable-knowledge
  diligent users; DON'T exclude difficult info)
No priority among enhancing — balance. PERVASIVE CONSTRAINT = COST
  (benefits > costs). Limitation: non-quantifiables omitted (workforce
  competence, loyalty, culture, environment)
Ex1 bad-debt estimate: faithful, relevant, timely, understandable —
  sacrifices VERIFIABILITY. Can't satisfy all at once.

── ELEMENTS, ASSUMPTIONS, RECOGNITION, MEASUREMENT (§4) ──
POSITION: ASSET (present resource CONTROLLED, past events, right with
  potential benefits) | LIABILITY (present OBLIGATION to transfer, no
  practical ability to avoid) | EQUITY (assets − liabilities, residual)
PERFORMANCE: INCOME (asset ↑ / liability ↓ raising equity, EXCL. owner
  contributions; = REVENUE + GAINS) | EXPENSES (reverse, EXCL. owner
  distributions; incl. LOSSES)
ASSUMPTIONS: ACCRUAL (period of occurrence, not cash; revenue when
  performance obligations satisfied) | GOING CONCERN (foreseeable future)
RECOGNITION: meets element definition AND yields relevance + faithful rep
MEASUREMENT (asset / liability):
  HISTORICAL COST: paid incl. acquisition costs / proceeds received
  AMORTISED COST: historical adj. for depreciation, amortisation,
    depletion, impairment
  CURRENT COST: REPLACEMENT cost (buy today) / UNDISCOUNTED settle today
  REALIZABLE (SETTLEMENT) VALUE: sell in orderly disposal / UNDISCOUNTED
    pay in normal course
  PRESENT VALUE: DISCOUNTED inflows / DISCOUNTED outflows
  FAIR VALUE: EXIT price, orderly transaction, market participants,
    measurement date (market or PV measures)
  ⚠ current cost = BUY side; realizable = SELL side; only PV discounts

── MAJOR STATEMENTS (§5) ──
Complete set: balance sheet | comprehensive income (1 or 2 statements)
  | changes in equity | cash flows | + NOTES (integral)
Only the balance sheet is a POINT IN TIME; the rest cover a period
Audit opinion: PRESENT FAIRLY in accordance with specified STANDARDS
  (not accuracy, not value); auditor's report also covers INTERNAL
  CONTROLS over financial reporting
Consolidated = subsidiaries UNDER CONTROL of the parent
Supplementary: chairman's letter | MD&A | auditor's report | governance
  report | corporate responsibility report — read alongside statements
Statements are mainly for OUTSIDE users (insiders have the data)

── BALANCE SHEET (§6) ──
= statement of financial position = statement of financial condition
ASSETS = LIABILITIES + OWNERS' EQUITY;  A − L = E (residual)
Equity = net assets = BOOK VALUE; partners' capital / shareholders'
  equity / shareholders' funds
IFRS REQUIRES current vs non-current CLASSIFICATION; does NOT prescribe
  ORDER (tradition): Germany least→most liquid, equity before liabilities;
  US/Australia/Canada most→least liquid, cash first, equity last
Read column headers (VW: recent year LEFT); sum liability subtotals
  if no total line (VW: 153 + 160 = 313; 422 = 313 + 109)
Answers: liquidity (short-term) | solvency | position vs peers
Walmart previews: accumulated depreciation → net PP&E; goodwill;
  accumulated OCI in equity; noncontrolling interest in equity;
  commitments & contingencies line (no number)

── COMPREHENSIVE INCOME (§7) ──
Income statement = statement of operations = P&L; Revenue − Expenses = NI
Revenue (ordinary) | other income (gains/losses, non-ordinary) |
  expenses (COGS, S&A, tax; may incl. losses) | net income = bottom
  line = net earnings = net profit = profit or loss
CHAIN: revenue − COGS = GROSS PROFIT (gross result/margin) − operating
  costs = OPERATING PROFIT (operating income/result = EBIT) ± financial
  items = EBT − tax = NET INCOME → attributed to NCI + parent holders
Consolidation: control presumed > 50% voting; 100% of each line
  (intercompany removed); NCI share of NI at the BOTTOM
EPS = NI attributable to the class ÷ relevant shares
  BASIC: common NI ÷ WEIGHTED-AVG common shares actually outstanding
  DILUTED: adjusted NI ÷ shares incl. hypothetical exercise of OPTIONS,
  CONVERTIBLES. Both on the face. VW: 6.8bn ÷ 0.295bn = €22.63
  (ordinary class only; preferred EPS not required)
COMPREHENSIVE INCOME = all equity changes EXCEPT owner transactions
  = NET INCOME + OCI  (VW: 11,638 + 2,305 = 13,943)
OCI: NOT reclassified (pension remeasurements) | MAY be reclassified
  (FX translation — "unrealized currency translation gains/losses",
  cash flow hedges, available-for-sale); accumulates in equity (AOCI)

── CHANGES IN EQUITY & CASH FLOWS (§8) ──
Equity components: paid-in capital | retained earnings (cumulative
  retained profits) | NCI | OCI reserves (separate or in RE — VW: in RE)
Paid-in: ↑ issuance, ↓ repurchase. RE: ↑ NI AND OCI, ↓ dividends
ROLL-FORWARD: End = Begin + NI + OCI + issuance − dividends − buybacks
  VW: 92,910 + 13,943 + 3,481 − 1,332 + 75 = 109,077 ✓
Cash flow: NI is shaped by accruals & policy choices; cash shows the
  actual change; users assess liquidity, solvency, FINANCIAL FLEXIBILITY
  (react/adapt to adversity and opportunity)
THREE CATEGORIES: OPERATING (NI-determining, day-to-day) | INVESTING
  (acquire/dispose LONG-TERM assets) | FINANCING (obtain/repay CAPITAL)
Net change in cash = CFO + CFI + CFF + FX EFFECT (four terms)
  VW: −1,185 − 16,508 + 17,625 − 727 = −796; 18,833 → 18,038
IFRS MORE FLEXIBLE than US GAAP on classifying interest & dividends
INDIRECT: start with profit (before tax at VW), less taxes paid, adjust
  for non-cash, accruals/deferrals, investing/financing items — what
  ALMOST ALL companies use
DIRECT: gross receipts (from customers) and gross payments (to
  suppliers, employees) — VERY FEW use it
Two perspectives: IS = when earned/incurred; CFS = cash-generating
  ability. Ideal for an established company: primary cash source = CFO
```

---

## 10. How This Module Shows Up on the Exam

| Topic | Style | Likelihood |
|---|---|---|
| Fundamental (2) vs. enhancing (4) characteristics — identify from a description | Concept | 🔴 Very high |
| Standard-setters vs. regulators: who sets, who enforces, who can overrule | Concept | 🔴 Very high |
| Six measurement bases — asset/liability versions, buy vs. sell, discounted vs. not | Concept | 🔴 Very high |
| Classify a cash flow as operating / investing / financing | Concept | 🔴 Very high |
| Accounting equation — solve for a term | **Calc** | 🔴 Very high |
| Five elements — definitions and the owner-transaction exclusions | Concept | 🔴 Very high |
| Comprehensive income = NI + OCI; what's in OCI | **Calc**/concept | 🔴 Very high |
| Basic vs. diluted EPS — definitions and a basic calc | **Calc** | 🔴 High |
| Equity roll-forward (NI + OCI + issuance − dividends) | **Calc** | 🔴 High |
| Net change in cash = CFO + CFI + CFF + FX | **Calc** | 🔴 High |
| Indirect vs. direct method; which is common | Concept | 🔴 High |
| Complete set of statements incl. notes; point-in-time vs. period | Concept | 🔴 High |
| Income-statement subtotal chain and aliases (gross, EBIT, EBT, NI) | Concept | 🔴 High |
| Objective of financial reporting — the Conceptual Framework wording | Concept | 🔴 High |
| Consolidation: 100% of lines, >50% presumed control, NCI at bottom | Concept | 🔴 High |
| IFRS requires classification not order; liquidity-ordering conventions | Concept | 🔴 High |
| Materiality inside relevance; "reliability" = faithful representation | Concept | 🔴 High |
| Cost as the pervasive constraint; bad-debt → verifiability sacrificed | Concept | 🔴 High |
| Accrual vs. going concern assumptions | Concept | 🔴 High |
| Recognition criteria (definition + relevance & faithful representation) | Concept | 🟡 Medium-High |
| IFRS more flexible than US GAAP on interest/dividend classification | Concept | 🟡 Medium-High |
| Audit opinion scope; auditor's report covers internal controls | Concept | 🟡 Medium |
| Book value = equity; equity names by entity form | Concept | 🟡 Medium |
| "Not designed solely for valuation"; standards don't eliminate judgment | Concept | 🟡 Medium |
| IASB structure (monitoring board → Trustees → members); process steps | Concept | 🟡 Medium |
| FASB Codification; SEC retains authority; Staff Accounting Bulletins | Concept | 🟡 Medium |
| Financial flexibility definition; CFO as the ideal primary source | Concept | 🟡 Medium |
| Supplementary report items; MD&A not part of the statement set | Concept | 🟡 Medium |
| Rules- vs. principles-based; convergence drivers | Concept | 🟢 Low-Med |
| Analyst information sources; reporting frequency | Concept | 🟢 Low |

**⭐ Carry-over watch (your error patterns applied to FSA):**
- **Truncated rule (M4 pattern — the dominant risk here):** every list in this module is a complete object — 2 + 4 characteristics with sub-parts; 5 elements with exclusion clauses; 6 measurement bases × 2 sides; 5 statements incl. notes; 3 cash-flow categories + FX; the roll-forward's four terms. Reproduce the whole list before matching to options.
- **Off-model / adjacent concept (M4, M5):** "reliability" vs. faithful representation; "revenue" vs. income; "net income" vs. comprehensive income; "current cost" vs. "fair value"; "book value" vs. total assets. Match the stem's phrase to its *owner*.
- **Stem negation (recurring):** FSA stems lean on *least likely* and *NOT* — T/F every option.
- **Wrong quantity (M3):** EPS on the *right class* with *weighted-average* shares; roll-forward with *comprehensive* income, not net income; cash change with *four* terms.

**Study priority order:**
1. **Qualitative characteristics** — 2 + 4, sub-parts, materiality placement, the bad-debt trade-off
2. **Measurement bases table** — all six, both sides, the buy/sell and discounted/undiscounted discriminators
3. **Cash-flow categories + the four-term cash reconciliation + indirect vs. direct**
4. **Setters vs. regulators** — roles, authority dependency, override clause, IASB/FASB structure
5. **Five elements + two assumptions + recognition criteria**
6. **Income-statement chain, EPS (basic/diluted), comprehensive income = NI + OCI, OCI categories**
7. **Accounting equation, book value, IFRS classification-not-order, reading conventions**
8. **Equity roll-forward** with all four terms
9. Complete set of statements, audit scope, consolidation facts, supplementary reports
10. Objective wording, framework users, convergence story, analyst sources

## 11. Official practice problems — log (paraphrased in the Study Hub as `fsa-m1-p01…`)

**Set 1, in progress (2026-10-13): 1 / 4** — Q1 objective NOT about users ✓ · Q2 NOT-enhancing = accuracy ✗ (picked timeliness — negation + off-model) · Q3 NOT a constraint = understandability ✗ (picked balancing — negation, wrong-category answer) · Q4 going concern ✗ (picked accrual — the two assumptions swapped) · Q5 accrual basis ✗ (picked relevance — a characteristic, not an assumption) · Q6 neutrality → faithful representation ✓. **Running 2 / 6.** *Remaining questions to follow.*

> **Note status: COMPLETE** — §1.01 introduction through §1.09 statement of changes in equity and cash flow statement (the reading's final section). Curriculum examples: Example 1 (balancing characteristics) worked in §3; no scored quiz sets in this reading. Practice questions Q1–Q45 → Study Hub question bank (Financial Statement Analysis → M1, `fsa-m1-q01…q45`). Official practice problems: not yet attempted.
