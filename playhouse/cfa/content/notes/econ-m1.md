# CFA Level I — Economics
# Module 1: Topics in Demand and Supply Analysis

> **Big picture:** Economics is ~6–9% of the Level I exam (roughly 10–16 questions). This module is one of the most *calculation-heavy* parts of Economics. The single most tested concept here is **elasticity** — if you master only one thing from this module, master elasticities.

**Importance legend used below:**
- 🔴 **High** — appears on nearly every exam, often as a calculation
- 🟡 **Medium** — regularly tested, usually conceptual
- 🟢 **Low** — occasionally tested, know the definition

---

## 1. The Framework: Micro vs. Macro
**Exam importance: 🟢 Low (definitions only)**

- **Macroeconomics** — aggregate quantities: national output, national income, inflation, unemployment.
- **Microeconomics** — decisions of individual units (consumers and firms). This module is pure micro.
- **Theory of the consumer** — demand side. Consumers are *utility maximizers* (they maximize satisfaction).
- **Theory of the firm** — supply side. Firms are *profit maximizers*.

You will almost never get a direct question on this, but the vocabulary shows up in question stems.

---

## 2. Demand Analysis: The Demand Function and Demand Curve
**Exam importance: 🟡 Medium–High (you must be able to manipulate the equation both directions)**

> The demand side of the model has three examinable topics: **(1) elasticities, (2) substitution and income effects, (3) normal and inferior goods.** Sections 4–8 below cover all three.

### The law of demand
As a good's own price rises, buyers choose to buy less of it; as its price falls, they buy more. This is the **law of demand** — it is why the demand curve slopes downward (with the Giffen/Veblen exceptions in Section 8).

### The demand function
Own price matters most, but income, tastes and preferences, and the prices of substitutes/complements also influence willingness to buy. A **demand function** captures all of these influences in one relationship:

```
Qdx = f(Px, I, Py)                                    (Equation 1)
```

- **Qdx** = quantity demanded of good X — e.g., household demand for gasoline in *liters per month*
- **Px** = price per unit of good X — e.g., € per liter
- **I** = consumers' income — e.g., in €1,000s per household annually
- **Py** = price of another good Y (there can be many, either substitutes or complements)

⚠️ **Units matter.** Notice income and auto prices are measured *in thousands*. Plugging in 50,000 instead of 50 is a fast way to blow up an otherwise correct answer.

### The curriculum's gasoline example (memorize the mechanics, not the numbers)
Economists usually approximate real functions with simple **linear** equations over a relevant range:

```
Qdx = 84.5 − 6.39Px + 0.25I − 2Py                     (Equation 2)
```

where Px = price of a liter of gasoline (€), I = income (€1,000s), Py = average price of an automobile (€1,000s).

**Reading the signs — this is the examinable skill:**

| Coefficient | Sign | What it tells you |
|---|---|---|
| −6.39 on **Px** | Negative | Law of demand. Each €1 rise in gas price cuts consumption by **6.39 liters/month** |
| +0.25 on **I** | Positive | Gasoline is a **normal good** (income ↑ → demand ↑) |
| −2 on **Py** (autos) | Negative | Pricier cars → fewer cars bought and driven → less gas. Negative cross-price elasticity ⇒ gasoline and automobiles are **complements** |

### Step 1 — Predict quantity demanded
Suppose Px = €1.48/liter, I = €50,000 (so I = 50), Py = €20,000 (so Py = 20):

```
Qdx = 84.5 − 6.39(1.48) + 0.25(50) − 2(20)
    = 84.5 − 9.4572 + 12.5 − 40
    = 47.54 liters per month
```

### Step 2 — Hold the other variables constant
To focus on the relationship between quantity and **own price** alone, hold I and Py fixed. They are not ignored — they get "collected" into the new constant term:

```
Qdx = 84.5 + 0.25(50) − 2(20) − 6.39Px
    = 84.5 + 12.5 − 40 − 6.39Px
Qdx = 57 − 6.39Px                                     (Equation 3)
```

The constant **57** = 84.5 + (0.25)(50) − (2)(20).

### Step 3 — Invert it ⚠️ classic exam task
The demand *curve* is drawn with **price on the vertical (y) axis**, so solve Equation 3 for Px:

```
6.39Px = 57 − Qdx
Px = 57/6.39 − (1/6.39)Qdx
Px = 8.92 − 0.156·Qdx                                 (Equation 4)
```

This is the **inverse demand function**. Its graph is the **demand curve**.

- **Vertical intercept = 8.92** — the price at which quantity demanded hits zero
- **Horizontal intercept = 57** — quantity demanded when price is zero
- **Restriction:** Qx must be ≤ 57 so that price is not negative

### The slope of the demand curve ⚠️ the #1 trap in this section
The slope of the curve is **ΔP/ΔQ**, *not* the coefficient in the demand function:

```
Slope of demand curve = 1 / (coefficient on Px) = 1/(−6.39) = −0.156
```

So the demand *function* carries −6.39, but the demand *curve* has slope **−0.156**. They are reciprocals. Examiners love offering both as answer choices.

### Reading the demand curve two ways
The curve simultaneously specifies:
1. The **highest quantity** a household would buy at a given price, and
2. The **highest price** a household would pay for a given quantity.

Using the example (Exhibit 1):

| Price (€/liter) | Quantity demanded (liters/month) |
|---|---|
| 1.48 | 47.54 |
| 2.48 | 41.15 |

A €1 price rise cuts quantity by exactly 6.39 liters (47.54 → 41.15), which is the own-price coefficient doing its work.

### Movement along vs. shift of the curve 🟡
- **Change in own price (Px)** → movement *along* the curve ("change in **quantity demanded**")
- **Change in anything else (I, Py, tastes)** → the constant term changes → the whole curve **shifts** ("change in **demand**")

In the example, a change in income or auto prices alters the "57" and shifts the curve; only a change in gas price moves you along it. This wording distinction is a classic conceptual question.

### Why we need elasticity next
The demand and supply model tells you the *direction* of price and quantity changes when a curve shifts. It does not tell you the *magnitude* of the response. Measuring that sensitivity is the job of **elasticity of demand** and **elasticity of supply** — and fundamentally, all elasticities are computed the same way: **as ratios of percentage changes.**

---

## 3. The Supply Function and Market Equilibrium
**Exam importance: 🟡 Medium**

Supply works symmetrically:

```
Qs = f(Px, input prices, technology, ...)
```

- Coefficient on own price is **positive** (higher price → more supplied).
- Changes in input costs or technology **shift** the supply curve.

### Finding equilibrium ⚠️ know how to do this fast
Equilibrium is where **Qd = Qs**.

**Example:**
```
Qd = 50 − 2P
Qs = 10 + 3P

Set equal:  50 − 2P = 10 + 3P
            40 = 5P
            P* = 8,  Q* = 50 − 2(8) = 34
```

- If price is **above** P* → excess supply (surplus) → price pressured down
- If price is **below** P* → excess demand (shortage) → price pressured up

**Stable equilibrium:** with a normal downward-sloping demand and upward-sloping supply, any deviation self-corrects.

---

## 4. Own-Price Elasticity of Demand
**Exam importance: 🔴 HIGH — the #1 tested concept in this module, almost always as a calculation**

Elasticity answers: *"How sensitive is quantity demanded to a change in price?"*

### Why not just use the slope coefficient? ⚠️ conceptual question
In `Qdx = 57 − 6.39Px`, the coefficient −6.39 already measures sensitivity: a €1 price rise cuts consumption by 6.39 liters/month. So why bother with elasticity?

**Because the coefficient depends on the units of measurement.** It is tied to liters-per-month and euros-per-liter. Switch to gallons and dollars and the number changes entirely — it can't be extrapolated across units.

Elasticity fixes this by using **ratios of percentage changes**, which are unit-free:
> If quantity falls by 8% when price rises by 10%, elasticity is −0.8. It doesn't matter whether quantity is in gallons per week or liters per day, or whether price is in dollars per gallon or euros per liter. 10% is 10% and 8% is 8%.

**All elasticities — demand, supply, income, cross-price — are computed the same way: a ratio of percentage changes.** Learn the pattern once and it transfers.

### The formula

```
         %ΔQdx
Edpx = ─────────                                      (Equation 5)
         %ΔPx
```

Expanding it (a percentage change in x is just Δx divided by the level of x):

```
         %ΔQdx     (ΔQdx / Qdx)     ⎛ ΔQdx ⎞   ⎛  Px  ⎞
Edpx = ───────── = ────────────── = ⎜──────⎟ × ⎜──────⎟   (Equation 6)
         %ΔPx      (ΔPx  / Px )     ⎝ ΔPx  ⎠   ⎝ Qdx  ⎠
```

**This is the version you use on the exam.** Two pieces:
- **(ΔQdx/ΔPx)** = the **coefficient on Px** in the demand function (when demand is linear, this equals the slope coefficient — here, −6.39)
- **(Px/Qdx)** = the specific **point** you're evaluating at (elasticity is not one number for the whole curve)

### Worked example 1 — inelastic point (low price)
Using `Qdx = 57 − 6.39Px` at Px = €1.48:

```
Step 1 — find Q:  Q = 57 − 6.39(1.48) = 47.54 liters/month
Step 2 — apply:   E = −6.39 × (1.48 / 47.54) = −0.2
```

**Interpretation:** at €1.48, a 1% rise in price causes quantity demanded to fall by only 0.2%. Demand is **inelastic** here.

### Worked example 2 — elastic point (high price)
Same demand function, now at Px = €5:

```
Step 1 — find Q:  Q = 57 − 6.39(5) = 25.05 liters/month
Step 2 — apply:   E = −6.39 × (5 / 25.05) = −1.28
```

**Interpretation:** demand is **elastic** at €5. Same curve, same coefficient — different answer, purely because the P/Q ratio changed.

> **Takeaway:** at low gas prices, a small price change barely dents consumption. At high gas prices, consumers respond sharply. This is why you must always be told *which price* to evaluate at.

### Interpreting the magnitude (use |Ed|, ignoring the algebraic sign)

| \|Ed\| | Term | Meaning |
|---|---|---|
| > 1 | **Elastic** | Quantity is **sensitive** to price changes |
| = 1 | **Unit (unitary) elastic** | Exactly proportional |
| < 1 | **Inelastic** | Quantity is **not very sensitive** to price changes |

**Sign note:** if the law of demand holds, own-price elasticity is **always negative** (price up ⇒ quantity down). The sign never tells you elastic vs. inelastic — only the *magnitude* does.

⚠️ **Your known error pattern applies directly here.** −1.28 is elastic; −0.2 is inelastic. Don't let the negative sign confuse the comparison to 1. Take the absolute value first, *then* compare.

### Elasticity varies along a linear demand curve ⚠️ classic trap
Look at Equation 6. The first term (ΔQ/ΔP) is the inverse of the slope and stays **constant** along the whole curve. The second term (P/Q) **changes** as you move:

- **Very low prices:** P/Q is very small → demand is **inelastic**
- **Very high prices:** P is high and Q is low → P/Q is very large → demand is **elastic**

For **all** negatively sloped linear demand curves:

| Position on curve | Elasticity |
|---|---|
| **Above the midpoint** | Elastic |
| **At the midpoint** | Unit elastic (also where total revenue is maximized) |
| **Below the midpoint** | Inelastic |

**Memorize this shape.** The slope is constant; the elasticity is not. Confusing the two is the most common error in this reading.

### The two extremes of price elasticity 🟡
There are exactly two linear demand curves with the **same** elasticity at every point:

| Curve | Elasticity | Name | Meaning |
|---|---|---|---|
| **Vertical** | 0 | **Perfectly inelastic** | Same quantity bought regardless of price |
| **Horizontal** | ∞ | **Perfectly elastic** | Any price rise drops demand to zero |

- **Perfectly inelastic:** no good is truly vertical at *all* prices, but over some price range the same quantity gets bought whether price is slightly higher or lower. In that range, quantity is not at all sensitive to price.
- **Perfectly elastic:** this describes the demand curve facing **an individual seller in perfect competition**. A single wheat farmer can sell her entire crop at the market price, but could sell *nothing* above it — other farmers' wheat is a perfect substitute for hers. 🔴 This links directly to the Market Structures reading; expect it to be tested there too.

### Elasticity and total revenue 🔴 very testable

| Demand is... | Price ↑ | Price ↓ |
|---|---|---|
| **Elastic** | Revenue ↓ | Revenue ↑ |
| **Inelastic** | Revenue ↑ | Revenue ↓ |
| **Unit elastic** | Revenue unchanged (at maximum) | Revenue unchanged |

Memory hook: when demand is inelastic, buyers "can't escape," so raising price raises revenue.

### Predicting elasticity: what makes demand more or less elastic? 🔴 High
**This is a guaranteed conceptual question.** Own-price elasticity tells you *how* sensitive demand is — these four characteristics let you predict it *before* calculating.

#### 1. Availability of close substitutes — the single most important factor
If close substitutes exist, a small price rise sends consumers to the cheaper alternative → **elastic**. With no substitutes → **inelastic**.

⚠️ **The definition of the good matters enormously.** The curriculum's example:

| Good as defined | Substitutes? | Elasticity |
|---|---|---|
| **"Bread"** as a whole category (French bread, pita, tortillas...) | Essentially none | **Inelastic** — if all bread got pricier, you'd buy slightly less, not much less |
| **"Baker Bob's Whole Wheat Bread with Sesame Seeds"** | Many | **Elastic** — switch brands instantly |

**Rule:** the *narrower* the definition of the good, the more elastic its demand. Expect this exact trick — broad category vs. specific brand.

#### 2. Share of the budget spent on the good
- **Small budget share → inelastic.** Most people spend very little on toothpaste monthly, so a 10% price rise barely matters — they buy about the same amount.
- **Large budget share → elastic.** If housing costs rose significantly, households would work hard to reduce the quantity they consume, at least in the long run.

#### 3. Time allowed for adjustment
**For most goods, long-run demand is more elastic than short-run demand.**

If gasoline prices rise, you can't respond quickly — in the short run you're locked into your mode of transportation, your housing location, and your employment location. Given a longer adjustment period, you can adopt a new mode of transport or shorten your commute. So elasticity grows with time.

⚠️ **The durable goods exception — a genuine trap.** Durable goods behave the *opposite* way:
> If washing machine prices fall, people with an old machine they know needs replacing soon may act quickly and buy now. But if prices stayed low forever, a typical consumer still wouldn't buy *more* washing machines over a lifetime.

So for **durables**, short-run demand is more elastic than long-run demand — the price change shifts the *timing* of a purchase you were going to make anyway, not the lifetime quantity.

| Good type | Which is more elastic? |
|---|---|
| Most goods | **Long run** > short run |
| **Durable goods** | **Short run** > long run |

#### 4. Necessity vs. discretionary (optional)
Faced with the same percentage price increase, consumers will give up a **discretionary** Friday-night restaurant meal far more readily than they'll cut back on **non-discretionary** pantry staples. The more necessary a good is seen to be, the **less elastic** its demand.

### Summary — demand is more elastic when the good: 🔴
1. Has **many close substitutes**
2. Occupies a **large portion of the total budget**
3. Is seen as **optional rather than necessary**
4. Has a **longer adjustment time** (except durables)

> ### ⭐ YOU MISSED A PRACTICE QUESTION HERE (Q3)
> *"Price elasticity of demand for a good will most likely be greater if:"*
> **A.** there are no substitutes for the good. → **WRONG — inverted.** *No* substitutes ⇒ **inelastic**. Elastic requires **many** substitutes.
> **B.** consumers consider the good as discretionary. → ✅ **CORRECT.** Discretionary = optional = easy to give up ⇒ **elastic**.
> **C.** consumers spend a small portion of their budget on the good. → **WRONG — inverted.** *Small* budget share ⇒ **inelastic** (the toothpaste case). Elastic requires a **large** share.
>
> **⚠️ Diagnose the error type, not just the answer.** All three choices name a genuine determinant from the list above — but **two of them state it backwards.** Nothing in A or C is off-topic or unfamiliar; the only defect is *direction*. This is the same failure mode as a sign error: the concept is retrieved correctly, but the polarity gets flipped under time pressure.
>
> **The fix — a two-second habit for every determinant question:**
> 1. Read the stem and note which way it points: *"greater"* elasticity or *"lesser"*?
> 2. For each answer choice, ask: **"can the buyer escape?"**
>    - Many substitutes → escape easily → **elastic**
>    - Big budget share → strong motive to escape → **elastic**
>    - Optional/discretionary → can simply skip it → **elastic**
>    - Long adjustment time → time to find an escape route → **elastic** *(durables reversed)*
> 3. Anything phrased as the **opposite** of those four (no substitutes, small budget share, necessity, short run) points to **inelastic** — and is a wrong answer to a "greater elasticity" stem.
>
> **One-line mnemonic:** *elastic = the buyer can walk away.* Every one of the four determinants is just a different reason walking away is easy or hard.

⚠️ **Important caveat the curriculum makes explicitly:** these characteristics do not all operate in the same direction for every good. Real elasticity is a complex result of these *and other* characteristics interacting. On the exam you'll usually be given a scenario where one factor clearly dominates — identify which one is being tested.

---

## 5. Income Elasticity of Demand
**Exam importance: 🔴 High — calculation + classification questions**

> **The structural insight:** this expression is *identical in structure* to own-price elasticity. All elasticity measures share the same general structure — the only thing that changes is the **independent variable of interest**. Learn one, you have them all.

```
        %ΔQdx     ⎛ ΔQdx ⎞   ⎛  I  ⎞
EdI = ────────  = ⎜──────⎟ × ⎜─────⎟             (Equation 7)
         %ΔI      ⎝  ΔI  ⎠   ⎝ Qdx ⎠
```

Same mechanics: **(ΔQdx/ΔI)** is the **coefficient on income** in the demand function; multiply by the point values **I/Qdx**.

**Interpretation:** an income elasticity of 0.8 means that whenever income rises by 1%, quantity demanded at each price rises by 0.8%.

### Sign: the key difference from own-price elasticity ⚠️
Own-price elasticity is *almost always negative*. Income elasticity can be **negative, positive, or zero.**

| Income elasticity | Good type | Behavior |
|---|---|---|
| **Positive** | **Normal good** | Income rises → buy more |
| **Negative** | **Inferior good** | Income rises → buy **less**; income falls → buy **more** |

*Supplementary refinement (standard classification, not in this excerpt):* among normal goods, E > 1 is often called income-elastic or a "luxury," and 0 < E < 1 income-inelastic or a "necessity."

### Effect on the demand curve 🔴 directional question
When plotting the demand curve, income is held constant. If income *changes*, the entire curve **shifts**:

| Good type | Income rises | Curve shifts |
|---|---|---|
| **Normal** | Demand ↑ | **Upward and to the right** |
| **Inferior** | Demand ↓ | **Downward and to the left** |

---

## 6. Cross-Price Elasticity of Demand
**Exam importance: 🔴 High — the sign interpretation is a favorite question**

Measures how sensitive demand for good X is to a change in the price of *another* good Y, holding all else constant. Note how similar it is to own-price elasticity — **the only difference is that the subscript on P is now y.**

```
         %ΔQdx     ⎛ ΔQdx ⎞   ⎛ Py  ⎞
EdPy = ────────  = ⎜──────⎟ × ⎜─────⎟            (Equation 8)
         %ΔPy      ⎝ ΔPy  ⎠   ⎝ Qdx ⎠
```

### The sign tells you the relationship — memorize this 🔴

| Cross-price elasticity | Relationship | Logic |
|---|---|---|
| **Positive** | **Substitutes** | Py rises → buyers switch *to* X → more X demanded |
| **Negative** | **Complements** | Consumed together as a pair; Py rises → less Y → less X |

⚠️ **Precise definition:** in economics, if the cross-price elasticity of two goods is positive, they **are** substitutes — *irrespective of whether anyone would consider them "similar."* The math defines the relationship, not intuition.

**Examples from the curriculum:**
- **Substitutes:** two brands of beer. Your favorite brand's price rises → you buy less of it and more of a cheaper brand.
- **Complements:** gasoline & automobiles; houses & furniture. When auto prices *fall*, quantity of autos demanded rises, and demand for gasoline rises with it.

**Curve shift:** for substitutes, an increase in the price of one good shifts the demand curve for the other **upward and to the right**.

**Memory hook:** **S**ubstitutes → **S**ame sign as the price move (positive).

---

## 6b. Market Demand and the Three Elasticities Together
**Exam importance: 🔴 High — this is the full worked template the exam mimics**

### From individual to market demand function 🟡
To derive the **market** demand function, simply **add up the individual consumers' demand functions.** If 1,000 identical individuals make up the market, multiply every coefficient by 1,000:

```
Individual:  Qdx = 84.5   − 6.39Px   + 0.25I − 2Py        (Equation 2)
Market:      Qdx = 84,500 − 6,390Px  + 250I  − 2,000Py    (Equation 9)
```

⚠️ Multiply **every** term including the constant — a common slip is scaling only the price coefficient.

### Step 1 — Find the quantity at the chosen point
You must choose actual values for *all* independent variables. Using Px = €1.48, I = 50 (€ thousands), Py = 20 (€ thousands):

```
Qdx = 84,500 − 6,390(1.48) + 250(50) − 2,000(20)
    = 84,500 − 9,457.2 + 12,500 − 40,000
    = 47,542.8  ≈ 47,543 liters per month
```

### Step 2 — Insert each slope coefficient into its own elasticity formula
Because the relationship is linear, ΔQ divided by the change in each variable **equals that variable's slope coefficient**. The denominator Qdx = 47,542.8 is the *same* in all three.

**Own-price elasticity (Equation 10):**
```
E = (−6,390) × (1.48 / 47,542.8) = −0.20
```

**Income elasticity (Equation 11):**
```
E = (250) × (50 / 47,542.8) = 0.26
```

**Cross-price elasticity (Equation 12):**
```
E = (−2,000) × (20 / 47,542.8) = −0.84
```

### Step 3 — Interpret all three 🔴 this is where the exam points are

| Elasticity | Value | Interpretation | Conclusion |
|---|---|---|---|
| **Own-price** | −0.20 | A 1% rise in gas price → quantity demanded falls 0.20% | \|−0.20\| < 1 ⇒ **inelastic**. So a price increase **raises total expenditure** on gasoline |
| **Income** | +0.26 | A 1% rise in income → quantity demanded rises 0.26% | Positive ⇒ **normal good** (though the response is small) |
| **Cross-price** | −0.84 | A 1% rise in auto prices → gasoline demand falls 0.84% | Negative ⇒ **complements**. But the magnitude is smallish, so the complementary relationship is **weak** |

> **Two-layer answers.** Notice the curriculum draws *two* conclusions from each number: the **sign** gives the classification (normal/inferior, substitute/complement, and via the law of demand the direction), and the **magnitude** gives the strength (elastic/inelastic, strong/weak). Exam answer choices frequently get the sign right and the strength wrong, or vice versa.

---

## 7. Substitution and Income Effects; Normal and Inferior Goods
**Exam importance: 🔴 High — conceptual, and it is the *foundation* for the Giffen good question in Section 8**

### The law of demand restated
If nothing changes other than the good's **own price**, a decrease in price tends to result in a greater quantity being purchased. With price on the vertical (y) axis and quantity per time period on the horizontal (x) axis, the demand curve **falls from left to right** — it has negative slope.

But *why* do consumers buy more when price falls? There are exactly **two** reasons, and the exam wants you to separate them.

### Effect 1 — The substitution effect
When a good's price falls, it becomes **relatively less costly** compared with other goods the consumer might buy. So the consumer substitutes toward it.

*Curriculum example:* gasoline is used to drive to work. When gas gets cheaper, driving to work is relatively cheaper than taking public transportation, so the consumer substitutes a little more driving for a little less public transport.

🔴 **Critical property: the substitution effect always points the same direction.** Price falls → buy more. Price rises → buy less. This holds for **every** good — normal *and* inferior. It is never ambiguous.

### Effect 2 — The income effect
This one requires a distinction the exam tests directly:

| Term | Definition |
|---|---|
| **Money income** | The quantity of currency available to spend in a given period — the number on the paycheck |
| **Real income** | Purchasing power — what that money can actually buy |

When the price of a good she regularly buys **falls**, and all other prices and her money income stay unchanged, her **real income rises**. She can now buy more of that good — *and* more of other goods too.

So the income effect operates **quite apart from** the substitution effect. What the consumer does with the extra purchasing power depends on the type of good.

### Normal vs. inferior goods 🔴

| Type | Definition |
|---|---|
| **Normal good** | An increase in income causes consumers to buy **more** |
| **Inferior good** | An increase in income causes consumers to buy **less**; when income falls, they buy **more** |

⚠️ **"Inferior" says nothing about quality.** It is *simply shorthand* for a good where a rise in income causes people to buy less of it. Do not read it as "low quality" — this wording appears in distractors.

⚠️ **The same good can be normal for one consumer and inferior for another.** The curriculum's example: for a very low-income group, a rise in income might mean *more* fast-food meals — normal. For a high-income group, a rise in income means they abandon fast food for a fashionable French bistro — inferior. **Classification depends on the consumer, not the product.** This is a favorite trap.

### Putting the two effects together — Exhibit 5 🔴 memorize this table

**For a price DECREASE:**

| Good type | Substitution effect | Income effect |
|---|---|---|
| **Normal good** | Buy **more** — the good is relatively cheaper than its substitutes | Buy **more** — the increase in purchasing power raises the total consumption level |
| **Inferior good** | Buy **more** — the good is relatively cheaper than its substitutes | Buy **less** — the increase in real income prompts the consumer to buy less of the inferior good in favor of its preferred substitutes |

Notice the substitution column is **identical** for both. Only the income column flips.

### What this means for the demand curve

- **Normal good:** the substitution and income effects **reinforce one another**, so the demand curve is negatively sloped. Unambiguous. *(Restaurant meals — most people eat out more as incomes rise.)*
- **Inferior good:** the two effects **oppose each other**. The substitution effect says buy more; the income effect says buy less. *(Cheaper cuts of meat, generic beverages.)*
  - Normally the **substitution effect dominates** → demand still slopes downward.
  - If the income effect were to dominate → the curve would slope **upward**. This is the **Giffen good** (Section 8).

### Working it in reverse — a price INCREASE
The curriculum's beef example, worth tracing because exam stems often reverse the direction:

If the price of beef **rises**:
1. **Substitution effect:** buy less beef, substitute more chicken for the now relatively more expensive beef.
2. **Income effect:** real income *falls* — she can buy fewer goods with the same money income. If beef is a good consumers buy more of when income rises (i.e., normal), then falling real income causes her to buy **less** beef.

Both effects point the same way → less beef. Confirms the negative slope for a normal good.

---

## 8. Giffen Goods and Veblen Goods
**Exam importance: 🔴 High — a near-guaranteed conceptual question; candidates confuse the two constantly**

Both are exceptions where demand can slope **upward**, but for completely different reasons.

### Giffen good
- An **extreme inferior good**: the (negative) income effect is so large it *overwhelms* the substitution effect.
- Price falls → quantity demanded actually **falls**.
- Classic example: a staple food consumed by very poor households (e.g., rice/bread dominating the budget).
- **Key facts:** Giffen goods are *always inferior*. The upward slope comes from the **income effect**. Theoretically consistent with utility-maximizing behavior.

### Veblen good
- A **status/conspicuous-consumption good**: a higher price itself makes the good *more* desirable (signals prestige).
- Example: luxury handbags, prestige watches.
- **Key facts:** Veblen goods are **not** inferior goods — they're high-status items. The upward slope comes from *preferences*, not the income effect. Not consistent with the standard utility framework.

### Side-by-side — this table wins you the exam point

| | Giffen | Veblen |
|---|---|---|
| Demand slope | Can be upward | Can be upward |
| Type of good | Inferior (extreme) | Status/luxury (NOT inferior) |
| Driver | Income effect > substitution effect | Prestige value of high price |
| Income elasticity | Negative | Positive |
| Consumer type | Low income | High income |

---

## 9. Supply Analysis: Cost, Marginal Return, and Productivity
**Exam importance: 🔴 High — this is the gateway to the entire cost-curve topic (shutdown/breakeven, economies of scale)**

> **Why this matters:** the firm's **marginal cost** is the foundation of its ability and willingness to offer a given quantity for sale. And costs depend on two things: **the productivity of its inputs** and **the prices of those inputs.** Everything in this section builds toward that.

### 9.1 Factors of Production and Total Cost 🟡

**Factors of production** (= *inputs*; the terms are synonymous) include employee hours, machine hours, raw materials, and so on. For simplicity economists concentrate on two:

| Input | Symbol | How it's measured | Its price |
|---|---|---|---|
| **Labor** | **L** | Labor **hours** per time period | **w** = wage rate per labor hour |
| **Capital** | **K** | Machine **hours** per time period | **r** = rental rate per machine hour |

⚠️ **Both are measured as flows of *hours*, not headcount or machine count.** This is a computation trap:
- 2 laborers × 35 hours/week → **L = 70** labor hours per week
- 3 machines × 12 hours each → **K = 36** machine hours per week

### The total cost formula

```
TC = (w)(L) + (r)(K)
```

Total cost is simply the cost of all the firm's inputs: hours of labor × wage rate, plus machine hours × rental rate.

### Opportunity cost of owned capital 🔴 conceptual favorite
Think of the firm as **renting** the services of labor and machines. Even if the firm **owns** its machines, it is *not* using them "for free" — it could in theory rent them out to another user and earn the rental rate. By using them internally it **forgoes** that income. That forgone income is the **opportunity cost**, and it belongs in the cost calculation.

⚠️ This is the seed of the economic-profit vs. accounting-profit distinction later in the curriculum. Economic costs include opportunity costs; accounting costs do not.

### Total cost is NOT the cost function ⚠️
- **TC = wL + rK** — the cost of all inputs
- **Cost function: C = f(Q)** — a *relationship* between production cost per time period and the **flow of output** (Q, units of production per time period)

The exam distinguishes these. TC tells you what inputs cost; the cost function maps cost to output.

### What makes cost fall (or rise)? 🟡
Only two things can lower the cost of producing any given level of output:
1. The **price of one or both inputs falls**, or
2. The **inputs become more productive** — fewer of them are needed (e.g., a worker is more productive when fewer labor hours produce the same output)

And the reverse: a rise in cost results from either a **rise in input prices** or a **fall in input productivity**, or both.

### 9.2 Why Productivity Matters 🟡
Cost-minimization and profit-maximization dictate that the firm strives to **maximize productivity** — produce the most output per unit of input, or any given output with the least input.

**Benefits of increased productivity:**
1. **Lower business costs**, which translate into increased profitability
2. **An increase in the market value of equity and shareholders' wealth**, resulting from the increase in profit
3. **An increase in worker rewards**, which motivates further productivity increases from labor

A firm that lags the industry in productivity is at a **competitive disadvantage** and is likely to face decreasing future earnings and shareholders' wealth. Productivity benefits can be shared with consumers (lower prices) and employees (enhanced compensation) — transferring rewards to non-equity holders creates synergies that benefit shareholders over time.

> **Analyst takeaway (exam-relevant framing):** fundamental analysis of a company should examine the firm's **commitment to productivity enhancements** and how deeply productivity is integrated into the competitive nature of its industry. Productivity is sometimes the key factor for economic survival, not just growth.

### 9.3 Total, Average, and Marginal Product of Labor 🔴 HIGH — calculations guaranteed

**Why labor?** When measuring operating efficiency it's easier to use a **single** resource factor rather than a bundle of inputs. Labor is typically chosen because it is the most identifiable and calculable — but any input that isn't difficult to quantify can be used. *(Curriculum example: a widget assembler with 50 workers, one fixed plant, and assorted equipment — labor is the right choice because the plant is fixed and physical capital is varied.)*

### The three definitions (Exhibit 6) — memorize

| Term | Definition | Formula |
|---|---|---|
| **Total product (TP)** | Sum of the output from all inputs during a time period; the aggregate output of the firm | **Q** |
| **Average product (AP<sub>L</sub>)** | Total product divided by the quantity of a given input — total product per worker hour at that output level | **Q / L** |
| **Marginal product (MP<sub>L</sub>)** | The additional output from using **one more unit** of input, assuming other inputs are fixed | **ΔQ / ΔL** |

### Worked example A — total product vs. average product (Exhibit 7) 🔴
Three firms make up an industry:

| Firm | Output (Q) | Market share | Worker hours (L) | AP<sub>L</sub> = Q/L |
|---|---|---|---|---|
| **Company A** | 100,000 | 20.8% | 100 | **1,000** |
| **Company B** | 180,000 | 37.5% | 200 | **900** |
| **Company C** | 200,000 | 41.7% | 250 | **800** |
| Total | 480,000 | 100% | | |

**The lesson — and this is the exam point:**
- **Total product** tells you a firm's **production volume and potential market share**. It says *nothing* about efficiency.
- Company C has the **largest market share** but is the **least efficient** (AP = 800).
- Company A has the **smallest market share** but is the **most efficient** (AP = 1,000). If A can maintain that productivity advantage, it is positioned to generate the **greatest return on investment** through lower costs and higher profit.

⚠️ Expect a question that offers "largest firm = most efficient." It's wrong.

### Worked example B — the full table (Exhibit 8) 🔴 know how to reproduce this

| Labor (L) | Total Product (Q<sub>L</sub>) | Average Product (AP<sub>L</sub>) | Marginal Product (MP<sub>L</sub>) |
|---|---|---|---|
| 0 | 0 | — | — |
| 1 | 100 | 100 | 100 |
| 2 | 210 | 105 | **110** ← peak MP |
| 3 | 300 | 100 | 90 |
| 4 | 360 | 90 | 60 |
| 5 | 400 | 80 | 40 |
| 6 | 420 | 70 | 20 |
| 7 | **350** | 50 | **−70** ← negative |

**How each column is built:**
```
AP(L) = Q / L                 e.g., at L=5:  400 / 5 = 80
MP(L) = ΔQ / ΔL               e.g., at L=5:  (400 − 360) / (5 − 4) = 40
```

⚠️ **AP and MP answer different questions at the same point.** At L = 5, average productivity across all five labor hours is **80 units**, but the productivity of the *fifth* labor hour alone is only **40 units**. Confusing the two is a classic error — read the question stem carefully.

**Reading the table:**
- Total product **increases** with each added labor hour **until the seventh**, at which point total production **declines by 70 units**. A firm would obviously want to avoid negative worker productivity.
- MP peaks at L = 2 (110), then falls continuously.

### Which measure should a firm use? 🟡

| Measure | What it reveals | Best for |
|---|---|---|
| **Total product** | Output volume, potential market share | Sizing the firm vs. the industry |
| **Average product** | Overall/representative labor productivity | 🔴 **Preferred when workers perform tasks collectively** and individual productivity isn't easily measurable |
| **Marginal product** | Productivity of the *individual additional* worker hour | Deciding whether to add one more unit of input |

Total product is *simply* an indication of output volume and potential market share. **Average and marginal product are the better gauges of a firm's productivity** — both can reveal competitive advantage through production efficiency.

> **On average product:** it is a *representative* or overall measure — some workers are more productive than average and others less productive than average.

### 9.4 Increasing Marginal Returns and the Law of Diminishing Marginal Returns 🔴 HIGH

### Increasing marginal returns
**Increasing marginal returns** = the phenomenon where **marginal product increases** as additional units of an input are employed.

**Why it happens: specialization and division of labor.**
- Initially, with **too few workers relative to total physical capital**, the firm is understaffed — employees must **multi-task and share duties**.
- As more workers are added, employees can **specialize**, become more adept at their individual functions, and realize **increased marginal productivity**.

*In Exhibit 8:* output is **more than twice as great** (210 widgets) with two labor hours as with one (100 widgets). That's increasing marginal returns — MP rises from 100 to 110.

### The law of diminishing marginal returns 🔴
**After a certain output level, marginal returns begin to diminish.**

**Why:** when more and more workers are added to a **fixed capital base**, the marginal return of labor eventually decreases because **the fixed input restricts the output potential of additional workers.**

*Curriculum illustration:* when an auto manufacturing plant is operating at **full capacity**, adding more labor will not increase production because the physical plant is already **100% employed**. More labor hours merely **add to costs without adding to output.**

**Two conditions the exam tests:**
1. **Assumes all workers are of equal quality and motivation** — the decline is not because later hires are worse
2. **Occurs in the SHORT RUN**, where all other resources (plant size, physical capital, technology) are **fixed**

⚠️ Diminishing marginal returns is a **short-run** concept, because it requires at least one fixed input. Long-run behavior is governed by **economies and diseconomies of scale** instead, where all inputs can vary. Do not mix these up — it's a frequent distractor.

**Related definition:** marginal returns are directly related to **input productivity** — a measure of the **output per unit of input**.

### The sequence to memorize
```
Add labor to fixed capital  →  INCREASING marginal returns (specialization, division of labor)
                            →  DIMINISHING marginal returns (fixed input constrains output)
                            →  NEGATIVE marginal returns (total product actually falls)
```

---

## 10. Marginal Revenue, Marginal Cost, and Profit Maximization
**Exam importance: 🔴 VERY HIGH — the MR = MC rule and the cost-curve relationships are among the most tested items in all of Economics**

### 10.1 The Objective 🟡
A for-profit firm's management is tasked with **shareholder wealth maximization**, which translates into **economic profit maximization.**

```
Profit = TR − TC
```

⚠️ **Throughout this reading, "profit" means economic profit**, not accounting profit. Anything that increases revenue more than cost, or decreases cost more than revenue, increases profit.

### 10.2 Marginal Revenue (MR) 🔴

```
MR = ΔTR / ΔQ
```

MR = the **additional revenue** the firm realizes from increasing output by **one unit** per time period.

### Perfect competition: MR = P
Characteristics of a **perfectly competitive** market:
- One of **many sellers of identical products**
- **Low or non-existent barriers to entry**
- The firm has **no pricing power** because many perfect substitutes exist
- Raise price even slightly → **lose all sales** to competitors
- Can sell **essentially any amount** without lowering price below market price

*Wheat example:* a wheat seller has no control over market price. Because **TR = (P)(Q)**, MR is simply price per unit. The firm faces a **perfectly horizontal (zero-sloped), infinitely elastic** demand curve.

```
Selling 1,000 bushels at £3:   TR = £3,000
Sell one more unit:            TR rises by exactly £3   →   MR = P = £3
```

The firm doesn't have to lower its price to sell that added unit.

### Imperfect competition: MR < P
If a firm sells a **differentiated** product and has a **large market share**, it operates under **imperfect competition**. The extreme case is a **monopoly** — one firm selling a product with **no close substitutes**, subject to the market demand curve.

Whether monopoly or simply imperfect competition, the firm faces a **negatively sloped demand curve** and **must lower its price to sell another unit.** Therefore **MR is lower than price.**

### Decomposing MR — the derivation 🔴 know this
Start from TR = (P)(Q) and MR = ΔTR/ΔQ. The change in total revenue is:

```
ΔTR = (P)(ΔQ) + (Q)(ΔP)
```

**Two competing forces on revenue:**
1. Additional units are sold at the new price → **adds** revenue
2. **All** units must now be sold at the lower price → **subtracts** revenue

Divide by ΔQ:

```
        (P)(ΔQ)   (Q)(ΔP)              ⎛ ΔP ⎞
MR =  ────────── + ────────  =  P  +  Q⎜────⎟
          ΔQ         ΔQ                ⎝ ΔQ ⎠
```

**MR = price plus an "adjustment" equal to quantity × the slope of the demand curve** (recall ΔP/ΔQ *is* the slope of the demand curve).

| Market type | Slope ΔP/ΔQ | Result |
|---|---|---|
| **Perfect competition** | **0** (horizontal) | Adjustment term vanishes → **MR = P** |
| **Imperfect competition** | **< 0** (negatively sloped) | Adjustment is negative → **MR < P** |

This single formula generates both results. If you can rebuild it, you never have to memorize the two cases separately.

### 10.3 Marginal Cost (MC) 🔴

```
MC = ΔTC / ΔQ
```

MC = the increase to total cost from increasing output by **one additional unit** per time period.

### Short-run vs. long-run marginal cost 🔴

| | **SMC** (short-run) | **LMC** (long-run) |
|---|---|---|
| What's variable | **Labor only** | **All inputs** |
| Why | Capital **cannot** change in the short run — there is a **lead time** to build or buy plant equipment and put it in place | The firm has flexibility to change **both labor and capital** in the way that maximizes efficiency |
| Definition | The additional cost of the **variable input, labor**, to raise output by one unit | The additional cost of **all inputs** necessary to raise output by one unit |

### Linking cost to productivity 🔴 HIGH — connects Section 9 to Section 10
**Cost is *directly* related to input prices and *inversely* related to productivity.**
- Wage rate rises → cost rises
- Labor becomes more productive → cost falls

Two formulas capture this exactly:

```
SMC = w / MP(L)          [marginal cost = wage ÷ MARGINAL product]
AVC = w / AP(L)          [average variable cost = wage ÷ AVERAGE product]
```

⚠️ **Note the pairing: marginal with marginal, average with average.** Swapping MP and AP here is an easy, costly slip.

**The consequence — why MC is U-shaped:**
```
Workers specialize   →  MP(L) RISES  →  SMC FALLS
Fixed capital binds  →  MP(L) FALLS  →  SMC RISES
```
The MC curve initially declines because of **increasing marginal returns** to labor, then increases because of the **law of diminishing marginal returns.** The cost curve's shape is a direct mirror of the productivity curve from Section 9.4.

### 10.4 The Profit-Maximization Rule 🔴 VERY HIGH

Consider a firm producing 1,000 widgets/week deciding whether to produce more:

| Condition | Decision | Reasoning |
|---|---|---|
| **MR > MC** | **Increase Q** | The additional revenue exceeds the additional cost → profit rises (or losses shrink) |
| **MR < MC** | **Reduce Q** | The unit adds more to cost than to revenue → cutting saves more than it loses |
| **MR = MC** | **Stay** | Profit is maximized |

### The second-order condition ⚠️ frequently omitted by candidates
At the output level where MR = MC, **MC cannot be falling.**

*Why this is intuitive:* if MC is falling with additional output, then MP<sub>L</sub> must be **rising** (recall SMC = w/MP<sub>L</sub>). If one more hour of labor causes MC to *fall*, the firm would want to add that hour — and keep adding labor until SMC becomes **positively sloped**.

> **🔴 The complete rule — memorize both parts:**
> **Produce the level of output such that (1) MR = MC and (2) MC is not falling.**

---

## 11. Short-Run Cost Curves: Total, Variable, Fixed, and Marginal
**Exam importance: 🔴 VERY HIGH — expect both a calculation and a curve-relationship question**

### 11.1 The Total Cost Curves (Exhibit 10) 🔴

```
TC = TFC + TVC
```

| Term | Definition | Behavior |
|---|---|---|
| **Total fixed cost (TFC)** | Summation of all expenses that **do not change** as the level of production varies | **Horizontal line** |
| **Total variable cost (TVC)** | Summation of all variable expenses | **Rises** with increased production, **falls** with decreased production |

**Key graphical facts:**
- At **zero production, TC = TFC**, because TVC at that output is zero
- The TC curve always lies **parallel to and above** the TVC curve, by the amount of **TFC**

### Fixed costs in detail 🟡
- Incurred **whether the firm produces anything or not**
- May stay constant over a given range of production, but can **change to another constant level** when production moves outside that range (i.e., "fixed" is range-specific, not permanent)
- **Examples:** debt service, real estate lease agreements, rental contracts
- 🔴 **Normal profit is also considered a fixed cost** — it is the return required by investors on their equity capital, regardless of output level. *(This is a favorite exam item.)*
- Fixed costs also arise from investments in fixed assets (real estate, production facilities, equipment). These **cannot be arbitrarily cut** when production declines — when a firm downsizes, **fixed cost is usually the last expense to be cut.**

### Variable costs in detail 🟡
- **Direct relationship with quantity:** quantity ↑ → TVC ↑; quantity ↓ → TVC ↓
- At **zero production, TVC is always zero**
- **Examples:** payments for labor, raw materials, and supplies
- The *change* in TVC **declines** up to a certain output point, then **increases** as production approaches capacity limits

*From Exhibit 12:* the change in TVC from 1 to 2 units is **25** (75 − 50), but the change from 9 to 10 units is **350**. Same one-unit step, dramatically different cost — that's capacity constraints biting.

> TC increases at a **decreasing rate** up to a certain output level; thereafter the rate of increase **accelerates** as the firm approaches full capacity utilization. The rate of change in TC **mirrors** the rate of change in TVC (because TFC is constant).

### 11.2 The Average and Marginal Cost Curves (Exhibit 11) 🔴

```
AFC = TFC / Q
AVC = TVC / Q
ATC = TC  / Q  =  AFC + AVC
MC  = ΔTC / ΔQ
```

**Curve shapes:**
- **AFC declines continuously** as output increases, because a fixed TFC is spread over a larger number of units. It never turns up.
- **ATC and AVC are both bowl-shaped (U-shaped):** each initially declines, reaches a minimum, then increases.

### The MC intersection rule 🔴 VERY HIGH
**The MC curve intersects both the ATC and the AVC curves at their minimum points.**

The general principle that always holds for average and marginal costs:

| If... | Then... |
|---|---|
| **MC < average cost** | Average cost **must fall** |
| **MC > average cost** | Average cost **must rise** |
| **MC = average cost** | Average cost is at its **minimum** |

Applied to AVC: when MC is less than AVC, AVC is decreasing; when MC is greater than AVC, AVC is increasing.

⚠️ **This works because MC pulls the average toward itself** — the same logic as a test score below your average dragging the average down.

### Reading Exhibit 11's labeled points 🔴

| Point | Meaning |
|---|---|
| **S** | Lowest point on **AVC**, where **MC = AVC**. Beyond Q<sub>AVC</sub>, MC > AVC so AVC begins to rise |
| **T** | Lowest point on **ATC**, where **MC = ATC**. Beyond Q<sub>ATC</sub>, MC > ATC so ATC is rising |
| **R** | Lowest point on the **MC** curve. Beyond this point of production, **fixed input constraints reduce the productivity of labor** |
| **A** | The vertical difference between ATC and AVC at Q<sub>1</sub> — this gap **is AFC** |
| **X** | The ATC−AVC difference at Q<sub>2</sub>. **Less than A**, because AFC (Y) falls with output |

🔴 **The single most testable structural fact:** the **minimum of AVC occurs at a LOWER quantity than the minimum of ATC.** (S sits to the left of T.) Reason: ATC keeps getting pulled down by still-falling AFC even after AVC has started rising.

Corollary: the **gap between ATC and AVC narrows** as output increases, because that gap *is* AFC, and AFC shrinks continuously.

### 11.3 The Full Worked Table (Exhibit 12) 🔴 be able to reproduce every column

| Q | TFC | AFC | TVC | AVC | TC | ATC | MC |
|---|---|---|---|---|---|---|---|
| 0 | 100 | — | 0 | — | 100 | — | — |
| 1 | 100 | 100.0 | 50 | 50.0 | 150 | 150.0 | 50 |
| 2 | 100 | 50.0 | 75 | **37.5** ← min AVC | 175 | 87.5 | **25** ← min MC |
| 3 | 100 | 33.3 | 125 | 41.7 | 225 | **75.0** ← min ATC | 50 |
| 4 | 100 | 25.0 | 210 | 52.5 | 310 | 77.5 | 85 |
| 5 | 100 | 20.0 | 300 | 60.0 | 400 | 80.0 | 90 |
| 6 | 100 | 16.7 | 450 | 75.0 | 550 | 91.7 | 150 |
| 7 | 100 | 14.3 | 650 | 92.9 | 750 | 107.1 | 200 |
| 8 | 100 | 12.5 | 900 | 112.5 | 1,000 | 125.0 | 250 |
| 9 | 100 | 11.1 | 1,200 | 133.3 | 1,300 | 144.4 | 300 |
| 10 | 100 | 10.0 | 1,550 | 155.0 | 1,650 | 165.0 | 350 |

*(TFC here includes all opportunity costs.)*

**How the table is built:**
```
TC  = TFC + TVC              e.g., Q=5:  100 + 300 = 400
MC  = change in TC           e.g., Q=5:  400 − 310 = 90
AFC = TFC/Q                  e.g., Q=5:  100/5 = 20
AVC = TVC/Q                  e.g., Q=5:  300/5 = 60
ATC = TC/Q  = AFC + AVC      e.g., Q=5:  400/5 = 80  = 20 + 60 ✓
```

**Verifying the intersection rule against the numbers:**
- **AVC turns up between 2 and 3 units** because MC at unit 3 (**50**) exceeds AVC (**41.7**)
- **ATC declines up to 3 units** because MC is below ATC there
- **After 3 units ATC rises**, because the MC of unit 4 (**85**) exceeds the ATC of all prior units (**75**)
- Note **min AVC at Q=2** but **min ATC at Q=3** — confirming AVC bottoms out at a *lower* quantity ✓

**Composition check:** at 5 units, TC = 400, of which **300 is variable** and **100 is fixed**. At 10 units, TC = 1,650 — **1,550 variable**, still **100 fixed**.

### 11.4 Minimum ATC ≠ Profit Maximization ⚠️ 🔴 subtle and heavily tested

At 3 units, ATC = 75 (TC of 225 ÷ 3, or AFC 33.3 + AVC 41.7). This is the **least average cost point of production** and the minimum point on the ATC curve.

> **But the profit-maximizing quantity may NOT correspond to this minimum ATC point.**
>
> **Profit per unit** is maximized at minimum ATC — **but not necessarily total profit.**

Cost-minimizing behavior alone would dictate operating at minimum ATC. Profit maximization follows **MR = MC** instead (Section 10.4). These generally occur at **different output levels**, and the firm pursues total profit, not profit per unit.

⚠️ Expect an answer choice asserting the firm should produce at minimum ATC. It's a trap.

---

## 12. Quick-Reference Formula Sheet

```
── DEMAND SIDE ──────────────────────────────────────────────

Demand function:        Qd = a − b·Px + c·I ± d·Py
Inverse demand:         solve for Px  →  slope of curve = −1/b
Market demand:          multiply EVERY coefficient by no. of consumers

Equilibrium:            set Qd = Qs, solve for P*, then Q*

Own-price elasticity:   Ed   = (ΔQd/ΔPx) × (Px/Qd)     [coefficient × point]
Income elasticity:      E(I) = (ΔQd/ΔI)  × (I/Qd)
Cross-price elasticity: E(XY)= (ΔQdx/ΔPy) × (Py/Qdx)

── SUPPLY SIDE ──────────────────────────────────────────────

Labor input:            L = no. of workers × hours each
Capital input:          K = no. of machines × hours each

Total cost:             TC = (w)(L) + (r)(K)
Cost function:          C = f(Q)      [cost as a function of OUTPUT]

Total product:          TP = Q
Average product:        AP(L) = Q / L
Marginal product:       MP(L) = ΔQ / ΔL

── REVENUE, COST, PROFIT ────────────────────────────────────

Profit:                 Profit = TR − TC        (ECONOMIC profit)
Total revenue:          TR = (P)(Q)
Marginal revenue:       MR = ΔTR/ΔQ = P + Q(ΔP/ΔQ)
                        Perfect competition (slope 0):  MR = P
                        Imperfect competition (slope<0): MR < P

Marginal cost:          MC = ΔTC/ΔQ
Cost ↔ productivity:    SMC = w / MP(L)      [marginal with marginal]
                        AVC = w / AP(L)      [average with average]

Total cost:             TC  = TFC + TVC
Average fixed cost:     AFC = TFC/Q          (declines continuously)
Average variable cost:  AVC = TVC/Q          (U-shaped)
Average total cost:     ATC = TC/Q = AFC + AVC   (U-shaped)

PROFIT MAX RULE:        (1) MR = MC  AND  (2) MC is not falling
MC INTERSECTION RULE:   MC cuts ATC and AVC at their MINIMUM points
                        MC < avg cost → avg falls;  MC > avg cost → avg rises
                        min AVC occurs at a LOWER Q than min ATC
```

**Sign summary (memorize):**
- Own-price Ed: negative (except Giffen/Veblen) → judge elastic/inelastic by |Ed|
- Income E > 0 → normal; E < 0 → inferior
- Cross-price E > 0 → substitutes; E < 0 → complements

---

## 13. How This Module Shows Up on the Exam

| Topic | Question style | Likelihood |
|---|---|---|
| **DEMAND SIDE** | | |
| Elasticity calculation from a demand function | Calculation | 🔴 Very high |
| Classify good from elasticity sign (normal/inferior, substitute/complement) | Concept | 🔴 Very high |
| Giffen vs. Veblen distinction | Concept | 🔴 High |
| Determinants of elasticity (substitutes, budget share, time, necessity) | Concept | 🔴 High |
| Substitution vs. income effect direction (Exhibit 5) | Concept | 🔴 High |
| Elasticity ↔ total expenditure relationship | Concept/calc | 🟡 Medium |
| Inverse demand / slope of curve vs. coefficient | Calculation | 🟡 Medium |
| Market demand from individual demand | Calculation | 🟡 Medium |
| **SUPPLY SIDE** | | |
| Compute AP and MP from a total product table | Calculation | 🔴 Very high |
| Diminishing marginal returns — cause + short-run condition | Concept | 🔴 High |
| Total product vs. average product (size ≠ efficiency) | Concept | 🔴 High |
| Total cost TC = wL + rK, incl. converting workers/machines to hours | Calculation | 🟡 Medium |
| Opportunity cost of owned capital | Concept | 🟡 Medium |
| Increasing marginal returns (specialization/division of labor) | Concept | 🟡 Medium |
| Benefits of productivity to the firm | Concept | 🟢 Low-Med |

| **REVENUE, COST & PROFIT MAXIMIZATION** | | |
| Profit-max rule: MR = MC **and** MC not falling | Concept | 🔴 Very high |
| Build/complete a cost table (TC, ATC, AVC, AFC, MC) | Calculation | 🔴 Very high |
| MC intersects ATC and AVC at their minimums | Concept | 🔴 Very high |
| min AVC occurs at lower Q than min ATC | Concept | 🔴 High |
| MR = P under perfect competition; MR < P under imperfect | Concept | 🔴 High |
| Min ATC maximizes profit *per unit*, not total profit | Concept | 🔴 High |
| SMC = w/MP(L) and AVC = w/AP(L) | Calculation/concept | 🟡 Medium |
| Normal profit is a fixed cost | Concept | 🟡 Medium |
| Fixed vs. variable cost classification | Concept | 🟡 Medium |
| SMC vs. LMC (which inputs are variable) | Concept | 🟡 Medium |

**⭐ Official practice problems (2026-10-11): 7 attempted, 6 correct, Q5 guessed (counted as a miss). Q3 — the earlier miss — now correct.**

| Error type | Question | What to fix |
|---|---|---|
| **Multi-variable calculation skipped** | Q5 (cross-price elasticity, Qd = 3 − 0.05Po + 0.009I − 0.16Pt) | Step 1: plug in ALL variables → Q = 3 − 0.0625 + 22.5 − 0.6 = **24.8375**. Step 2: coefficient on the named variable × (that variable ÷ Q) = −0.16 × 3.75/24.8375 = **−0.0242** (weak complements). The distractor −0.0081 uses the onion price instead of the tomato price. Nothing here is conceptually new — §6b is exactly this template; the miss was not executing step 1 under time pressure. |

**⭐ Your flagged weak spots (from missed practice questions):**
- **Q3 — determinants of elasticity** (Section 4): the distractors were the *right four determinants stated backwards*. Test each choice with "can the buyer escape?" before answering. Direction errors, not knowledge gaps.

**Study priority order:**
1. **MR = MC profit-max rule + the cost-curve relationships** (Sections 10.4, 11.2) — highest density of exam points
2. Elasticities — all three, plus the combined market example (Sections 4–6b)
3. Cost table calculations, Exhibit 12 (Section 11.3)
4. AP / MP calculations and diminishing marginal returns (Section 9.3–9.4)
5. Giffen vs. Veblen (Section 8)
6. Substitution and income effects, Exhibit 5 (Section 7)
7. Determinants of elasticity (Section 4)
8. Cost mechanics and opportunity cost (Section 9.1)
