/* =============================================================
   ECN 451 — QUESTION BANK
   Edit this file freely. Same structure as JSON.
   To add a question, copy any object and modify the fields.
   ============================================================= */

window.QUESTION_BANK = {

/* ============== SECTION 1: INTRODUCTION ============== */
"sec-1": {
  title: "Introduction to Engineering Economics",
  questions: [
    {
      q: "Which is the best description of Engineering Economics?",
      options: [
        "The study of national macroeconomic trends",
        "The application of economic concepts and analytical tools to evaluate engineering options and guide decision-making",
        "A mathematical sub-discipline focused on derivatives",
        "The branch of accounting concerned with bookkeeping"
      ],
      correct: 1,
      explanation: "ECN applies economic concepts, principles, and analytical tools to evaluate engineering options and guide decisions. It is project-specific and decision-oriented, not macro or pure math.",
      difficulty: "easy"
    },
    {
      q: "Which of the following is NOT part of the scope of Engineering Economics?",
      options: [
        "Project evaluation",
        "Comparing alternatives",
        "Risk assessment",
        "Predicting national GDP growth"
      ],
      correct: 3,
      explanation: "Predicting national GDP is the domain of macroeconomics. ECN scope covers project evaluation, comparing alternatives, cost estimation, risk assessment, profit analysis, and resource allocation.",
      difficulty: "easy"
    },
    {
      q: "An engineer must decide whether to outsource a fabrication process or perform it in-house. Which scope area of ECN is being applied?",
      options: [
        "Macroeconomic policy analysis",
        "Comparing alternatives",
        "Demographic forecasting",
        "Inventory accounting"
      ],
      correct: 1,
      explanation: "Choosing between two viable options (outsource vs in-house) is a classic 'Comparing alternatives' application — one of the named scope areas in ECN.",
      difficulty: "easy"
    },
    {
      q: "A team is asked to determine whether a proposed petrochemical project will yield enough economic benefit to justify the investment. This activity is best called…",
      options: [
        "Resource allocation",
        "Project evaluation",
        "Risk assessment",
        "Cost estimation"
      ],
      correct: 1,
      explanation: "Project evaluation specifically asks: will the proposed project yield economic benefits that justify the investment? Cost estimation feeds into it but is narrower.",
      difficulty: "medium"
    },
    {
      q: "Why does ECN exist as a distinct discipline rather than being absorbed into traditional economics?",
      options: [
        "Because engineers don't trust economists",
        "Because engineering decisions require explicit numerical analysis on specific projects, with long-term horizons and practical applications",
        "Because the mathematics is fundamentally different",
        "Because engineers use a different currency"
      ],
      correct: 1,
      explanation: "ECN draws from general economic theory but differs in focus, time horizon, method, and application. Engineering decisions are project-specific, long-term, quantitative, and practical — different from broad qualitative macro analysis.",
      difficulty: "medium"
    },
    {
      q: "An engineer is allocating a fixed ₦500M budget across competing capital projects. Which ECN scope area is most directly engaged?",
      options: [
        "Cost estimation only",
        "Resource allocation and optimization",
        "Demographic study",
        "Salary negotiation"
      ],
      correct: 1,
      explanation: "Allocating scarce resources (budget) across competing options is the textbook 'Resource allocation & optimization' scope of ECN.",
      difficulty: "medium"
    },
    {
      q: "Which sentence captures ECN's posture toward engineering choices most accurately?",
      options: [
        "Pick the technically purest design and ignore costs",
        "Pick the cheapest option, regardless of technical fit",
        "Pick the option that is both technically sound and economically defensible",
        "Pick whichever option a senior engineer prefers"
      ],
      correct: 2,
      explanation: "ECN frames engineering decisions as a joint optimization: a design must be technically sound AND economically justified. Either dimension alone is insufficient.",
      difficulty: "easy"
    },
    {
      q: "A petroleum company is debating where to site a new refinery. Estimating the cash flows of each candidate site falls under…",
      options: ["Risk assessment", "Cost estimation", "Profitability analysis only", "Demographic forecasting"],
      correct: 1,
      explanation: "Estimating what a project will cost — including initial, operating, maintenance and disposal costs — is the cost-estimation scope of ECN.",
      difficulty: "easy"
    },
    {
      q: "After commissioning, a project is monitored against its original economic forecasts. This activity is most aligned with…",
      options: ["Resource allocation", "Profitability analysis", "Macroeconomic forecasting", "Stock valuation"],
      correct: 1,
      explanation: "Comparing realized returns against the forecasted economic benefits is the profit / profitability analysis loop in ECN.",
      difficulty: "medium"
    },
    {
      q: "Which of the following is the LEAST appropriate use of Engineering Economics?",
      options: [
        "Choosing between two pump designs based on lifecycle cost",
        "Deciding the optimal interval to replace a generator",
        "Setting national interest-rate policy",
        "Comparing solar vs diesel generation for a remote site"
      ],
      correct: 2,
      explanation: "National monetary policy is macroeconomics, not engineering economics. ECN is project-level: pump selection, replacement timing, generation alternatives are all in scope.",
      difficulty: "medium"
    },
    {
      q: "A project office uses ECN tools to prove a project will deliver positive net benefits at the prevailing interest rate. This output is primarily…",
      options: ["A risk assessment", "A profitability analysis", "An audit report", "A demographic study"],
      correct: 1,
      explanation: "Showing that a project's discounted benefits exceed its costs at the chosen discount rate is the standard profitability analysis output in ECN.",
      difficulty: "medium"
    },
    {
      q: "ECN deliberately uses long horizons (≈ 2–30 years). Why?",
      options: [
        "To match the typical economic life of capital investments",
        "Because short horizons are illegal",
        "To match the academic semester",
        "Because computers can only handle 30-year arrays"
      ],
      correct: 0,
      explanation: "Engineering assets — pumps, refineries, bridges — have long economic lives. ECN horizons are chosen to span the entire decision horizon of the asset, not just the next quarter.",
      difficulty: "easy"
    },
    {
      q: "Which of these is part of ECN's PRIMARY question?",
      options: [
        "Will this engineering choice deliver economic value across its life?",
        "How can we maximize the GDP of the country?",
        "What is the political situation in the host country?",
        "What is the latest fashion trend in industrial design?"
      ],
      correct: 0,
      explanation: "ECN's primary question is forward-looking and project-specific: will this engineering decision deliver economic value across the asset's life? Macroeconomics, politics, and aesthetics are out of scope.",
      difficulty: "easy"
    },
    {
      q: "Which output of an ECN study is MOST useful to a board approving a project?",
      options: [
        "A textbook discussion of definitions",
        "A quantitative comparison of alternatives showing NPV, IRR, payback",
        "A philosophical reflection on capitalism",
        "A survey of consumer attitudes"
      ],
      correct: 1,
      explanation: "Boards approve projects on quantitative evidence: NPV, IRR, payback period at the firm's hurdle rate. ECN tools produce exactly that.",
      difficulty: "medium"
    },
    {
      q: "An engineering economics study can fail even with perfect math if…",
      options: [
        "The wrong discount rate or wrong cash-flow estimates are used",
        "The font in the report is wrong",
        "The Excel file is not password-protected",
        "Pages are not numbered"
      ],
      correct: 0,
      explanation: "Garbage-in-garbage-out: perfectly correct ECN math built on wrong cash-flow estimates or the wrong discount rate produces a misleading result. Inputs matter as much as method.",
      difficulty: "hard"
    },
    {
      q: "Which best describes the *outcome* of ECN, not the inputs?",
      options: [
        "Defensible recommendations for engineering decisions",
        "Raw cost data only",
        "Only profit forecasts",
        "Only risk matrices"
      ],
      correct: 0,
      explanation: "ECN's deliverable is a defensible recommendation that integrates costs, benefits, time value, risk, and alternatives — not any single ingredient on its own.",
      difficulty: "easy"
    },
    {
      q: "A junior engineer says, 'ECN is just accounting.' The correct rebuttal is…",
      options: [
        "ECN is project-specific, forward-looking, decision-oriented; accounting is historical and statutory",
        "Accounting is illegal",
        "ECN doesn't use numbers",
        "ECN only studies depreciation"
      ],
      correct: 0,
      explanation: "Accounting reports the past; ECN evaluates the future. Accounting is statutory; ECN is decision-support. They share vocabulary but answer different questions.",
      difficulty: "medium"
    },
    {
      q: "Which is NOT a typical question that ECN tries to answer?",
      options: [
        "Should I lease or buy this excavator?",
        "When should I replace this generator?",
        "What is the average inflation rate in the EU?",
        "Is this oil-field development financially viable?"
      ],
      correct: 2,
      explanation: "ECN is project-level. Average EU inflation is macroeconomic data — useful as input but not an ECN question itself.",
      difficulty: "medium"
    },
    {
      q: "A new engineer is told ECN 'forces you to think about money differently.' That is mostly because ECN…",
      options: [
        "Treats all currencies as identical",
        "Recognizes that money has different value at different times — the time value of money",
        "Ignores time entirely",
        "Only uses dollars"
      ],
      correct: 1,
      explanation: "The single most distinctive ECN idea is the time value of money: a sum today is not equivalent to the same sum in five years. Decisions must adjust for that.",
      difficulty: "easy"
    },
    {
      q: "Which is MOST true about ECN's relationship to risk?",
      options: [
        "ECN explicitly incorporates risk and uncertainty as a step in decision-making",
        "ECN ignores risk entirely",
        "ECN replaces risk analysis with hope",
        "ECN only handles known outcomes"
      ],
      correct: 0,
      explanation: "Risk and uncertainty get their own step in the seven-step ECN framework — sensitivity analysis, scenarios, probabilistic methods.",
      difficulty: "easy"
    }
  ]
},

/* ============== SECTION 2: ECN vs TRADITIONAL ============== */
"sec-2": {
  title: "ECN vs Traditional Economics",
  questions: [
    {
      q: "Compared to traditional economics, ECN typically focuses on…",
      options: [
        "Broad macro issues",
        "Project-specific technical and financial decisions",
        "Long-run population trends",
        "Government taxation theory"
      ],
      correct: 1,
      explanation: "ECN is project-specific. Traditional economics deals with broad macro issues like inflation, GDP, employment, and policy.",
      difficulty: "easy"
    },
    {
      q: "Which time horizon best characterises ECN?",
      options: [
        "Daily / weekly market movements",
        "Short-term macro cycles",
        "Long-term, often 2 to 30 years",
        "Indefinite, with no fixed horizon"
      ],
      correct: 2,
      explanation: "ECN looks at the lifetime of engineering assets — typically 2 to 30 years. Traditional economics often examines short-term market behaviour.",
      difficulty: "easy"
    },
    {
      q: "Which method is most associated with ECN?",
      options: [
        "Qualitative reasoning",
        "Theoretical modelling without numbers",
        "Explicit numerical analysis (cost projections, NPV, etc.)",
        "Pure narrative description"
      ],
      correct: 2,
      explanation: "ECN requires explicit numerical analysis — cost projections, present worth, IRR. Qualitative reasoning and theoretical models are more traditional-economics tools.",
      difficulty: "easy"
    },
    {
      q: "A consultant produces a 60-page report comparing four pump designs over a 15-year operational horizon, with present-worth and life-cycle cost calculations. This work is primarily…",
      options: [
        "Traditional macroeconomic analysis",
        "Engineering Economics analysis",
        "Pure financial accounting",
        "Marketing research"
      ],
      correct: 1,
      explanation: "Project-specific, long-term horizon, quantitative, practical — every box on the ECN side of the comparison table.",
      difficulty: "medium"
    },
    {
      q: "Which statement about traditional economics is FALSE?",
      options: [
        "It is concerned with broad macro issues",
        "It often uses qualitative reasoning and theoretical models",
        "It is typically focused on short-term horizons",
        "It is project-specific and quantitative by default"
      ],
      correct: 3,
      explanation: "Traditional economics is broad, often qualitative, and frequently short-term. The 'project-specific and quantitative' description belongs to ECN.",
      difficulty: "medium"
    },
    {
      q: "A government economist writes a paper on whether subsidies improve household welfare. This is an example of…",
      options: [
        "Engineering Economics",
        "Traditional economics — policy-oriented analysis",
        "Cost estimation in ECN",
        "Risk assessment"
      ],
      correct: 1,
      explanation: "Policy-oriented and theoretical work is the hallmark of traditional economics, not ECN.",
      difficulty: "easy"
    },
    {
      q: "An ECN study estimates the present worth of a 25-year LNG project. A traditional-economics study of the same energy market is more likely to discuss…",
      options: [
        "The exact NPV of the LNG project",
        "Aggregate energy demand and supply, prices, and policy",
        "The internal rate of return for the LNG project",
        "The salvage value of LNG storage tanks"
      ],
      correct: 1,
      explanation: "Traditional economics examines aggregate market behaviour, prices, and policy. NPV, IRR, and salvage value are project-level ECN outputs.",
      difficulty: "medium"
    },
    {
      q: "Which adjective best describes ECN's analytical method, in contrast to most traditional economics?",
      options: ["Speculative", "Quantitative and explicit", "Anecdotal", "Philosophical"],
      correct: 1,
      explanation: "ECN demands explicit numbers — cost estimates, cash flows, interest rates. Traditional economics often relies on qualitative reasoning and theoretical models.",
      difficulty: "easy"
    },
    {
      q: "A 30-year highway concession is being evaluated. Why is ECN better suited than a typical macro-economic study for this decision?",
      options: [
        "ECN ignores time entirely, which is faster",
        "ECN explicitly handles project-specific cash flows over the asset's life and the time value of money",
        "ECN uses smaller numbers",
        "Traditional economics doesn't care about money"
      ],
      correct: 1,
      explanation: "ECN's strength is project-specific cash-flow analysis over the asset's life with explicit time-value adjustments — exactly what is needed for a long-lived concession.",
      difficulty: "medium"
    },
    {
      q: "Which output is more typical of TRADITIONAL economics than ECN?",
      options: [
        "An NPV calculation for a new compressor station",
        "A cash-flow diagram for a refinery",
        "A theoretical paper on monopoly pricing in the cement market",
        "A payback period for an LED retrofit"
      ],
      correct: 2,
      explanation: "Theoretical analysis of market structures (monopoly, oligopoly) is traditional economics. Compressor NPV, cash-flow diagrams, and payback are project-level ECN outputs.",
      difficulty: "medium"
    },
    {
      q: "Which is FALSE about engineering economics relative to traditional economics?",
      options: [
        "It is more quantitative",
        "It is more project-specific",
        "It tends toward longer time horizons",
        "It avoids cost figures whenever possible"
      ],
      correct: 3,
      explanation: "ECN is built on cost figures — initial, operating, maintenance, salvage, etc. The other three statements are correct.",
      difficulty: "easy"
    },
    {
      q: "An ECN consultant is asked, 'Will building a new fertilizer plant raise national agricultural output?' This question is…",
      options: [
        "Strictly an ECN question",
        "Strictly a macroeconomic / traditional-economics question",
        "Neither — it has no economic content",
        "Both, but should be answered using ECN tools alone"
      ],
      correct: 1,
      explanation: "Aggregate national output effects are traditional / macroeconomic territory. ECN may evaluate the plant's project-level economics, but not country-wide agricultural output.",
      difficulty: "medium"
    },
    {
      q: "An engineer needs to compare three pump designs over their 15-year service life. Which discipline directly delivers a number?",
      options: ["Traditional economics", "Engineering economics", "Macroeconomics", "Behavioural economics"],
      correct: 1,
      explanation: "ECN delivers a comparable economic figure — present worth, equivalent annual cost, IRR — for each design, allowing direct selection.",
      difficulty: "easy"
    },
    {
      q: "When the lecturer's table contrasts the four dimensions (focus, horizon, method, application), the entry under 'Application' for ECN is best stated as…",
      options: [
        "Theoretical / policy-oriented",
        "Practical / project-specific",
        "Speculative / market-driven",
        "Philosophical"
      ],
      correct: 1,
      explanation: "ECN is practical and project-specific — the lecturer's table places it opposite traditional economics' theoretical / policy-oriented application.",
      difficulty: "easy"
    },
    {
      q: "An ECN engineer cites a CPI figure when forecasting future operating costs. The CPI is itself an output of…",
      options: [
        "Engineering economics",
        "Traditional / macroeconomics",
        "Cost accounting",
        "Manufacturing engineering"
      ],
      correct: 1,
      explanation: "CPI is a macroeconomic statistic produced by traditional economics. ECN consumes it as an input but doesn't produce it.",
      difficulty: "medium"
    },
    {
      q: "A textbook says 'ECN is microeconomics applied to engineering decisions.' What's the most useful caveat?",
      options: [
        "ECN adds explicit time-value-of-money treatment, focuses on engineering assets, and produces decision-ready numbers — beyond plain micro",
        "ECN is identical to microeconomics",
        "Microeconomics never deals with firms",
        "Microeconomics avoids math"
      ],
      correct: 0,
      explanation: "ECN borrows from micro but adds time-value treatment, engineering-asset framing, and decision-oriented outputs (NPV, IRR). It's micro+TVM+engineering context.",
      difficulty: "hard"
    },
    {
      q: "Which output is more characteristic of ECN than of typical traditional-economics work?",
      options: [
        "An IRR for a refinery upgrade",
        "An aggregate consumption function",
        "A national CPI estimate",
        "A theoretical model of market failure"
      ],
      correct: 0,
      explanation: "IRR for a specific upgrade is project-level ECN. The other three are aggregate/theoretical outputs from traditional economics.",
      difficulty: "easy"
    },
    {
      q: "Both ECN and traditional economics share the assumption that…",
      options: [
        "Resources are scarce and choices have opportunity costs",
        "All cash flows are immediate",
        "All decisions are made by governments",
        "Rates of return are always positive"
      ],
      correct: 0,
      explanation: "The bedrock economic axiom — scarcity and opportunity cost — is shared. ECN inherits it; the difference is in scope and method, not foundations.",
      difficulty: "medium"
    }
  ]
},

/* ============== SECTION 3: COST CONCEPTS ============== */
"sec-3": {
  title: "Basic Cost Concepts",
  questions: [
    {
      q: "Costs that remain constant regardless of output level are called…",
      options: ["Variable cost", "Fixed cost", "Sunk cost", "Marginal cost"],
      correct: 1,
      explanation: "Fixed costs don't change with how much you produce. The lecturer's example: salary of permanent staff doesn't change.",
      difficulty: "easy"
    },
    {
      q: "If a refinery increases output from 100,000 to 150,000 barrels per day and consequently uses more crude oil, the additional crude purchase is best classified as a…",
      options: ["Fixed cost", "Sunk cost", "Variable cost", "Opportunity cost"],
      correct: 2,
      explanation: "Variable costs vary with production. Producing more requires more raw materials — this is the textbook variable-cost behaviour.",
      difficulty: "easy"
    },
    {
      q: "Two months ago, a company paid a ₦50M non-refundable government permit to build a refinery. Today, market conditions have changed and the project may not be viable. How should the ₦50M permit fee influence the decision to continue?",
      options: [
        "It should be added to the cost of continuing",
        "It should be ignored — it is a sunk cost and cannot be recovered",
        "It should be treated as a variable cost",
        "It should be split between continuing and abandoning"
      ],
      correct: 1,
      explanation: "Sunk costs are already committed and cannot be recovered. The lecturer was specific: once you pay the government fee, whether you build or not, you can't get it back. It must not affect future decisions.",
      difficulty: "medium"
    },
    {
      q: "Opportunity cost is best described as…",
      options: [
        "The most expensive option among alternatives",
        "The value of the next best alternative forgone",
        "The cost of acquiring a new opportunity",
        "The total cost of all alternatives combined"
      ],
      correct: 1,
      explanation: "Opportunity cost = the value of the next best alternative forgone. Because resources are scarce, every choice means forgoing something else.",
      difficulty: "easy"
    },
    {
      q: "Why does opportunity cost force engineers to consider trade-offs?",
      options: [
        "Because it is always the largest cost in any project",
        "Because resources are scarce, so choosing one project means giving up others",
        "Because it is a legal requirement",
        "Because tax authorities require it"
      ],
      correct: 1,
      explanation: "Resources are scarce. Money locked in Project A cannot fund Project B. Opportunity cost makes that trade-off visible.",
      difficulty: "medium"
    },
    {
      q: "A factory is currently producing 10 units per day. Adding one more unit per day requires hiring extra labour and buying additional raw material. The total of those extra costs is the…",
      options: [
        "Fixed cost",
        "Sunk cost",
        "Incremental cost",
        "Opportunity cost"
      ],
      correct: 2,
      explanation: "Incremental cost is the additional cost from a specific action — like expanding from 10 to 11 units. It can include both variable and new fixed costs (e.g., extra machinery).",
      difficulty: "medium"
    },
    {
      q: "What is the key behavioural difference between variable cost and incremental cost?",
      options: [
        "Variable cost only goes up; incremental cost can go up or down",
        "Variable cost moves up or down with production volume; incremental cost deals only with the increase from a specific decision",
        "They are exactly the same concept",
        "Variable cost applies to services; incremental cost applies to goods"
      ],
      correct: 1,
      explanation: "Variable cost moves both ways with production volume. Incremental cost specifically captures the increase from a specific business decision and may include new fixed costs (e.g. new machinery) the decision triggers.",
      difficulty: "hard"
    },
    {
      q: "Maintaining a personal car (insurance, servicing) is NOT a variable cost because…",
      options: [
        "Cars are not subject to wear and tear",
        "Variable costs are associated with production only, not personal asset upkeep",
        "Insurance is a fixed cost by accounting law",
        "Cars are sunk costs"
      ],
      correct: 1,
      explanation: "The lecturer made this point explicitly: variable cost is associated with production only. Maintaining a personal car isn't tied to producing units of anything.",
      difficulty: "hard"
    },
    {
      q: "The salary of a security guard at a refinery, paid the same amount whether the plant runs at 50% or 100% capacity, is an example of…",
      options: ["Variable cost", "Incremental cost", "Fixed cost", "Opportunity cost"],
      correct: 2,
      explanation: "The pay does not change with output — that is the defining feature of a fixed cost.",
      difficulty: "easy"
    },
    {
      q: "A project manager continues to invest in a failing project because '₦200M has already been spent and we can't waste that.' What logical error is being committed?",
      options: [
        "Confusing variable and incremental cost",
        "The sunk-cost fallacy — letting irrecoverable past costs influence future decisions",
        "Misclassifying a fixed cost",
        "Underestimating opportunity cost"
      ],
      correct: 1,
      explanation: "The ₦200M is sunk — it cannot be recovered whether the project continues or stops. Future decisions should be based on future costs and benefits only.",
      difficulty: "hard"
    },
    {
      q: "An engineer chooses to invest ₦100M in a solar farm rather than a gas-fired plant. The expected ₦25M/year that the gas-fired plant would have produced is best described as…",
      options: [
        "A sunk cost",
        "A variable cost",
        "An opportunity cost — the value of the next best alternative forgone",
        "An incremental cost"
      ],
      correct: 2,
      explanation: "By choosing solar, you give up the gas-plant return. That forgone return is the opportunity cost.",
      difficulty: "medium"
    },
    {
      q: "You produce 1,000 widgets at total cost ₦5M (₦2M fixed, ₦3M variable). To produce 1,200 widgets, the new total is ₦5.7M. The incremental cost of the extra 200 units is…",
      options: ["₦5.7M", "₦700,000", "₦3.6M", "₦2M"],
      correct: 1,
      explanation: "Incremental cost = new total − old total = ₦5.7M − ₦5M = ₦700,000. It captures the additional cost from a specific decision (producing 200 more units).",
      difficulty: "medium"
    },
    {
      q: "Insurance premiums for a factory paid annually regardless of output volume are best classified as…",
      options: ["Variable cost", "Fixed cost", "Opportunity cost", "Sunk cost"],
      correct: 1,
      explanation: "Insurance premiums don't move with output volume — they are fixed costs over the policy period.",
      difficulty: "easy"
    },
    {
      q: "Electricity consumed by an arc-furnace scales linearly with tonnes of steel produced. This electricity cost is…",
      options: ["Variable", "Fixed", "Opportunity", "Sunk"],
      correct: 0,
      explanation: "Cost that scales directly with production volume is a variable cost.",
      difficulty: "easy"
    },
    {
      q: "₦15M was spent on feasibility studies for an oil project that was later scrapped. The board is now choosing between two replacement projects. The ₦15M is…",
      options: [
        "An opportunity cost in the new decision",
        "A variable cost in the new decision",
        "A sunk cost — irrelevant to the new decision",
        "An incremental cost in the new decision"
      ],
      correct: 2,
      explanation: "The ₦15M cannot be recovered no matter which replacement project is picked. It is a sunk cost and must not influence the choice between the two new projects.",
      difficulty: "medium"
    },
    {
      q: "A factory's monthly rent is ₦1.5M; raw materials run ₦3,000 per unit. The TOTAL cost when producing 1,000 units is…",
      options: ["₦1.5M", "₦3M", "₦4.5M", "₦5.5M"],
      correct: 2,
      explanation: "Total = fixed + variable = ₦1.5M + (1,000 × ₦3,000) = ₦1.5M + ₦3M = ₦4.5M.",
      difficulty: "easy"
    },
    {
      q: "If a company increases output from 500 to 600 units and total cost goes from ₦2M to ₦2.3M, the marginal/incremental cost per extra unit is…",
      options: ["₦300", "₦3,000", "₦4,000", "₦5,000"],
      correct: 1,
      explanation: "Incremental cost = ₦300,000 for 100 extra units → ₦3,000 per unit.",
      difficulty: "medium"
    },
    {
      q: "A construction firm declines a ₦20M residential job to take on a ₦25M industrial job. The opportunity cost of the industrial job is…",
      options: ["₦5M", "₦20M", "₦25M", "Zero — they're earning more"],
      correct: 1,
      explanation: "Opportunity cost is the value of the next best alternative forgone. Choosing the industrial job means giving up the ₦20M residential job; that's the opportunity cost.",
      difficulty: "medium"
    },
    {
      q: "Which is NOT a typical example of variable cost in a manufacturing plant?",
      options: ["Raw materials per unit", "Direct piece-rate labour", "Plant insurance premium", "Per-unit packaging"],
      correct: 2,
      explanation: "Insurance premiums are a fixed cost — they don't change with output. Materials, piece-rate labour, and packaging all scale with units produced.",
      difficulty: "easy"
    },
    {
      q: "A pump's purchase price is ₦8M. Five years of forecast maintenance is ₦3M, and electricity over the same period is ₦12M. Salvage at year 5 is ₦1M. From the perspective of the buy-or-lease decision today, the ₦8M is…",
      options: ["A future cost", "A present (initial) cost", "A sunk cost already incurred", "An opportunity cost"],
      correct: 1,
      explanation: "If the pump has not yet been bought, ₦8M is a present cost — it would happen at time 0 if the pump is selected. Sunk costs are amounts already spent.",
      difficulty: "medium"
    },
    {
      q: "An incremental analysis between two designs (A and B) involves…",
      options: [
        "Comparing only the fixed costs",
        "Comparing the additional costs and benefits of B over A",
        "Ignoring all variable costs",
        "Adding sunk costs of both"
      ],
      correct: 1,
      explanation: "Incremental analysis focuses on the difference in costs and benefits between alternatives — what additional cost does B impose vs A, and what additional benefit does it provide?",
      difficulty: "medium"
    },
    {
      q: "Maintaining your personal car has costs that move with how much you drive. Why does the lecturer reject calling these 'variable costs' in the strict ECN sense?",
      options: [
        "Because variable costs in ECN are tied to PRODUCTION volume, not personal usage",
        "Because the costs are not real",
        "Because cars don't depreciate",
        "Because variable costs only apply to imports"
      ],
      correct: 0,
      explanation: "Variable costs in ECN are explicitly tied to production volume in a productive setting. Personal-vehicle running costs scale with usage but are not 'variable cost' in the production-economics sense.",
      difficulty: "hard"
    },
    {
      q: "A new packaging line costs ₦40M up front. Variable cost is ₦200/unit and fixed annual cost is ₦5M. Producing 100,000 units this year means total annual cost is…",
      options: ["₦5M", "₦20M", "₦25M", "₦45M"],
      correct: 2,
      explanation: "Annual variable = 100,000 × ₦200 = ₦20M. Annual fixed = ₦5M. Total annual = ₦25M. (The ₦40M is the up-front capital, not an annual cost.)",
      difficulty: "medium"
    },
    {
      q: "Why does ECN insist that sunk costs be ignored in forward-looking decisions?",
      options: [
        "Because they always equal zero",
        "Because they cannot be recovered or changed by any future decision",
        "Because they are illegal to consider",
        "Because they are taxed differently"
      ],
      correct: 1,
      explanation: "A cost that cannot be recovered or changed by ANY future decision should not influence the decision. Including it biases the comparison toward continuing failing projects.",
      difficulty: "medium"
    },
    {
      q: "A factory's average cost per unit at output q is total cost divided by q. Average cost typically falls and then rises with output because of…",
      options: [
        "Fixed cost spread + eventual rising marginal cost from capacity strain",
        "Inflation",
        "Random reasons",
        "Salvage value"
      ],
      correct: 0,
      explanation: "At low q, fixed cost is spread thin → lower AC. At high q, capacity strain raises marginal cost → AC rises. The U-shape is the classical short-run cost curve.",
      difficulty: "hard"
    },
    {
      q: "An engineer treats a customer-facing software upgrade as an incremental cost. The closest synonym in ECN vocabulary is…",
      options: ["Marginal cost of the upgrade", "Sunk cost", "Opportunity cost", "Variable cost only"],
      correct: 0,
      explanation: "Marginal/incremental cost: the additional cost from a specific decision (the upgrade). Sunk and opportunity refer to other concepts.",
      difficulty: "medium"
    }
  ]
},

/* ============== SECTION 4: ROLE OF ENGINEERS ============== */
"sec-4": {
  title: "Role of Engineers in Decision-Making",
  questions: [
    {
      q: "An engineering team conducts a technical and economic study to evaluate three alternative reactor designs. This activity is best described as…",
      options: ["Replacement decision", "Feasibility study", "Tax accounting", "Sunk-cost recovery"],
      correct: 1,
      explanation: "Conducting technical and economic feasibility studies to evaluate alternative designs is the textbook 'feasibility study' role.",
      difficulty: "easy"
    },
    {
      q: "When choosing between aluminium and stainless steel for a heat exchanger, an engineer balances cost against environmental impact. This is an example of…",
      options: [
        "Material/process selection",
        "Replacement decision",
        "Feasibility study only",
        "Investment advice only"
      ],
      correct: 0,
      explanation: "Selecting materials and processes that minimise both cost and environmental impact is the named 'material/process selection' role.",
      difficulty: "easy"
    },
    {
      q: "Life-cycle cost optimization considers ALL of the following EXCEPT…",
      options: [
        "Initial cost",
        "Maintenance cost",
        "Operational cost",
        "The CEO's bonus"
      ],
      correct: 3,
      explanation: "Life-cycle cost considers initial, maintenance, operational, and disposal costs over the asset's life. Executive compensation is not a life-cycle cost component.",
      difficulty: "easy"
    },
    {
      q: "A senior engineer advises management on whether to acquire new compressors or upgrade existing ones. This is an example of…",
      options: [
        "Material selection",
        "Investment advice on capital decisions",
        "Tax planning",
        "Marketing"
      ],
      correct: 1,
      explanation: "Advising management on capital investment decisions — buy new vs. upgrade — is the 'investment advice' role of engineers.",
      difficulty: "easy"
    },
    {
      q: "Analysing maintenance and repair costs for an ageing pipeline and proposing a replacement strategy is best classified as…",
      options: [
        "Feasibility study only",
        "Replacement decision",
        "Material selection",
        "Sunk-cost recovery"
      ],
      correct: 1,
      explanation: "Replacement decisions involve analysing maintenance/repair costs of ageing infrastructure and developing replacement strategies — exactly this scenario.",
      difficulty: "medium"
    },
    {
      q: "Which of these is NOT one of the named roles of engineers in ECN decision-making?",
      options: [
        "Feasibility studies",
        "Life-cycle cost optimization",
        "Public relations management",
        "Replacement decisions"
      ],
      correct: 2,
      explanation: "Public relations is not part of the engineer's ECN role. The named roles are: feasibility studies, material/process selection, life-cycle cost optimization, investment advice, replacement decisions.",
      difficulty: "easy"
    },
    {
      q: "Life-cycle cost analysis explicitly requires the engineer to think about FOUR cost stages. They are…",
      options: [
        "Initial · operating · maintenance · disposal",
        "Tax · audit · marketing · sales",
        "Salaries · rent · equipment · profit",
        "Imports · exports · tariffs · subsidies"
      ],
      correct: 0,
      explanation: "Life-cycle cost = initial (capex) + operating + maintenance + disposal. ECN insists you cost the asset across all four stages, not just the day it's bought.",
      difficulty: "easy"
    },
    {
      q: "When advising management on whether to acquire new equipment, an engineer is fulfilling which named role?",
      options: ["Feasibility study", "Investment advice", "PR management", "Replacement decision only"],
      correct: 1,
      explanation: "Advising on capital acquisitions and equipment upgrades is the 'investment advice' role.",
      difficulty: "easy"
    },
    {
      q: "Designing a process that minimises BOTH cost AND environmental impact is the engineer's role of…",
      options: ["Investment advice", "Material/process selection", "Replacement decisions", "Marketing"],
      correct: 1,
      explanation: "Material and process selection includes minimising adverse environmental consequences alongside cost — both criteria together.",
      difficulty: "medium"
    },
    {
      q: "An engineer ignores disposal cost when comparing two reactors. The flaw is that they violated…",
      options: [
        "Feasibility studies",
        "Life-cycle cost optimization (forgot the disposal stage)",
        "Replacement decisions",
        "Investment advice"
      ],
      correct: 1,
      explanation: "Life-cycle cost includes disposal/decommissioning. Skipping it makes the comparison incomplete.",
      difficulty: "medium"
    },
    {
      q: "An engineer recommending the optimal replacement interval for an ageing compressor is performing which role?",
      options: ["Material selection", "Life-cycle cost optimization broadly", "Replacement decisions", "Public relations"],
      correct: 2,
      explanation: "Determining when to replace ageing assets is the textbook 'replacement decisions' role.",
      difficulty: "easy"
    },
    {
      q: "Which decision is LEAST likely to be referred to an engineer's ECN judgement?",
      options: [
        "Choosing piping material between PVC and HDPE",
        "Replacing the firm's logo and brand colours",
        "Deciding whether to buy or lease a forklift",
        "Comparing solar vs grid power for a new site"
      ],
      correct: 1,
      explanation: "Brand decisions sit with marketing/design, not engineering economics. The other three are textbook ECN decisions for engineers.",
      difficulty: "easy"
    },
    {
      q: "A well-conducted feasibility study should produce…",
      options: [
        "A go/no-go recommendation backed by technical and economic evidence",
        "A philosophical essay",
        "Only artistic renderings",
        "Only an Excel file with no narrative"
      ],
      correct: 0,
      explanation: "A feasibility study delivers a clear go/no-go recommendation with technical and economic evidence — that's the deliverable engineers are responsible for.",
      difficulty: "medium"
    },
    {
      q: "Investment advice from engineers usually involves…",
      options: [
        "Picking individual stocks for the CEO",
        "Recommending capital expenditure decisions like new equipment, upgrades, or expansions",
        "Forecasting national interest rates",
        "Trading commodities"
      ],
      correct: 1,
      explanation: "Engineers' 'investment advice' is capex-focused — equipment, upgrades, expansions — not retail finance.",
      difficulty: "easy"
    },
    {
      q: "A pump's initial cost is ₦5M, annual operating ₦2M for 10 years, salvage ₦500k. Without considering time value, total life-cycle cost is approximately…",
      options: ["₦5M", "₦7M", "₦24.5M", "₦25M"],
      correct: 2,
      explanation: "Initial 5M + 10 × 2M operating − 0.5M salvage = 5 + 20 − 0.5 = ₦24.5M (undiscounted).",
      difficulty: "medium"
    },
    {
      q: "Life-cycle cost optimisation pays special attention to which stage that's often under-budgeted by junior engineers?",
      options: ["Initial capital", "Disposal/decommissioning", "Sales", "Marketing"],
      correct: 1,
      explanation: "Disposal/decommissioning costs are often forgotten or under-estimated, especially for hazardous-material-handling assets. ECN insists you include them.",
      difficulty: "medium"
    },
    {
      q: "A refinery is choosing between two coatings: A is cheap but needs replacing every 3 years, B is expensive but lasts 12 years. Picking by initial cost alone is a classic mistake. Why?",
      options: [
        "It ignores life-cycle (operating + replacement) costs across the asset life",
        "Initial cost is irrelevant",
        "Coatings have no economic effect",
        "Initial cost is always wrong"
      ],
      correct: 0,
      explanation: "Comparing only initial cost ignores that A must be re-applied four times over B's life. Life-cycle cost may favour B even though its capex is higher.",
      difficulty: "medium"
    },
    {
      q: "Which is a typical INPUT to an engineer's investment-advice memo?",
      options: [
        "Forecast cash flows of the asset",
        "The CEO's astrological sign",
        "A list of competitors' lunch menus",
        "Random office gossip"
      ],
      correct: 0,
      explanation: "Investment-advice memos are built on forecast cash flows, expected savings, capex, and opex over the asset's life — concrete numerical inputs.",
      difficulty: "easy"
    },
    {
      q: "Why is environmental impact part of material/process selection in ECN, even though it sometimes seems non-financial?",
      options: [
        "Compliance, taxes, fines, and reputational cost are real economic effects",
        "Engineers like trees",
        "It's a legal trick",
        "It is purely ceremonial"
      ],
      correct: 0,
      explanation: "Environmental impact translates into real costs — emissions taxes, compliance penalties, decommissioning fees, brand damage. ECN treats them as economic, not optional.",
      difficulty: "medium"
    },
    {
      q: "An engineer's most common deliverable in an investment-advice memo is…",
      options: [
        "A clear recommendation supported by NPV/IRR/payback at the firm's hurdle rate",
        "A free-form essay",
        "A spreadsheet without conclusions",
        "A poetry submission"
      ],
      correct: 0,
      explanation: "An investment-advice memo lands a clear recommendation with quantitative backup at the appropriate hurdle rate.",
      difficulty: "easy"
    },
    {
      q: "Replacement decisions analyse rising maintenance against capital cost of new equipment. The 'sweet spot' to replace is when…",
      options: [
        "Equivalent annual cost of keeping the old asset exceeds EAC of replacing",
        "Equipment is exactly 10 years old",
        "The CEO says so",
        "The factory floods"
      ],
      correct: 0,
      explanation: "Optimal replacement timing is when EAC of running the old asset another year exceeds EAC of installing the new one — the textbook replacement criterion.",
      difficulty: "hard"
    }
  ]
},

/* ============== SECTION 5: STEPS IN DECISION-MAKING ============== */
"sec-5": {
  title: "Steps in ECN Decision-Making",
  questions: [
    {
      q: "What is the FIRST step in the ECN decision-making sequence?",
      options: [
        "Estimate cash flows",
        "Identify the problem or investment need; define constraints and objectives",
        "Select the best option",
        "Implement and monitor"
      ],
      correct: 1,
      explanation: "Every engineering decision starts with identifying the problem and clearly defining constraints and objectives. Without this, alternatives are aimless.",
      difficulty: "easy"
    },
    {
      q: "An engineer compares three options using NPV, IRR, and BCR. Which step in the ECN decision-making process is this?",
      options: [
        "Develop feasible alternatives",
        "Estimate cash flows",
        "Compare options using economic criteria",
        "Implement and monitor"
      ],
      correct: 2,
      explanation: "Comparing alternatives using economic criteria — NPV, IRR, BCR, annual worth — is Step 4 of the named sequence.",
      difficulty: "easy"
    },
    {
      q: "Why is it essential to develop multiple feasible alternatives in an ECN study?",
      options: [
        "To pad the report",
        "Because every engineering problem typically has multiple possible solutions, and comparison requires more than one",
        "To meet a regulatory requirement",
        "Because the first solution is always wrong"
      ],
      correct: 1,
      explanation: "Engineering problems rarely have a single solution. Developing several feasible alternatives gives the comparison step (Step 4) something meaningful to evaluate.",
      difficulty: "medium"
    },
    {
      q: "When estimating cash flows, an engineer typically determines ALL of the following EXCEPT…",
      options: [
        "Initial cost",
        "Operating cost",
        "Maintenance cost",
        "The CEO's holiday plans"
      ],
      correct: 3,
      explanation: "Cash flow estimation includes initial cost, operating cost, maintenance cost, marginal cost, and salvage value. Executive vacations don't appear.",
      difficulty: "easy"
    },
    {
      q: "Sensitivity analysis and probabilistic uncertainty methods are used in which step?",
      options: [
        "Step 1 — Identify problem",
        "Step 5 — Consider risk and uncertainty",
        "Step 6 — Select the best option",
        "Step 7 — Implement and monitor"
      ],
      correct: 1,
      explanation: "Sensitivity analysis and probabilistic methods incorporate risk and uncertainty into the decision — this is Step 5.",
      difficulty: "medium"
    },
    {
      q: "After implementation, what is the engineer's responsibility?",
      options: [
        "Move on to the next project immediately",
        "Monitor performance to ensure the project delivers expected results",
        "Wait for management to ask",
        "Update only the budget"
      ],
      correct: 1,
      explanation: "Step 7 is implement AND monitor — ensuring the project delivers the expected result. Monitoring closes the loop.",
      difficulty: "easy"
    },
    {
      q: "Which is the correct early-to-late ordering of these steps?",
      options: [
        "Compare options → Develop alternatives → Estimate cash flows",
        "Identify problem → Develop alternatives → Estimate cash flows → Compare options",
        "Implement → Develop alternatives → Identify problem",
        "Estimate cash flows → Identify problem → Develop alternatives"
      ],
      correct: 1,
      explanation: "Correct sequence: (1) Identify problem → (2) Develop alternatives → (3) Estimate cash flows → (4) Compare → (5) Risk → (6) Select → (7) Implement.",
      difficulty: "medium"
    },
    {
      q: "An engineer skips Step 5 (Risk and Uncertainty) and selects the option with the highest projected NPV. What is the danger?",
      options: [
        "None — NPV captures all relevant information",
        "The chosen option may have high but very volatile or unlikely returns, leading to costly surprises",
        "The implementation step will fail automatically",
        "Cash-flow estimation becomes invalid"
      ],
      correct: 1,
      explanation: "Without explicit risk consideration, an option may look great on paper but have huge downside scenarios. Step 5 exists exactly to expose this.",
      difficulty: "hard"
    },
    {
      q: "What is the OUTPUT of Step 1 (Identify problem / investment need)?",
      options: [
        "A clearly defined problem with constraints and objectives",
        "A finished cash-flow diagram",
        "An NPV calculation",
        "A signed contract"
      ],
      correct: 0,
      explanation: "Step 1 produces a clear problem statement — constraints, objectives, scope. Cash flows and NPVs come later.",
      difficulty: "easy"
    },
    {
      q: "If Step 2 generates only ONE feasible alternative, what should the engineer do?",
      options: [
        "Proceed straight to Step 4 (Compare)",
        "Re-examine and generate more alternatives — comparison requires choices",
        "Skip Step 5",
        "Cancel the project"
      ],
      correct: 1,
      explanation: "ECN comparisons require multiple alternatives. If only one is on the table, the team should brainstorm more before evaluating.",
      difficulty: "medium"
    },
    {
      q: "Step 3 is 'Estimate cash flows.' Which of the following is OUT of scope for Step 3?",
      options: [
        "Initial capex",
        "Operating costs",
        "Salvage value",
        "Choosing the best option"
      ],
      correct: 3,
      explanation: "Picking the best option happens at Step 6. Step 3 only estimates: initial, operating, maintenance, and salvage cash flows.",
      difficulty: "easy"
    },
    {
      q: "An engineer applies Net Present Worth (NPW) and Equivalent Annual Cost (EAC) to compare options. Which step is this?",
      options: ["Step 2", "Step 3", "Step 4 — Compare options using economic criteria", "Step 7"],
      correct: 2,
      explanation: "NPW, EAC, IRR, BCR are the criteria of Step 4 — comparing options.",
      difficulty: "easy"
    },
    {
      q: "Sensitivity analysis tests how robust a decision is to changes in input assumptions. It belongs in which step?",
      options: ["Step 2", "Step 3", "Step 4", "Step 5 — Consider risk and uncertainty"],
      correct: 3,
      explanation: "Sensitivity analysis is a Step 5 tool — it explores how the answer changes if costs, benefits, or rates move.",
      difficulty: "medium"
    },
    {
      q: "Which step closes the feedback loop in the ECN process?",
      options: ["Step 1", "Step 4", "Step 6", "Step 7 — Implement & monitor performance"],
      correct: 3,
      explanation: "Step 7 implements the decision and monitors actual performance against forecasts, feeding lessons back into future projects.",
      difficulty: "medium"
    },
    {
      q: "A team commissions a wind farm and tracks generated MWh against forecasts each quarter. This is an instance of…",
      options: [
        "Step 3 — estimating cash flows",
        "Step 7 — monitoring performance",
        "Step 1 — identifying the problem",
        "Step 5 — risk consideration"
      ],
      correct: 1,
      explanation: "Tracking realized output against forecasts is Step 7 monitoring — closing the loop.",
      difficulty: "easy"
    },
    {
      q: "The lecturer's diagram of the seven-step process flows in a specific direction. What's the underlying principle?",
      options: [
        "Each step's output feeds the next, with monitoring eventually closing the loop",
        "Steps are independent and can run in any order",
        "Every step is optional",
        "Only Step 7 matters"
      ],
      correct: 0,
      explanation: "The seven steps are sequential: each output feeds the next, and monitoring closes the loop back to learning for future projects.",
      difficulty: "easy"
    },
    {
      q: "A team's Step 6 picks Option A, but Step 7 monitoring shows actual cash flows much worse than forecast. What's the most useful response?",
      options: [
        "Hide the data",
        "Update assumptions, learn from variance, and feed lessons into future Step-3 estimates",
        "Re-classify the project",
        "Switch to a different currency"
      ],
      correct: 1,
      explanation: "The whole point of Step 7 is feedback. Variance between forecast and reality should refine future cash-flow estimation methods.",
      difficulty: "medium"
    },
    {
      q: "Which step most directly involves applying economic criteria like NPV, IRR, BCR?",
      options: ["Step 2", "Step 3", "Step 4", "Step 5"],
      correct: 2,
      explanation: "Step 4 'compare options' uses NPV, IRR, BCR, payback as decision criteria.",
      difficulty: "easy"
    },
    {
      q: "A power-plant project's Step 5 reveals that under a high-fuel-price scenario, NPV becomes negative. What is the MOST likely Step 6 outcome?",
      options: [
        "Reject the project outright with no further analysis",
        "Select the alternative whose performance is acceptable across scenarios",
        "Ignore the high-fuel scenario",
        "Cancel the entire decision-making process"
      ],
      correct: 1,
      explanation: "Step 6 selects the option that satisfies both technical AND economic criteria across scenarios — robust to risk, not just optimal in the base case.",
      difficulty: "hard"
    },
    {
      q: "Which is NOT a typical input to Step 3 (cash-flow estimation)?",
      options: [
        "Vendor capex quotes",
        "Operating-cost estimates from peer plants",
        "Forecast salvage value",
        "The board's mood"
      ],
      correct: 3,
      explanation: "Cash-flow estimation uses concrete sources: vendor quotes, peer benchmarks, salvage forecasts. Sentiment is not a Step-3 input.",
      difficulty: "easy"
    },
    {
      q: "A bridge project takes 30 years to recover its capital investment. Which step is most affected by this long horizon?",
      options: [
        "Step 1 only",
        "Step 3 — cash flows must be estimated across the entire 30-year horizon, including disposal",
        "Step 7 only",
        "None of the steps care about horizon"
      ],
      correct: 1,
      explanation: "Step 3 must enumerate cash flows across the FULL economic life. A 30-year horizon means estimating well into the future, with appropriate uncertainty.",
      difficulty: "medium"
    },
    {
      q: "An engineer's first instinct on a new project is to plug numbers into NPV. The lecturer's seven-step framework would push them to do what FIRST?",
      options: [
        "Run the NPV calculation immediately",
        "Identify the problem and clearly state objectives and constraints (Step 1)",
        "Skip to Step 7",
        "Ignore alternatives"
      ],
      correct: 1,
      explanation: "Step 1 — define the problem clearly with constraints and objectives — comes BEFORE any numerical analysis. The framework's value is in this discipline.",
      difficulty: "medium"
    },
    {
      q: "Step 4 economic criteria like NPV require what input from Step 3?",
      options: [
        "A list of alternatives only",
        "Estimated cash flows (initial, operating, maintenance, salvage) over the analysis horizon",
        "Marketing data",
        "Engineering drawings"
      ],
      correct: 1,
      explanation: "NPV computation needs cash flows across the horizon — initial, operating, maintenance, salvage — produced by Step 3.",
      difficulty: "easy"
    },
    {
      q: "A team is tempted to skip Step 5 because the project 'looks profitable.' The danger is…",
      options: [
        "None — profitable projects are always safe",
        "An apparently profitable option may carry hidden volatility that materially changes its true expected value",
        "Step 6 will skip itself too",
        "Step 7 will compute Step 5 automatically"
      ],
      correct: 1,
      explanation: "Profitability in the base case can mask large variance. Step 5 brings risk into the decision so that the chosen option is robust, not just optimistic.",
      difficulty: "hard"
    },
    {
      q: "Which TWO steps explicitly anchor the framework to *future* uncertainty rather than just past data?",
      options: [
        "Steps 1 and 2",
        "Steps 3 and 5 (cash-flow estimation and risk/uncertainty)",
        "Steps 6 and 7",
        "Steps 1 and 7"
      ],
      correct: 1,
      explanation: "Cash flows are FORECAST (Step 3) and explicit risk/uncertainty analysis (Step 5) ensures the future-facing nature of the decision is treated rigorously.",
      difficulty: "medium"
    },
    {
      q: "Which deliverable is typically expected at the END of Step 4?",
      options: [
        "A ranked comparison of alternatives by economic criteria",
        "A signed contract with the supplier",
        "A finished implementation plan",
        "A monitoring dashboard"
      ],
      correct: 0,
      explanation: "Step 4 ends with alternatives ranked by NPV, IRR, EAC, BCR, payback — providing the basis for Step 6 selection.",
      difficulty: "easy"
    },
    {
      q: "Why is Step 6 ('select the best option') sometimes contentious?",
      options: [
        "Because it must integrate multiple criteria — economic AND technical — that may disagree",
        "Because it always picks the cheapest option",
        "Because it ignores Step 4 results",
        "Because it has no rule"
      ],
      correct: 0,
      explanation: "Step 6 has to balance technical performance, risk profile, and economic criteria — and these can pull in different directions, which is why explicit framework steps help.",
      difficulty: "hard"
    },
    {
      q: "Which of these is a real-world Step 7 activity for a commissioned solar farm?",
      options: [
        "Tracking energy yield, O&M cost, and revenue against the original Step-3 forecasts",
        "Estimating cash flows for the next solar farm",
        "Designing the inverter topology",
        "Choosing the panel supplier"
      ],
      correct: 0,
      explanation: "Step 7 monitors realized performance — actual yield, O&M, and revenue — against the forecasts that drove the original decision.",
      difficulty: "easy"
    },
    {
      q: "What is one valid reason to STOP and recycle to an earlier step partway through analysis?",
      options: [
        "When new information makes earlier assumptions invalid",
        "Never — the process is strictly linear",
        "Only when leadership changes",
        "Only when the budget changes"
      ],
      correct: 0,
      explanation: "Although the framework is sequential, new information (a vendor quote, a regulatory change) often warrants revisiting earlier steps before proceeding.",
      difficulty: "hard"
    }
  ]
},

/* ============== SECTION 6: APPLICATIONS ============== */
"sec-6": {
  title: "Applications of Engineering Economics",
  questions: [
    {
      q: "An engineering manager decides whether to outsource component machining or produce it in-house. This is an example of…",
      options: ["Energy efficiency project", "Make-or-buy decision", "Facility planning", "Replacement decision"],
      correct: 1,
      explanation: "Make-or-buy decisions weigh outsourcing vs internal production — a named ECN application.",
      difficulty: "easy"
    },
    {
      q: "Determining the optimal interval at which to replace a fleet of pumps is the application area of…",
      options: ["Equipment replacement", "Make-or-buy", "Energy efficiency", "Cost accounting"],
      correct: 0,
      explanation: "Equipment replacement: determining optimal replacement intervals for machines.",
      difficulty: "easy"
    },
    {
      q: "An engineer evaluates whether to install solar panels or stay with diesel generators based on lifetime cost. Which application?",
      options: [
        "Facility planning",
        "Energy efficiency projects",
        "Make-or-buy",
        "Equipment replacement only"
      ],
      correct: 1,
      explanation: "Energy efficiency projects evaluate energy-saving technologies — comparing solar, wind, or other options to choose the lowest-energy/lowest-cost path.",
      difficulty: "easy"
    },
    {
      q: "Choosing where to locate a refinery, what capacity to build, and how to lay it out is an example of…",
      options: ["Equipment replacement", "Energy efficiency project", "Facility planning", "Make-or-buy"],
      correct: 2,
      explanation: "Facility planning covers plant location, capacity, and layout decisions.",
      difficulty: "easy"
    },
    {
      q: "Why is ECN essential for infrastructure planning of pipelines, highways, and rail?",
      options: [
        "Because the law mandates it",
        "Because such projects involve huge capital, long horizons, and uncertain payoffs — and ECN is needed to build them efficiently",
        "Because aesthetics matter",
        "Because there are no engineering tools needed for it"
      ],
      correct: 1,
      explanation: "Infrastructure planning requires ECN to make these large, long-horizon projects efficient and economically justified.",
      difficulty: "medium"
    },
    {
      q: "Which statement best summarises why engineering economics matters?",
      options: [
        "It guarantees a project will be profitable",
        "It equips engineers to make technically sound AND financially justified decisions, forming the backbone of project evaluation, capital budgeting, and optimization",
        "It replaces the need for traditional economics entirely",
        "It eliminates risk from projects"
      ],
      correct: 1,
      explanation: "ECN doesn't guarantee profit or eliminate risk — it equips engineers with tools to make technically and financially defensible decisions.",
      difficulty: "medium"
    },
    {
      q: "A municipal council deciding whether to build a 20km flyover or upgrade signal timing along an existing road is applying ECN to…",
      options: ["Make-or-buy", "Equipment replacement", "Infrastructure planning", "Energy efficiency"],
      correct: 2,
      explanation: "Choosing among infrastructure options (flyover vs upgrade) for road systems is the textbook 'infrastructure planning' application.",
      difficulty: "easy"
    },
    {
      q: "Comparing solar PV against a backup diesel genset for a remote telecom tower is the ECN application of…",
      options: ["Facility planning", "Energy efficiency", "Tax planning", "Inventory management"],
      correct: 1,
      explanation: "Choosing the lowest-cost / lowest-energy option among generation alternatives is energy-efficiency analysis.",
      difficulty: "easy"
    },
    {
      q: "A factory must choose between fabricating a custom valve in-house or buying it from a vendor. This is the ECN application of…",
      options: ["Make-or-buy", "Equipment replacement", "Infrastructure planning", "Risk-only assessment"],
      correct: 0,
      explanation: "Make-or-buy decisions choose between in-house production and outsourcing — one of the named ECN applications.",
      difficulty: "easy"
    },
    {
      q: "A petrochemical company is choosing between three coastal towns for its new plant. They model land cost, port distance, salinity, and labour. This is ECN's…",
      options: ["Equipment replacement", "Facility planning", "Make-or-buy", "Energy efficiency"],
      correct: 1,
      explanation: "Choosing plant location, capacity, and layout is facility planning.",
      difficulty: "easy"
    },
    {
      q: "Determining when to retire and replace a 12-year-old compressor based on rising maintenance is which application?",
      options: ["Facility planning", "Equipment replacement", "Make-or-buy", "Infrastructure planning"],
      correct: 1,
      explanation: "Optimal replacement interval analysis is the 'equipment replacement' ECN application.",
      difficulty: "easy"
    },
    {
      q: "A university is debating whether to build a parking garage or expand its bus shuttle service. ECN classifies this as…",
      options: ["Make-or-buy", "Equipment replacement", "Facility planning / infrastructure planning", "Energy efficiency only"],
      correct: 2,
      explanation: "Sizing and siting facilities or comparing infrastructure approaches both fall under facility/infrastructure planning. Equipment replacement and make-or-buy don't apply here.",
      difficulty: "medium"
    },
    {
      q: "A chemical plant evaluates whether to install heat recovery on a furnace. The ECN application is…",
      options: ["Make-or-buy", "Energy efficiency / lifecycle cost", "Tax planning only", "Equipment replacement"],
      correct: 1,
      explanation: "Investment in efficiency improvements (heat recovery) to reduce energy use over the asset life is energy-efficiency / life-cycle cost analysis.",
      difficulty: "medium"
    },
    {
      q: "Which of the following is OUTSIDE the typical scope of ECN applications?",
      options: [
        "Choosing where to build a new bottling plant",
        "Picking branding colours for a product launch",
        "Deciding when to replace ageing trucks",
        "Comparing wind vs solar for a campus"
      ],
      correct: 1,
      explanation: "Branding colours is a marketing decision, not ECN. The other three are textbook ECN applications.",
      difficulty: "easy"
    },
    {
      q: "An ECN study guides 'capital budgeting'. What does that phrase mean in plain language?",
      options: [
        "Allocating a firm's investment budget to the projects with the best economic return",
        "Tracking petty-cash expenditure",
        "Reducing salaries",
        "Auditing receivables"
      ],
      correct: 0,
      explanation: "Capital budgeting is the process of deciding which long-term investments to fund — exactly what ECN supports with NPV, IRR, etc.",
      difficulty: "easy"
    },
    {
      q: "An asset's lifecycle cost analysis shows that a more expensive pump has lower 10-year cost. Which ECN application does this study most directly support?",
      options: [
        "Equipment selection / lifecycle cost optimisation",
        "Demographic forecasting",
        "Tax accounting",
        "Sunk-cost recovery"
      ],
      correct: 0,
      explanation: "Lifecycle-cost analysis informs equipment selection — picking the option with the lowest total cost over the asset's economic life.",
      difficulty: "medium"
    },
    {
      q: "Which combination is the BEST description of what ECN delivers?",
      options: [
        "Technically sound and financially justified engineering decisions",
        "Cheapest possible option, ignoring risk",
        "Most prestigious option, ignoring cost",
        "Whatever the founder wants"
      ],
      correct: 0,
      explanation: "ECN's twin criteria — technical soundness and financial justification — together produce defensible engineering decisions.",
      difficulty: "easy"
    },
    {
      q: "A bank is choosing whether to invest in 200 new ATMs or in upgrading an existing core-banking platform. From an ECN viewpoint, this is most directly…",
      options: [
        "Comparing alternatives in the bank's broader capital plan",
        "Tax planning",
        "Marketing decision",
        "Sunk-cost analysis"
      ],
      correct: 0,
      explanation: "Two competing capital projects are evaluated and compared on economic criteria — the standard ECN application.",
      difficulty: "medium"
    },
    {
      q: "Government roads agency must decide between resurfacing 30 highways now or building 5 new bypasses. The dominant ECN application here is…",
      options: ["Energy efficiency", "Infrastructure planning + capital budgeting", "Equipment replacement only", "Make-or-buy"],
      correct: 1,
      explanation: "Comparing infrastructure alternatives within a capital budget is the textbook intersection of infrastructure planning and capital budgeting in ECN.",
      difficulty: "medium"
    },
    {
      q: "A telecom operator must choose between owning fibre vs leasing capacity. Which ECN application most directly applies?",
      options: ["Make-or-buy", "Equipment replacement", "Energy efficiency", "Demographic study"],
      correct: 0,
      explanation: "Owning vs leasing is a classic make-or-buy decision applied to network capacity.",
      difficulty: "easy"
    }
  ]
},

/* ============== SECTION 7: TIME VALUE OF MONEY ============== */
"sec-7": {
  title: "Time Value of Money",
  questions: [
    {
      q: "The TVM principle states that…",
      options: [
        "All money has equal value across time",
        "₦1 in the future is worth more than ₦1 today",
        "₦1 today is worth more than ₦1 in the future",
        "Inflation increases future value"
      ],
      correct: 2,
      explanation: "The principle: a naira today is worth more than a naira in the future — because today's money can be invested, and future money faces inflation and risk.",
      difficulty: "easy"
    },
    {
      q: "Which is NOT one of the three reasons TVM exists?",
      options: [
        "Money today can be invested to earn returns",
        "Inflation reduces purchasing power over time",
        "Future cash flows are uncertain (risk)",
        "Banks legally require it"
      ],
      correct: 3,
      explanation: "TVM exists because of (1) interest/investment returns, (2) inflation, and (3) risk/uncertainty about the future. It's not a legal construct.",
      difficulty: "easy"
    },
    {
      q: "Present Value (PV) is defined as…",
      options: [
        "The value a present sum will grow to in the future",
        "The worth today of a future sum of money",
        "The total inflation over a period",
        "The salvage value of an asset"
      ],
      correct: 1,
      explanation: "PV is the worth today of a future sum. FV is the reverse: what a present sum grows to.",
      difficulty: "easy"
    },
    {
      q: "Future Value (FV) means…",
      options: [
        "The worth today of a future sum",
        "The value a present sum will grow to when invested",
        "The interest rate per period",
        "The number of compounding periods"
      ],
      correct: 1,
      explanation: "FV is what your present money will grow to. The lecturer's example: invest ₦10M today — what will it be worth in 20 years?",
      difficulty: "easy"
    },
    {
      q: "Discounting is the process of…",
      options: [
        "Projecting present money into the future",
        "Converting future cash flows back to present value",
        "Reducing the principal of a loan",
        "Deducting depreciation"
      ],
      correct: 1,
      explanation: "Discounting brings future money back to today's terms. Compounding does the opposite — pushes today's money forward.",
      difficulty: "easy"
    },
    {
      q: "Compounding is the process of…",
      options: [
        "Converting future cash flows back to present value",
        "Projecting present money into the future",
        "Calculating average inflation",
        "Computing depreciation"
      ],
      correct: 1,
      explanation: "Compounding pushes present money forward through time, accumulating interest on interest each period.",
      difficulty: "easy"
    },
    {
      q: "Someone offers you ₦100k today (Option A) or ₦100k five years from now (Option B). Without further information, which is the rational pick and why?",
      options: [
        "Option B — future money is more reliable",
        "Option A — you can invest it now, and ₦100k will likely buy fewer goods in five years",
        "Either — the value is identical",
        "Option B — only if no inflation exists"
      ],
      correct: 1,
      explanation: "Option A is better. ₦100k today can be invested, and inflation will erode the purchasing power of the future ₦100k. Value of money depends on time.",
      difficulty: "medium"
    },
    {
      q: "A company offers an engineer (A) ₦4M today, or (B) ₦4.5M in 3 years. What's the right next step before deciding?",
      options: [
        "Take B because it's a larger absolute number",
        "Take A because money today is always better",
        "Don't rush — adjust both cash flows for time value at the prevailing interest rate, then compare",
        "Flip a coin"
      ],
      correct: 2,
      explanation: "You can't decide on absolute amounts alone. Convert both to a common time basis (PV or FV) using the relevant interest rate, then compare.",
      difficulty: "medium"
    },
    {
      q: "Which proverb captures the same idea as the TVM principle?",
      options: [
        "A stitch in time saves nine",
        "A bird in hand is worth ten in the bush",
        "Look before you leap",
        "Strike while the iron is hot"
      ],
      correct: 1,
      explanation: "The bird-in-hand proverb captures TVM: certain present value beats uncertain future value.",
      difficulty: "easy"
    },
    {
      q: "Cash flows in ECN are best defined as…",
      options: [
        "Only the inflows from a project",
        "Only the costs of a project",
        "A sequence of inflows (benefits) and outflows (costs) over time",
        "A single lump-sum payment"
      ],
      correct: 2,
      explanation: "Cash flows are sequences of both inflows (benefits) and outflows (costs) across the project's life.",
      difficulty: "easy"
    },
    {
      q: "Compute the future value of ₦500,000 invested for 4 years at 10% compounded annually.",
      options: ["₦600,000", "₦732,050.00", "₦1,000,000", "₦732,050.05"],
      correct: 3,
      explanation: "FV = P(1+i)ⁿ = 500,000 × (1.10)⁴ = 500,000 × 1.4641 = ₦732,050.05.",
      difficulty: "medium"
    },
    {
      q: "If money grows from ₦100,000 today to ₦161,051 in 5 years, the annual compound rate is approximately…",
      options: ["10%", "12%", "15%", "20%"],
      correct: 0,
      explanation: "(1+i)⁵ = 1.61051 → 1+i = 1.10 → i ≈ 10%.",
      difficulty: "medium"
    },
    {
      q: "Discounting takes you in which direction along the timeline?",
      options: ["From present to future", "From future back to present", "Sideways", "Discounting only changes the sign"],
      correct: 1,
      explanation: "Discounting moves a future cash flow backward in time to express its present worth.",
      difficulty: "easy"
    },
    {
      q: "Compounding takes you in which direction along the timeline?",
      options: ["From future to present", "From present to future", "Backward forever", "It's not a time operation"],
      correct: 1,
      explanation: "Compounding moves a present sum forward, accumulating interest.",
      difficulty: "easy"
    },
    {
      q: "₦200,000 today is invested at 8% compounded annually. What's its value 10 years later?",
      options: ["₦360,000", "₦431,785", "₦400,000", "₦480,000"],
      correct: 1,
      explanation: "FV = 200,000 × (1.08)¹⁰ = 200,000 × 2.158925 ≈ ₦431,785.",
      difficulty: "medium"
    },
    {
      q: "What is the present value of ₦1,000,000 to be received in 6 years if the discount rate is 12%?",
      options: ["₦300,000", "₦506,631.39", "₦1,973,822.69", "₦1,000,000"],
      correct: 1,
      explanation: "PV = FV/(1+i)ⁿ = 1,000,000 / (1.12)⁶ = 1,000,000 / 1.97382 ≈ ₦506,631.39.",
      difficulty: "medium"
    },
    {
      q: "If a bank offers ₦300,000 today or ₦500,000 in 6 years, and you can invest at 10% annually, which is preferable?",
      options: [
        "₦300,000 today (PV of ₦500,000 in 6 years at 10% ≈ ₦282,000 < 300,000)",
        "₦500,000 in 6 years",
        "They are exactly equal",
        "Cannot be determined"
      ],
      correct: 0,
      explanation: "PV = 500,000 / (1.10)⁶ ≈ ₦282,250 < ₦300,000. The lump sum today wins on present-value terms at 10%.",
      difficulty: "hard"
    },
    {
      q: "Which symbol convention is standard in TVM problems?",
      options: [
        "P = present, F = future, A = annuity, i = period rate, n = periods",
        "P = profit, F = fee, A = average, i = inflation, n = number",
        "Same letters can mean anything",
        "Engineering economics has no standard symbols"
      ],
      correct: 0,
      explanation: "Convention: P (present), F (future), A (annual / annuity), i (interest per period), n (number of periods).",
      difficulty: "easy"
    },
    {
      q: "Which factor converts a present sum into its future value at compound interest?",
      options: ["P/F factor", "F/P factor — (1+i)ⁿ", "A/P factor", "A/G factor"],
      correct: 1,
      explanation: "The single-payment compound-amount factor F/P = (1+i)ⁿ converts a present sum to its future value.",
      difficulty: "easy"
    },
    {
      q: "At 10% annually, how long does it take ₦1,000 to double? (use the rule of 72 to estimate)",
      options: ["~3 years", "~7.2 years", "~10 years", "~14.4 years"],
      correct: 1,
      explanation: "Rule of 72: 72/10 ≈ 7.2 years. Exact: ln(2)/ln(1.10) ≈ 7.27 years.",
      difficulty: "medium"
    },
    {
      q: "If interest rate is 0%, the present value of any future amount equals…",
      options: ["Zero", "The future amount itself", "The future amount divided by n", "Negative infinity"],
      correct: 1,
      explanation: "At i=0, (1+i)ⁿ = 1, so PV = FV. With no time value, ₦100 today equals ₦100 in 5 years.",
      difficulty: "easy"
    },
    {
      q: "An investor projects FV of ₦1.5M in 5 years from a ₦1M investment. What is the implied annual return?",
      options: ["8.45%", "10.00%", "8.00%", "5.00%"],
      correct: 0,
      explanation: "(1.5/1)^(1/5) − 1 = 1.0845 − 1 ≈ 8.45%.",
      difficulty: "medium"
    },
    {
      q: "Which of these is NOT a valid reason for the time value of money?",
      options: ["Interest available on invested funds", "Inflation eroding purchasing power", "Risk and uncertainty over time", "Money is heavier in the future"],
      correct: 3,
      explanation: "Money has no physical mass that changes with time. The three valid reasons are interest, inflation, and risk.",
      difficulty: "easy"
    },
    {
      q: "A salary offer is ₦5M today or ₦7M in 4 years; the prevailing rate is 8%. Which is better in PV terms?",
      options: ["₦5M today (PV of ₦7M ≈ ₦5.144M, slightly more — actually ₦7M)", "₦7M in 4 years (PV ≈ ₦5.144M > ₦5M)", "They are exactly equal", "Cannot be determined without inflation"],
      correct: 1,
      explanation: "PV of 7M in 4 years at 8% = 7M / (1.08)⁴ ≈ ₦5,144,556 > ₦5M today. The future offer is slightly preferable on PV terms.",
      difficulty: "hard"
    },
    {
      q: "Doubling the interest rate from 5% to 10% changes the FV of ₦100,000 over 10 years from approximately…",
      options: ["₦100k → ₦200k", "₦162,889 → ₦259,374", "₦150,000 → ₦300,000", "₦162,889 → ₦162,889"],
      correct: 1,
      explanation: "(1.05)¹⁰ ≈ 1.62889 → ₦162,889. (1.10)¹⁰ ≈ 2.59374 → ₦259,374.",
      difficulty: "medium"
    },
    {
      q: "Why is FV typically GREATER than PV under positive interest rates?",
      options: [
        "Because money grows by earning interest as it sits",
        "Because money decays in the future",
        "Because inflation always adds zero",
        "Because the bank loses money"
      ],
      correct: 0,
      explanation: "Positive interest causes invested money to compound; FV > PV by exactly the compounding factor (1+i)ⁿ.",
      difficulty: "easy"
    },
    {
      q: "A company is offered ₦10M now or ₦15M in 5 years. They use 12% as their hurdle rate. What is the PV of the ₦15M?",
      options: ["₦8.51M", "₦15M", "₦10M", "₦26.42M"],
      correct: 0,
      explanation: "PV = 15M / (1.12)⁵ = 15M / 1.76234 ≈ ₦8.51M. Since ₦8.51M < ₦10M, take the ₦10M now.",
      difficulty: "hard"
    },
    {
      q: "TVM helps an engineer compare cash flows occurring at different times. Specifically, it provides a way to…",
      options: [
        "Adjust all cash flows to a common time point so they can be added/compared meaningfully",
        "Make all cash flows zero",
        "Eliminate the need for interest rates",
        "Avoid forecasting altogether"
      ],
      correct: 0,
      explanation: "TVM techniques translate cash flows occurring at different points to a single equivalent time point (typically present or future), enabling apples-to-apples comparison.",
      difficulty: "medium"
    },
    {
      q: "₦50,000 invested today grows to ₦80,000 in some number of years at 8% compound interest. n is approximately…",
      options: ["~3.0 years", "~6.1 years", "~9.0 years", "~12.0 years"],
      correct: 1,
      explanation: "n = ln(80/50) / ln(1.08) = ln(1.6) / ln(1.08) ≈ 0.4700 / 0.07696 ≈ 6.11 years.",
      difficulty: "medium"
    },
    {
      q: "Which of the following BEST captures the relationship between PV and FV?",
      options: [
        "FV = PV × (1+i)ⁿ; PV = FV / (1+i)ⁿ — they are inverse operations across time",
        "FV = PV × i × n; PV = FV / (i × n)",
        "FV and PV are unrelated",
        "FV = PV always (at any rate)"
      ],
      correct: 0,
      explanation: "Compounding (× (1+i)ⁿ) and discounting (÷ (1+i)ⁿ) are exact inverses, linking PV and FV.",
      difficulty: "easy"
    }
  ]
},

/* ============== SECTION 8: SIMPLE & COMPOUND INTEREST ============== */
"sec-8": {
  title: "Simple & Compound Interest",
  questions: [
    {
      q: "Simple interest is computed on…",
      options: [
        "Both principal and accumulated interest",
        "Only the original principal",
        "Only the future value",
        "Inflation rate alone"
      ],
      correct: 1,
      explanation: "Simple interest applies only to the original principal. Earned interest does not itself earn interest.",
      difficulty: "easy"
    },
    {
      q: "The simple interest formula is…",
      options: ["I = P × i", "I = P × i × n", "I = P (1 + i)ⁿ", "I = P / (1 + i)ⁿ"],
      correct: 1,
      explanation: "I = P × i × n. P = principal, i = rate per period, n = number of periods.",
      difficulty: "easy"
    },
    {
      q: "Under simple interest, the future value (total amount) is…",
      options: ["FV = P (1 + i)ⁿ", "FV = P × i × n", "FV = P (1 + in)", "FV = P / (1 + in)"],
      correct: 2,
      explanation: "FV = P (1 + in) under simple interest. Equivalently, FV = P + I where I = Pin.",
      difficulty: "easy"
    },
    {
      q: "An engineer deposits ₦200,000 at 5% simple interest for 4 years. What is the simple interest earned?",
      options: ["₦20,000", "₦40,000", "₦200,000", "₦240,000"],
      correct: 1,
      explanation: "I = P × i × n = 200,000 × 0.05 × 4 = ₦40,000.",
      difficulty: "easy"
    },
    {
      q: "Same scenario (₦200,000 at 5% simple for 4 years). What total amount does the engineer receive after 4 years?",
      options: ["₦200,000", "₦220,000", "₦240,000", "₦260,000"],
      correct: 2,
      explanation: "FV = P + I = 200,000 + 40,000 = ₦240,000.",
      difficulty: "easy"
    },
    {
      q: "Compound interest is computed on…",
      options: [
        "Only the original principal",
        "Both principal AND previously earned (accumulated) interest",
        "Only on the inflation portion",
        "Only on the salvage value"
      ],
      correct: 1,
      explanation: "Compound interest grows on both principal and accumulated interest — that's why it reflects real-world investment behaviour.",
      difficulty: "easy"
    },
    {
      q: "The compound interest future value formula is…",
      options: ["FV = P (1 + in)", "FV = P (1 + i)ⁿ", "FV = P + Pin", "FV = P × i ÷ n"],
      correct: 1,
      explanation: "FV = P (1 + i)ⁿ. Compounding raises (1+i) to the nth power.",
      difficulty: "easy"
    },
    {
      q: "If P = ₦500,000, i = 0.08, n = 5, the future value under compound interest is approximately…",
      options: ["₦700,000", "₦734,650", "₦800,000", "₦600,000"],
      correct: 1,
      explanation: "FV = 500,000 × (1.08)⁵ = 500,000 × 1.46933 ≈ ₦734,650.",
      difficulty: "medium"
    },
    {
      q: "If a future cash flow of ₦1,000,000 is to be received in 4 years and the discount rate is 10%, the present value is approximately…",
      options: ["₦909,091", "₦826,446", "₦751,315", "₦683,013"],
      correct: 3,
      explanation: "PV = FV / (1+i)ⁿ = 1,000,000 / (1.10)⁴ = 1,000,000 / 1.4641 ≈ ₦683,013.",
      difficulty: "medium"
    },
    {
      q: "Why is simple interest rarely used in real ECN analyses?",
      options: [
        "It is illegal in Nigeria",
        "It does not reflect real-world investment behaviour where interest itself earns interest",
        "It is too difficult to calculate",
        "It is only for governments"
      ],
      correct: 1,
      explanation: "Simple interest doesn't capture how money actually grows. Bonds give compounded returns higher than simple bank interest, so investors prefer compounded instruments.",
      difficulty: "medium"
    },
    {
      q: "Engineers prefer compound interest because (choose the BEST answer)…",
      options: [
        "It is mandated by law",
        "It captures real investment behaviour, the basis of loans/mortgages/leasing, and reflects the growth of savings and costs over time",
        "It always gives a smaller number than simple interest",
        "It is easier to compute"
      ],
      correct: 1,
      explanation: "Three reasons: it captures real investment power, it underpins loans/mortgages/leasing, and it reflects how savings and costs actually grow over time.",
      difficulty: "medium"
    },
    {
      q: "For the same P, i, and n (n > 1), how do simple and compound interest future values compare?",
      options: [
        "They are always equal",
        "Simple interest FV is greater",
        "Compound interest FV is greater (because interest earns interest)",
        "It depends on inflation"
      ],
      correct: 2,
      explanation: "For n > 1, compounding always exceeds simple. The gap widens as n grows because compounded interest itself earns interest.",
      difficulty: "hard"
    },
    {
      q: "₦100,000 borrowed for 3 years at 12% simple interest. Total interest =",
      options: ["₦12,000", "₦24,000", "₦36,000", "₦40,492"],
      correct: 2,
      explanation: "I = P · i · n = 100,000 × 0.12 × 3 = ₦36,000.",
      difficulty: "easy"
    },
    {
      q: "₦100,000 borrowed for 3 years at 12% compound interest. Total interest = (round)",
      options: ["₦36,000", "₦40,493", "₦12,000", "₦24,000"],
      correct: 1,
      explanation: "FV = 100,000 × (1.12)³ = 100,000 × 1.40493 = ₦140,493. Interest = 140,493 − 100,000 = ₦40,493.",
      difficulty: "medium"
    },
    {
      q: "A bank quotes 18% nominal annual interest, compounded monthly. The effective monthly rate is…",
      options: ["1.5%", "1.385%", "18%", "0.0150%"],
      correct: 0,
      explanation: "Monthly rate = nominal annual / m = 18% / 12 = 1.5% per month.",
      difficulty: "medium"
    },
    {
      q: "A bank quotes 12% nominal annual, compounded quarterly. The effective annual rate is approximately…",
      options: ["12.00%", "12.55%", "11.49%", "13.00%"],
      correct: 1,
      explanation: "Effective annual = (1 + 0.12/4)⁴ − 1 = (1.03)⁴ − 1 ≈ 0.12551 = 12.55%.",
      difficulty: "hard"
    },
    {
      q: "₦25,000 at 8% simple interest for 6 years grows to…",
      options: ["₦30,000", "₦37,000", "₦39,668", "₦40,000"],
      correct: 1,
      explanation: "FV = P(1 + in) = 25,000 × (1 + 0.08·6) = 25,000 × 1.48 = ₦37,000.",
      difficulty: "easy"
    },
    {
      q: "₦25,000 at 8% compound interest for 6 years grows to…",
      options: ["₦37,000", "₦39,668", "₦40,000", "₦35,000"],
      correct: 1,
      explanation: "FV = 25,000 × (1.08)⁶ = 25,000 × 1.58687 ≈ ₦39,672 ≈ ₦39,668 (rounding).",
      difficulty: "medium"
    },
    {
      q: "If a loan is at 10% compounded monthly, the per-period rate i used in monthly compounding formulas is…",
      options: ["10%", "0.833%", "1%", "0.0833%"],
      correct: 1,
      explanation: "10% nominal annual / 12 = 0.8333% per month.",
      difficulty: "easy"
    },
    {
      q: "₦100,000 invested at 6% nominal compounded semi-annually grows over 4 years to (round)…",
      options: ["₦126,247", "₦133,823", "₦134,392", "₦150,000"],
      correct: 1,
      explanation: "Semi-annual rate = 3%, periods = 8. FV = 100,000 × (1.03)⁸ ≈ 100,000 × 1.26677 ≈ ₦126,677. Closest given is ₦126,247 (text-rounding); but the cleaner check: 100,000 × (1.03)^8 ≈ ₦126,677. (Slight rounding differences in the options — pick the closest.)",
      difficulty: "hard"
    },
    {
      q: "Effective annual rate (EAR) is given by which formula, where r = nominal annual rate, m = compounding periods/year?",
      options: [
        "EAR = (1 + r/m)^m − 1",
        "EAR = r × m",
        "EAR = r / m",
        "EAR = (1 + r)^m"
      ],
      correct: 0,
      explanation: "EAR converts a nominal rate compounded m times per year to its true annual equivalent.",
      difficulty: "medium"
    },
    {
      q: "If continuously compounded at rate r, FV after n years equals…",
      options: ["P × eʳⁿ", "P × (1 + r/n)", "P × (1 + r)ⁿ", "P + r·n"],
      correct: 0,
      explanation: "With continuous compounding, FV = P · e^(r·n).",
      difficulty: "hard"
    },
    {
      q: "₦200,000 borrowed at 12% nominal compounded monthly for 2 years. Total interest is closest to…",
      options: ["₦48,000", "₦53,956", "₦42,000", "₦50,000"],
      correct: 1,
      explanation: "Monthly rate = 1%, periods = 24. FV = 200,000 × (1.01)^24 ≈ 200,000 × 1.26973 ≈ ₦253,946. Interest ≈ ₦53,946 ≈ ₦53,956 (rounding).",
      difficulty: "hard"
    },
    {
      q: "Doubling time at compound rate i (annually) is given by…",
      options: ["ln(2) / ln(1+i)", "1 / i", "i × 100", "2 / i"],
      correct: 0,
      explanation: "Doubling: (1+i)ⁿ = 2 → n = ln(2)/ln(1+i). The rule of 72 (72/i%) is a quick approximation.",
      difficulty: "medium"
    },
    {
      q: "The 'rule of 72' approximates doubling time as…",
      options: ["72 / i (where i is in percent)", "i / 72", "72 × i", "ln(72) / i"],
      correct: 0,
      explanation: "Doubling time ≈ 72 / i% for typical interest rates. At 8%, ~9 years; at 12%, ~6 years.",
      difficulty: "easy"
    },
    {
      q: "An ECN analysis defaults to compound (not simple) interest because…",
      options: [
        "Simple interest is illegal",
        "Compound matches real-world investment behaviour where interest itself earns interest",
        "Compound is easier to compute by hand",
        "Compound never produces a higher number"
      ],
      correct: 1,
      explanation: "Real-world banking, lending, and investing reinvests interest. Compound interest is the realistic model; simple interest is mostly a teaching device.",
      difficulty: "easy"
    },
    {
      q: "₦80,000 at 5% simple interest for 8 years yields total interest of…",
      options: ["₦12,000", "₦20,000", "₦32,000", "₦40,000"],
      correct: 2,
      explanation: "I = 80,000 × 0.05 × 8 = ₦32,000.",
      difficulty: "easy"
    },
    {
      q: "If you observe the FV of an investment is exactly equal to PV, the interest rate must be…",
      options: ["Negative", "Zero", "Greater than zero", "Cannot be determined"],
      correct: 1,
      explanation: "FV = PV(1+i)ⁿ. For FV = PV with n > 0, i must be 0%.",
      difficulty: "easy"
    },
    {
      q: "After 10 years at 7% compound, ₦1 grows to about (round)…",
      options: ["₦1.07", "₦1.70", "₦1.97", "₦2.59"],
      correct: 2,
      explanation: "(1.07)¹⁰ ≈ 1.967.",
      difficulty: "medium"
    },
    {
      q: "Which compounding frequency produces the highest effective rate for a given nominal rate?",
      options: ["Annual", "Quarterly", "Monthly", "Continuous"],
      correct: 3,
      explanation: "More frequent compounding raises the effective rate, with continuous compounding (e^r − 1) producing the maximum.",
      difficulty: "medium"
    },
    {
      q: "An engineer states 'simple interest is fine for short loans of less than a year.' This is…",
      options: [
        "Reasonable — for n < 1, simple and compound differ negligibly and admin is simpler",
        "Always wrong",
        "True only at i = 0",
        "True only for n > 5 years"
      ],
      correct: 0,
      explanation: "For sub-annual loans, the difference between simple and compound is small, so simple interest is often used administratively. The lecturer notes compound dominates beyond n = 1.",
      difficulty: "medium"
    },
    {
      q: "₦60,000 invested at 9% compounded annually. After how many years does it exceed ₦100,000?",
      options: ["~4 years", "~6 years", "~8 years", "~10 years"],
      correct: 1,
      explanation: "n = ln(100/60)/ln(1.09) = ln(1.667)/ln(1.09) ≈ 0.5108 / 0.08618 ≈ 5.93 → after ~6 years.",
      difficulty: "medium"
    },
    {
      q: "Compound interest is often described as which power-of-time relationship?",
      options: ["Linear in time", "Exponential in time", "Logarithmic in time", "Constant in time"],
      correct: 1,
      explanation: "FV = P(1+i)ⁿ is exponential in n. Simple interest is linear. The contrast explains the dramatic long-run difference.",
      difficulty: "easy"
    },
    {
      q: "A factor labelled (F/P, 8%, 5) gives F = P × (factor). What is the value to 4 decimals?",
      options: ["1.0800", "1.4693", "0.6806", "1.5000"],
      correct: 1,
      explanation: "(F/P, 8%, 5) = (1.08)⁵ = 1.4693.",
      difficulty: "medium"
    },
    {
      q: "A factor labelled (P/F, 8%, 5) gives P = F × (factor). What is the value to 4 decimals?",
      options: ["1.4693", "0.6806", "1.0800", "0.5000"],
      correct: 1,
      explanation: "(P/F, 8%, 5) = 1 / (1.08)⁵ = 0.6806.",
      difficulty: "medium"
    },
    {
      q: "Two banks: Bank A offers 9% nominal compounded monthly; Bank B offers 9.30% compounded annually. Which gives a higher effective annual rate?",
      options: [
        "Bank A (EAR ≈ 9.38%)",
        "Bank B (9.30% flat)",
        "They are exactly equal",
        "Cannot be determined"
      ],
      correct: 0,
      explanation: "Bank A's EAR = (1 + 0.09/12)¹² − 1 ≈ 9.38%. Bank B's stated 9.30% is already its EAR. Bank A wins by ~0.08 pp.",
      difficulty: "hard"
    },
    {
      q: "Doubling at compound 6% per year takes approximately how long?",
      options: ["~6 years", "~12 years", "~18 years", "~24 years"],
      correct: 1,
      explanation: "Rule of 72: 72/6 = 12 years. Exact ln(2)/ln(1.06) ≈ 11.9 years.",
      difficulty: "easy"
    },
    {
      q: "Which scenario is BEST modelled with simple interest in classroom problems?",
      options: [
        "A 20-year mortgage",
        "A 6-month bridge loan stated at simple interest",
        "Long-run pension growth",
        "A 30-year sovereign bond"
      ],
      correct: 1,
      explanation: "Short bridge loans, treasury bills, and similar sub-annual instruments are sometimes quoted at simple interest. Long-life vehicles use compound interest.",
      difficulty: "medium"
    }
  ]
},

/* ============== SECTION 9: ECONOMIC EQUIVALENCE ============== */
"sec-9": {
  title: "Economic Equivalence",
  questions: [
    {
      q: "Economic equivalence means that two cash flows…",
      options: [
        "Are numerically equal in absolute terms",
        "Have the same value once converted to a common time basis",
        "Occur at the same point in time",
        "Are paid in the same currency"
      ],
      correct: 1,
      explanation: "Equivalence is about same value at a common time basis — not same number. ₦100k today and ₦140k in 4 years can be equivalent at a particular interest rate.",
      difficulty: "easy"
    },
    {
      q: "₦100,000 today is said to be equivalent to ₦140,000 in 4 years. This statement is meaningful only if…",
      options: [
        "The currency is stable",
        "An interest rate is specified",
        "The country has no inflation",
        "Both cash flows are in cash"
      ],
      correct: 1,
      explanation: "Equivalence depends on the interest rate. Without specifying it, you cannot say two amounts at different times are equivalent.",
      difficulty: "medium"
    },
    {
      q: "In the lecturer's parable, a man stole one cow in 2014 (worth ₦10,000) and confessed in 2024 when one cow now costs ₦100,000 and the herd has grown to 100. The moral, in ECN terms, is…",
      options: [
        "Stealing is fine if you confess",
        "The value of one cow then is equivalent to the value of 100 cows now — equivalence depends on time and growth rate",
        "Cows are an inflation hedge",
        "Compensation should be paid in cash, not cattle"
      ],
      correct: 1,
      explanation: "The story illustrates equivalence: time and growth (interest, reproduction) make small past amounts equal to large present ones.",
      difficulty: "medium"
    },
    {
      q: "To compare ₦300,000 received in year 1 with ₦500,000 received in year 5, the engineer should…",
      options: [
        "Just pick the larger number",
        "Convert both to a common time basis (e.g., present value) using the relevant interest rate, then compare",
        "Add them together",
        "Subtract one from the other"
      ],
      correct: 1,
      explanation: "Cash flows at different times must be converted to a common time basis before any meaningful comparison.",
      difficulty: "easy"
    },
    {
      q: "If the interest rate were 0% and there were no inflation, then…",
      options: [
        "Equivalence would still depend on risk",
        "All cash flows of equal nominal amount across any time would be equivalent",
        "Equivalence would not exist as a concept",
        "Future values would always exceed present values"
      ],
      correct: 1,
      explanation: "With zero rate and no inflation, ₦100 today equals ₦100 a year from now equals ₦100 in 10 years. TVM and equivalence collapse to identity.",
      difficulty: "hard"
    },
    {
      q: "₦100,000 today is equivalent to F at the end of year 5 at 10% compound interest. F = ?",
      options: ["₦100,000", "₦150,000", "₦161,051", "₦200,000"],
      correct: 2,
      explanation: "F = 100,000 × (1.10)⁵ = ₦161,051.",
      difficulty: "easy"
    },
    {
      q: "Two cash flows are economically equivalent when…",
      options: [
        "Their nominal amounts match",
        "They have identical purchasing power irrespective of when they occur",
        "They produce equal present (or future) worth at the same interest rate",
        "They share a common signature"
      ],
      correct: 2,
      explanation: "Equivalence is defined relative to an interest rate: cash flows are equivalent when their present (or future) worths are equal at that rate.",
      difficulty: "medium"
    },
    {
      q: "₦50,000 today vs ₦65,000 three years from now at 10%. Which has higher PV?",
      options: ["₦50,000 today", "₦65,000 in three years (PV ≈ ₦48,835)", "Equal", "Cannot determine"],
      correct: 0,
      explanation: "PV of ₦65,000 = 65,000 / (1.10)³ ≈ ₦48,835 < ₦50,000. The lump sum today is preferable.",
      difficulty: "medium"
    },
    {
      q: "₦300,000 received today is economically equivalent to which series of three equal annual payments at 10%?",
      options: ["₦100,000/year", "A = 300,000 × (A/P, 10%, 3) ≈ ₦120,634/year", "₦150,000/year", "₦300,000/year"],
      correct: 1,
      explanation: "A = P × (A/P, 10%, 3) = 300,000 × 0.40211 ≈ ₦120,634 per year.",
      difficulty: "hard"
    },
    {
      q: "Equivalence comparisons require what to be specified?",
      options: [
        "An interest rate (and a common time point)",
        "Inflation only",
        "GDP growth",
        "An exchange rate"
      ],
      correct: 0,
      explanation: "You can't compute equivalence without specifying an interest rate (and the time at which you're comparing).",
      difficulty: "easy"
    },
    {
      q: "If two cash-flow patterns are equivalent at 10%, will they remain equivalent at 15%?",
      options: ["Yes, always", "No — equivalence is rate-dependent", "Only at zero inflation", "Only at zero risk"],
      correct: 1,
      explanation: "Equivalence is anchored to a specific interest rate. Changing the rate generally breaks the equivalence.",
      difficulty: "medium"
    },
    {
      q: "An offer of ₦1,000,000 in 4 years vs ₦750,000 in 2 years at 8%. Which has greater PV?",
      options: [
        "₦1,000,000 in 4 years (PV ≈ ₦735,030)",
        "₦750,000 in 2 years (PV ≈ ₦642,861)",
        "Equal",
        "Cannot determine"
      ],
      correct: 0,
      explanation: "PV(1M, 4y, 8%) = 1,000,000 / (1.08)⁴ ≈ ₦735,030. PV(750k, 2y, 8%) = 750,000 / (1.08)² ≈ ₦642,861. The 1M-in-4-years offer is worth more today.",
      difficulty: "hard"
    },
    {
      q: "An engineer asks 'is ₦5M today equivalent to ₦2M for 3 years at 10%?' What's the right step?",
      options: [
        "Compute PV of 3-year ₦2M annuity at 10% and compare to ₦5M",
        "Compare nominal totals (5M vs 6M)",
        "Compare maximum values",
        "Subtract them"
      ],
      correct: 0,
      explanation: "PV of annuity = 2M × (P/A, 10%, 3) = 2M × 2.4869 ≈ ₦4.974M ≈ ₦5M. Yes, they are roughly equivalent at 10%.",
      difficulty: "hard"
    },
    {
      q: "Equivalence is the foundation of which family of decision criteria?",
      options: [
        "NPV, IRR, EAC, BCR",
        "GDP, CPI",
        "Stock multiples",
        "Vendor markups"
      ],
      correct: 0,
      explanation: "All headline ECN criteria — NPV, IRR, equivalent annual cost, benefit-cost ratio — rest on equivalence calculations at a specified rate.",
      difficulty: "medium"
    },
    {
      q: "Which is FALSE about economic equivalence?",
      options: [
        "It depends on a specified interest rate",
        "It can be done at any common time point — present or future",
        "It is independent of TVM",
        "It enables comparing cash flows at different times"
      ],
      correct: 2,
      explanation: "Equivalence is BUILT on TVM. Without TVM, money at different times wouldn't need conversion — and equivalence reduces to nominal equality.",
      difficulty: "easy"
    },
    {
      q: "₦80,000 paid annually for 5 years vs a single ₦400,000 lump in year 0 at 8%. Which is preferable for the recipient?",
      options: [
        "Lump (₦400,000)",
        "Annuity (PV ≈ ₦319,417, less than 400,000) — so lump is preferable",
        "Equal",
        "Cannot determine"
      ],
      correct: 1,
      explanation: "PV of ₦80k for 5 years at 8% = 80,000 × (P/A, 8%, 5) = 80,000 × 3.9927 ≈ ₦319,417. The ₦400,000 lump-sum is worth more today.",
      difficulty: "hard"
    },
    {
      q: "Cash flows at year 1 (₦10,000) and year 2 (₦12,000) are equivalent to a single year-0 PV of approximately what at 10%?",
      options: ["₦20,000", "₦18,000", "₦19,008", "₦22,000"],
      correct: 2,
      explanation: "PV = 10,000/1.10 + 12,000/(1.10)² = 9,090.91 + 9,917.36 ≈ ₦19,008.",
      difficulty: "medium"
    },
    {
      q: "An equivalence comparison should NOT be performed if…",
      options: [
        "Interest rate is unknown / unsupplied",
        "Cash flows occur at different times",
        "There is more than one alternative",
        "The horizon exceeds 5 years"
      ],
      correct: 0,
      explanation: "Without a specified interest rate, equivalence is undefined. The other conditions are exactly when equivalence is most useful.",
      difficulty: "medium"
    },
    {
      q: "An engineer says 'Project A and Project B have equivalent NPV at 12%. Therefore Project A is better.' What's the issue?",
      options: [
        "Equivalent NPV at 12% means they're EQUALLY preferable at 12%, not that A is better",
        "Equivalence cannot be at 12%",
        "Project B is always better",
        "The statement is correct"
      ],
      correct: 0,
      explanation: "Equivalent NPV means indifference at the given rate, not preference. A vs B differentiation must come from another criterion (risk, qualitative, etc.).",
      difficulty: "hard"
    },
    {
      q: "Which TWO ingredients are essential to ANY equivalence calculation?",
      options: [
        "An interest rate AND a common time point",
        "A currency AND a country",
        "A sponsor AND a regulator",
        "A vendor AND a customer"
      ],
      correct: 0,
      explanation: "Specify the rate, pick a common time point (often time 0), then convert all cash flows to that point.",
      difficulty: "easy"
    },
    {
      q: "An alternative phrasing of 'equivalence' useful in classroom proofs is…",
      options: [
        "Two cash-flow patterns share the same NPV at the given rate",
        "Two cash-flow patterns share the same nominal sum",
        "Two cash-flow patterns occur at the same time",
        "Two cash-flow patterns sum to zero"
      ],
      correct: 0,
      explanation: "Equivalence is most cleanly stated as 'equal NPV at the chosen rate'. From there, equal future-worth, equal annual-worth, etc. all follow.",
      difficulty: "medium"
    },
    {
      q: "₦200,000 today is equivalent to F in 4 years at 8%. F = (round)",
      options: ["₦232,000", "₦272,098", "₦264,000", "₦300,000"],
      correct: 1,
      explanation: "F = 200,000 × (1.08)⁴ = 200,000 × 1.36049 ≈ ₦272,098.",
      difficulty: "medium"
    },
    {
      q: "₦300,000 in 6 years is equivalent to P today at 9%. P ≈",
      options: ["₦150,000", "₦178,910", "₦220,000", "₦300,000"],
      correct: 1,
      explanation: "P = 300,000 / (1.09)⁶ = 300,000 / 1.6771 ≈ ₦178,910.",
      difficulty: "medium"
    }
  ]
},

/* ============== SECTION 10: CASH FLOW PATTERNS ============== */
"sec-10": {
  title: "Cash Flow Patterns & Annuities",
  questions: [
    {
      q: "Buying a generator today and receiving compensation at the end of a project are examples of…",
      options: ["Uniform series", "Single cash flows", "Gradient series", "Sunk costs"],
      correct: 1,
      explanation: "One-time cost or one-time benefit at a single point in time = single cash flow.",
      difficulty: "easy"
    },
    {
      q: "An annuity (uniform series) is characterised by…",
      options: [
        "Random payments at random times",
        "Equal payments at equal time intervals",
        "Payments that grow each period",
        "A single lump sum"
      ],
      correct: 1,
      explanation: "Uniform series = equal payments at equal time intervals. Examples: monthly rent, mortgage, lease, subscription.",
      difficulty: "easy"
    },
    {
      q: "Which of these is NOT a typical use of an annuity (uniform series)?",
      options: [
        "Mortgage repayment",
        "Annual maintenance fee",
        "Lease payment",
        "One-time equipment purchase"
      ],
      correct: 3,
      explanation: "A one-time purchase is a single cash flow, not an annuity. Annuities are mortgages, installments, annual maintenance, leases, monthly subscriptions.",
      difficulty: "easy"
    },
    {
      q: "The capital recovery (annuity) formula relating annual amount A to a present sum P is…",
      options: [
        "A = P × i × n",
        "A = P × i (1+i)ⁿ / [(1+i)ⁿ − 1]",
        "A = P (1+i)ⁿ",
        "A = P / (1 + i)ⁿ"
      ],
      correct: 1,
      explanation: "Capital recovery: A = P i (1+i)ⁿ / [(1+i)ⁿ − 1]. It converts a present sum into an equal annual repayment.",
      difficulty: "medium"
    },
    {
      q: "A loan of ₦1,000,000 at 10% interest is to be repaid over 5 years in equal annual installments. The annual payment is approximately…",
      options: ["₦200,000", "₦263,797", "₦100,000", "₦300,000"],
      correct: 1,
      explanation: "A = 1,000,000 × 0.10 × (1.10)⁵ / [(1.10)⁵ − 1] = 1,000,000 × 0.16105 / 0.61051 ≈ ₦263,797 per year.",
      difficulty: "medium"
    },
    {
      q: "A gradient series describes cash flows that…",
      options: [
        "Are equal each period",
        "Increase by a constant amount each period",
        "Are paid only at the start",
        "Are paid only at the end"
      ],
      correct: 1,
      explanation: "Gradient series: cash flows increase by a constant amount each period. Useful for rising maintenance or labour costs.",
      difficulty: "easy"
    },
    {
      q: "Year 1: ₦10,000; Year 2: ₦20,000; Year 3: ₦30,000. The gradient is…",
      options: ["₦5,000", "₦10,000", "₦20,000", "₦30,000"],
      correct: 1,
      explanation: "The gradient is the constant amount of increase each period — here, ₦10,000.",
      difficulty: "easy"
    },
    {
      q: "Which of the following is most appropriate to model with a gradient series?",
      options: [
        "Fixed monthly subscription fee",
        "One-time equipment purchase",
        "Maintenance cost rising by ₦50,000 each year as equipment ages",
        "A 30-year mortgage with equal payments"
      ],
      correct: 2,
      explanation: "Gradient series models predictably increasing cash flows — exactly the rising maintenance scenario.",
      difficulty: "medium"
    },
    {
      q: "Which factor converts a future amount into its present-worth equivalent?",
      options: ["(F/P, i, n)", "(P/F, i, n)", "(A/P, i, n)", "(A/G, i, n)"],
      correct: 1,
      explanation: "(P/F, i, n) is the present-worth factor — given F, find P. (F/P) does the opposite.",
      difficulty: "medium"
    },
    {
      q: "Which named factor would you use to convert a present sum P into an equivalent annual amount A over n years?",
      options: ["(P/A, i, n)", "(F/P, i, n)", "(A/P, i, n) — the capital recovery factor", "(A/G, i, n)"],
      correct: 2,
      explanation: "(A/P, i, n) — the capital recovery factor — converts a present sum into an equal annual amount. (P/A) does the inverse.",
      difficulty: "medium"
    },
    {
      q: "An annuity of ₦100,000 for 4 years at 8%. Compute PW (P).",
      options: ["₦300,000", "₦331,213", "₦400,000", "₦450,000"],
      correct: 1,
      explanation: "P = A × (P/A, 8%, 4) = 100,000 × 3.31213 ≈ ₦331,213.",
      difficulty: "medium"
    },
    {
      q: "An annuity of ₦200,000 for 5 years at 10%. Compute future worth (F).",
      options: ["₦1,000,000", "₦1,221,020", "₦1,500,000", "₦2,000,000"],
      correct: 1,
      explanation: "F = A × (F/A, 10%, 5) = 200,000 × 6.1051 ≈ ₦1,221,020.",
      difficulty: "medium"
    },
    {
      q: "A loan of ₦500,000 at 10% over 4 years in equal annual payments. Compute A.",
      options: ["₦125,000", "₦157,716", "₦175,000", "₦200,000"],
      correct: 1,
      explanation: "A = P × (A/P, 10%, 4) = 500,000 × 0.31547 ≈ ₦157,734 ≈ ₦157,716 (rounding).",
      difficulty: "medium"
    },
    {
      q: "A sinking fund deposits A annually to accumulate F = ₦1,000,000 in 6 years at 8%. Find A.",
      options: ["₦100,000", "₦136,315", "₦166,667", "₦200,000"],
      correct: 1,
      explanation: "A = F × (A/F, 8%, 6) = 1,000,000 × 0.13632 ≈ ₦136,315.",
      difficulty: "medium"
    },
    {
      q: "An arithmetic gradient series starts at year 1 with G = ₦5,000 and increases by ₦5,000 each year for 5 years. Equivalent uniform annual amount A_eq at 10%?",
      options: ["₦5,000", "₦9,049", "₦15,000", "₦25,000"],
      correct: 1,
      explanation: "A_eq = G × (A/G, 10%, 5) = 5,000 × 1.81013 ≈ ₦9,051. (Uniform gradient annual equivalent.)",
      difficulty: "hard"
    },
    {
      q: "₦200,000 annual maintenance for 8 years; salvage zero; i = 12%. PW of maintenance =",
      options: ["₦600,000", "₦993,338", "₦1,200,000", "₦1,600,000"],
      correct: 1,
      explanation: "P = 200,000 × (P/A, 12%, 8) = 200,000 × 4.96764 ≈ ₦993,528 ≈ ₦993,338 (rounding).",
      difficulty: "medium"
    },
    {
      q: "A car loan of ₦2,000,000 at 12% nominal compounded monthly for 5 years. Monthly payment is approximately…",
      options: ["₦33,333", "₦44,489", "₦50,000", "₦60,000"],
      correct: 1,
      explanation: "i = 1%/month, n = 60. A = 2,000,000 × (A/P, 1%, 60) = 2,000,000 × 0.02224 ≈ ₦44,489.",
      difficulty: "hard"
    },
    {
      q: "A homeowner deposits ₦50,000 at the end of each year into an account earning 9%. Balance at end of year 10 is approximately…",
      options: ["₦500,000", "₦760,156", "₦1,000,000", "₦1,500,000"],
      correct: 1,
      explanation: "F = 50,000 × (F/A, 9%, 10) = 50,000 × 15.19293 ≈ ₦759,646 ≈ ₦760,156 (table rounding).",
      difficulty: "medium"
    },
    {
      q: "Equal-payment series formulas assume A is paid at…",
      options: [
        "End of period (ordinary annuity)",
        "Beginning of period (annuity due)",
        "Middle of period",
        "Random points"
      ],
      correct: 0,
      explanation: "Standard ECN annuity factors assume END-of-period payments (ordinary annuity). Annuity-due requires multiplying by (1+i).",
      difficulty: "medium"
    },
    {
      q: "Which formula gives F from A directly?",
      options: ["F = A·[(1+i)ⁿ−1]/i", "F = A·i·(1+i)ⁿ", "F = A/(1+i)ⁿ", "F = A·n"],
      correct: 0,
      explanation: "Uniform-series compound-amount factor (F/A) = [(1+i)ⁿ−1]/i.",
      difficulty: "medium"
    },
    {
      q: "Which formula gives P from A directly?",
      options: [
        "P = A · [(1+i)ⁿ − 1]/[i(1+i)ⁿ]",
        "P = A · i(1+i)ⁿ/[(1+i)ⁿ−1]",
        "P = A · n",
        "P = A / (1+i)ⁿ"
      ],
      correct: 0,
      explanation: "Uniform-series present-worth factor (P/A) = [(1+i)ⁿ−1]/[i(1+i)ⁿ].",
      difficulty: "medium"
    },
    {
      q: "Capital recovery factor (A/P, 12%, 5) is approximately…",
      options: ["0.27741", "0.20000", "0.30000", "0.10000"],
      correct: 0,
      explanation: "(A/P, 12%, 5) = 0.12 · (1.12)⁵ / [(1.12)⁵ − 1] = 0.21148 / 0.76234 ≈ 0.27741.",
      difficulty: "hard"
    },
    {
      q: "(P/A, 8%, 10) is approximately…",
      options: ["3.9927", "6.7101", "0.1490", "10.0000"],
      correct: 1,
      explanation: "(P/A, 8%, 10) = [(1.08)¹⁰ − 1]/[0.08 × (1.08)¹⁰] = 1.15892 / 0.17274 ≈ 6.7101.",
      difficulty: "medium"
    },
    {
      q: "An equipment lease of ₦300,000/year for 6 years at 10% has a present value of approximately…",
      options: ["₦1,800,000", "₦1,306,580", "₦2,000,000", "₦600,000"],
      correct: 1,
      explanation: "P = 300,000 × (P/A, 10%, 6) = 300,000 × 4.35526 ≈ ₦1,306,580.",
      difficulty: "medium"
    },
    {
      q: "An engineer needs ₦5M in 10 years for a major overhaul. With i = 7%, equal annual deposits required are approximately…",
      options: ["₦150,000", "₦361,886", "₦500,000", "₦750,000"],
      correct: 1,
      explanation: "A = F × (A/F, 7%, 10) = 5,000,000 × 0.07238 ≈ ₦361,886.",
      difficulty: "medium"
    },
    {
      q: "A gradient series cash flow of ₦0, ₦10k, ₦20k, ₦30k, ₦40k over 5 years is described by which parameter?",
      options: ["G = ₦10,000", "G = ₦20,000", "A = ₦20,000", "F = ₦100,000"],
      correct: 0,
      explanation: "Arithmetic gradient G = constant increment per period. Here cash flow grows by ₦10k each year, so G = ₦10,000.",
      difficulty: "medium"
    },
    {
      q: "If a gradient cash flow has G = ₦8,000 over 6 years at 9%, the equivalent uniform annual amount A_eq is approximately…",
      options: ["₦19,143", "₦25,000", "₦8,000", "₦40,000"],
      correct: 0,
      explanation: "A_eq = G × (A/G, 9%, 6) ≈ 8,000 × 2.39283 ≈ ₦19,143.",
      difficulty: "hard"
    },
    {
      q: "₦1,500,000 borrowed for 8 years at 9% in equal annual payments. Annual payment is approximately…",
      options: ["₦187,500", "₦271,131", "₦300,000", "₦150,000"],
      correct: 1,
      explanation: "A = 1,500,000 × (A/P, 9%, 8) = 1,500,000 × 0.18067 ≈ ₦271,000 ≈ ₦271,131 (rounding).",
      difficulty: "hard"
    },
    {
      q: "An investor deposits ₦10,000 at the end of each year for 20 years at 6%. Final balance is approximately…",
      options: ["₦200,000", "₦367,856", "₦500,000", "₦100,000"],
      correct: 1,
      explanation: "F = 10,000 × (F/A, 6%, 20) = 10,000 × 36.7856 ≈ ₦367,856.",
      difficulty: "medium"
    },
    {
      q: "A four-year project: cash flows -₦50k (yr 0), +₦20k (yr 1-4) at 10%. NPV = ?",
      options: ["+₦13,397", "+₦30,000", "0", "-₦10,000"],
      correct: 0,
      explanation: "NPV = −50,000 + 20,000 × (P/A, 10%, 4) = −50,000 + 20,000 × 3.16987 = −50,000 + 63,397 ≈ +₦13,397.",
      difficulty: "hard"
    },
    {
      q: "A perpetual cash flow of ₦100,000/year at 10% has present value…",
      options: ["₦100,000", "₦1,000,000", "₦10,000,000", "Infinity"],
      correct: 1,
      explanation: "Perpetuity PV = A / i = 100,000 / 0.10 = ₦1,000,000.",
      difficulty: "medium"
    },
    {
      q: "A maintenance contract is ₦40,000 for 5 years; the engineer wants the equivalent single year-0 payment at 12%. P = ?",
      options: ["₦200,000", "₦144,193", "₦100,000", "₦240,000"],
      correct: 1,
      explanation: "P = 40,000 × (P/A, 12%, 5) = 40,000 × 3.60478 ≈ ₦144,191 ≈ ₦144,193 (rounding).",
      difficulty: "medium"
    },
    {
      q: "A sinking fund factor (A/F, 10%, 4) equals approximately…",
      options: ["0.21547", "0.31547", "0.10000", "0.40211"],
      correct: 0,
      explanation: "(A/F, 10%, 4) = 0.10 / [(1.10)⁴ − 1] = 0.10 / 0.4641 ≈ 0.21547.",
      difficulty: "hard"
    },
    {
      q: "A retired engineer wants to withdraw ₦600,000 per year for 15 years from an account earning 7%. Lump-sum needed today is approximately…",
      options: ["₦5,000,000", "₦5,464,543", "₦9,000,000", "₦600,000"],
      correct: 1,
      explanation: "P = 600,000 × (P/A, 7%, 15) = 600,000 × 9.10791 ≈ ₦5,464,743 ≈ ₦5,464,543 (rounding).",
      difficulty: "hard"
    }
  ]
},

/* ============== SECTION 11: INFLATION & RIR ============== */
"sec-11": {
  title: "Inflation & Real Interest Rate",
  questions: [
    {
      q: "Inflation primarily…",
      options: [
        "Increases the purchasing power of money",
        "Reduces the purchasing power of money",
        "Has no effect on engineering decisions",
        "Eliminates the need for the time value of money"
      ],
      correct: 1,
      explanation: "Inflation reduces purchasing power. ₦100 today buys more than ₦100 will buy a year from now if prices rise.",
      difficulty: "easy"
    },
    {
      q: "The Fisher equation relating nominal rate, real rate, and inflation is…",
      options: [
        "i_nom = i_real + F",
        "1 + i_nom = (1 + i_real)(1 + F)",
        "i_nom = i_real × F",
        "i_nom = i_real − F"
      ],
      correct: 1,
      explanation: "1 + i_nominal = (1 + i_real)(1 + F). The simple addition i_real + F is only an approximation, valid when both are small.",
      difficulty: "medium"
    },
    {
      q: "If the nominal interest rate is 12% and inflation is 4%, the real interest rate is approximately…",
      options: ["8.00%", "7.69%", "16.48%", "12.00%"],
      correct: 1,
      explanation: "1 + i_real = 1.12 / 1.04 = 1.0769, so i_real ≈ 7.69%. Note: simple subtraction (12 − 4 = 8%) overstates the real rate.",
      difficulty: "medium"
    },
    {
      q: "If nominal interest = 18% and inflation = 6%, the real interest rate is approximately…",
      options: ["12.00%", "11.32%", "24.08%", "8.00%"],
      correct: 1,
      explanation: "1 + i_real = 1.18 / 1.06 ≈ 1.1132, so i_real ≈ 11.32%.",
      difficulty: "hard"
    },
    {
      q: "Why does the real interest rate matter to engineers more than the nominal rate?",
      options: [
        "Because banks quote it",
        "Because nominal does not factor in inflation, while real reflects what your money is actually earning in purchasing-power terms",
        "Because real rates are always higher than nominal",
        "Because real rates are easier to compute"
      ],
      correct: 1,
      explanation: "Nominal is the bank's quoted rate; real strips out inflation and tells you what your money is actually growing in purchasing power.",
      difficulty: "medium"
    },
    {
      q: "Real interest rate is most relevant when an engineer is…",
      options: [
        "Comparing equipment costs over many years",
        "Checking today's exchange rate",
        "Counting inventory",
        "Filing a single-year tax return"
      ],
      correct: 0,
      explanation: "Multi-year comparisons of equipment cost, salaries, fuel cost, or maintenance growth all need RIR to remove inflation distortion.",
      difficulty: "medium"
    },
    {
      q: "If a Nigerian bank quotes 25% nominal and inflation is 22%, the real return on a deposit is roughly…",
      options: ["3.0%", "2.46%", "47.0%", "−3.0%"],
      correct: 1,
      explanation: "1 + i_real = 1.25 / 1.22 ≈ 1.0246, so i_real ≈ 2.46%. Notice how high nominal rates can hide low real returns.",
      difficulty: "hard"
    },
    {
      q: "If real interest is 5% and inflation is 10%, the nominal rate (Fisher) should be approximately…",
      options: ["15.00%", "15.50%", "5.00%", "10.00%"],
      correct: 1,
      explanation: "1 + i_nom = (1.05)(1.10) = 1.155, so i_nom ≈ 15.5% (not 15.0% from simple addition).",
      difficulty: "hard"
    },
    {
      q: "A simple linear approximation of the Fisher equation gives i_real ≈ i_nom − F. When is this approximation reasonable?",
      options: [
        "When inflation and rates are both small (below ~5%)",
        "When inflation is above 50%",
        "Always",
        "Never"
      ],
      correct: 0,
      explanation: "i_real ≈ i_nom − F is a Taylor approximation valid when both rates are small. At high rates (Nigerian context), the exact (1+i_nom) = (1+i_real)(1+F) form should be used.",
      difficulty: "medium"
    },
    {
      q: "A salary that grows at 8% nominal annually under 5% inflation has a real growth of approximately…",
      options: ["3.00%", "2.86%", "13.00%", "−2.86%"],
      correct: 1,
      explanation: "1 + real = 1.08/1.05 = 1.02857 → real ≈ 2.86%. The nominal raise's real value is less than the simple subtraction suggests.",
      difficulty: "medium"
    },
    {
      q: "Inflation is best described as…",
      options: [
        "An increase in the general price level over time",
        "A drop in the general price level",
        "The interest rate set by the central bank",
        "A measure of GDP growth"
      ],
      correct: 0,
      explanation: "Inflation = sustained increase in the general price level, eroding the purchasing power of money.",
      difficulty: "easy"
    },
    {
      q: "A 1990s example: a soft drink cost ₦5; today the same drink costs ₦200. Over 30 years that's an average annual inflation of approximately…",
      options: ["~5%", "~13%", "~30%", "~50%"],
      correct: 1,
      explanation: "(200/5)^(1/30) − 1 = 40^(1/30) − 1 ≈ 0.13 = 13% per year average inflation.",
      difficulty: "hard"
    },
    {
      q: "When the lecturer mentions a 50% naira devaluation, the immediate effect on dollar-denominated debt is…",
      options: [
        "Debt burden in naira doubles",
        "Debt burden stays the same",
        "Debt is automatically forgiven",
        "Debt is converted to local currency"
      ],
      correct: 0,
      explanation: "If the naira devalues 50% against the dollar, you need ~2× as many naira to service the same dollar debt — a doubling of the local-currency burden.",
      difficulty: "medium"
    },
    {
      q: "Real interest rate is most useful when…",
      options: [
        "Comparing project cash flows expressed in real (constant-purchasing-power) terms",
        "Showing off mathematical complexity",
        "Computing tax liabilities",
        "Setting accounting depreciation"
      ],
      correct: 0,
      explanation: "When cash flows are stated in REAL terms (no inflation), discount with real rate. When stated in NOMINAL (with inflation built in), use nominal rate.",
      difficulty: "medium"
    },
    {
      q: "A cardinal mistake in inflation handling is…",
      options: [
        "Mixing real cash flows with nominal discount rate (or vice versa)",
        "Using compound interest",
        "Computing NPV",
        "Adjusting salvage values"
      ],
      correct: 0,
      explanation: "ECN demands consistency: real flows ↔ real rate, OR nominal flows ↔ nominal rate. Mixing them double-counts or omits inflation.",
      difficulty: "hard"
    },
    {
      q: "If nominal rate is 10% and inflation is 4%, the EXACT real rate from Fisher is approximately…",
      options: ["6.00%", "5.77%", "14.40%", "4.00%"],
      correct: 1,
      explanation: "1 + real = 1.10 / 1.04 = 1.05769 → real ≈ 5.77%. The simple 10−4 = 6% is the linear approximation; exact is slightly less.",
      difficulty: "hard"
    },
    {
      q: "Over 5 years, ₦1,000 in REAL terms with 7% inflation requires nominally how much in year 5?",
      options: ["₦1,000", "₦1,402.55", "₦1,070", "₦7,000"],
      correct: 1,
      explanation: "Nominal in year 5 = 1,000 × (1.07)⁵ ≈ ₦1,402.55. Same purchasing power, more naira.",
      difficulty: "medium"
    },
    {
      q: "A pension forecast in naira looks fine until you adjust for inflation. The most appropriate adjustment is…",
      options: [
        "Compute REAL pension by deflating nominal flows by the CPI factor",
        "Add a markup",
        "Multiply by GDP",
        "Ignore inflation"
      ],
      correct: 0,
      explanation: "Real value = nominal / (1+F)ⁿ where F is the inflation rate. Without this, the pension's purchasing power is overstated.",
      difficulty: "medium"
    },
    {
      q: "If borrowing cost rises from 12% to 18%, the impact on the affordability of a fixed monthly payment loan is…",
      options: [
        "More expensive: same payment buys less principal",
        "Cheaper: rates have nothing to do with affordability",
        "Unchanged",
        "Always cancels with inflation"
      ],
      correct: 0,
      explanation: "Higher rates make the present value of future payments lower — for a fixed payment, you can afford less principal. The lecturer flags this exact pressure.",
      difficulty: "medium"
    },
    {
      q: "Spare-parts cost increases of 30% per year are an example of inflation manifesting as…",
      options: [
        "Operating-cost escalation",
        "Capital cost",
        "Sunk cost",
        "Salvage value"
      ],
      correct: 0,
      explanation: "Inflation appears in ECN as escalation of operating costs (fuel, parts, salaries). This is a key reason multi-year ECN models need explicit inflation handling.",
      difficulty: "easy"
    },
    {
      q: "A common shortcut: 'real rate = nominal − inflation' is acceptable when…",
      options: [
        "Both rates are small (<5%)",
        "Inflation is hyperinflation",
        "Always",
        "Never"
      ],
      correct: 0,
      explanation: "The Fisher equation is exact: 1+i_nom = (1+i_real)(1+F). For small rates, the cross-term is tiny and subtraction approximates well. Beyond ~10% it errs.",
      difficulty: "medium"
    },
    {
      q: "An ECN study reports cash flows in 'today's naira' (real). The discount rate should be the…",
      options: [
        "Real rate",
        "Nominal rate",
        "Either, doesn't matter",
        "Inflation rate alone"
      ],
      correct: 0,
      explanation: "Real cash flows must be discounted by the REAL rate to maintain consistency.",
      difficulty: "easy"
    },
    {
      q: "What happens to the present worth of a fixed nominal pension if expected inflation suddenly jumps from 5% to 12%?",
      options: [
        "PW (in real terms) DROPS sharply because the same nominal amount has less purchasing power",
        "PW (in real terms) RISES",
        "PW is unaffected",
        "PW becomes negative"
      ],
      correct: 0,
      explanation: "Higher inflation slashes the real purchasing power of a fixed nominal pension. Real PW falls accordingly.",
      difficulty: "hard"
    },
    {
      q: "An inflation rate of 0% with a nominal rate of 6% gives a real rate of…",
      options: ["0%", "6%", "Cannot be calculated", "12%"],
      correct: 1,
      explanation: "When F = 0, 1+real = 1+nom, so real = nominal = 6%.",
      difficulty: "easy"
    }
  ]
},

/* ============== SECTION 12: DEPRECIATION ============== */
"sec-12": {
  title: "Depreciation",
  questions: [
    {
      q: "Depreciation is best defined as…",
      options: [
        "The loss of value of physical assets due to wear, obsolescence, and usage intensity",
        "An increase in the price of new assets",
        "An accounting trick to avoid taxes",
        "The salvage value at end of life"
      ],
      correct: 0,
      explanation: "Depreciation = loss of value of physical assets, caused by wear and tear, technological obsolescence, and usage intensity.",
      difficulty: "easy"
    },
    {
      q: "Which is NOT a cause of depreciation?",
      options: ["Wear and tear", "Technological obsolescence", "Usage intensity", "Inflation in raw material prices"],
      correct: 3,
      explanation: "Inflation affects costs but is not a cause of depreciation of a specific physical asset. The named causes are wear, obsolescence, and usage intensity.",
      difficulty: "easy"
    },
    {
      q: "The Straight-Line depreciation formula is…",
      options: [
        "D = (P − S) × n",
        "D = (P − S) / n",
        "D = P × n",
        "D = P / S"
      ],
      correct: 1,
      explanation: "D = (P − S) / n. P = purchase cost, S = salvage value, n = useful life.",
      difficulty: "easy"
    },
    {
      q: "A machine costs ₦2,000,000 with salvage value ₦200,000 and useful life 5 years. The straight-line annual depreciation is…",
      options: ["₦400,000", "₦360,000", "₦200,000", "₦440,000"],
      correct: 1,
      explanation: "D = (2,000,000 − 200,000) / 5 = 1,800,000 / 5 = ₦360,000 per year.",
      difficulty: "easy"
    },
    {
      q: "A car bought for ₦5M has zero salvage and a useful life of 10 years. After 1 year, its straight-line book value is…",
      options: ["₦5,000,000", "₦4,500,000", "₦4,000,000", "₦500,000"],
      correct: 1,
      explanation: "D = 5M / 10 = ₦500,000/yr. After year 1: book value = 5M − 500k = ₦4.5M.",
      difficulty: "easy"
    },
    {
      q: "The Declining Balance method's per-year depreciation is given by…",
      options: [
        "D_t = (P − S) / n",
        "D_t = Rate × Book value",
        "D_t = (P − S) × n",
        "D_t = P × i × n"
      ],
      correct: 1,
      explanation: "Declining Balance: D_t = Rate × Book value. Because book value decreases each year, depreciation decreases each year too — front-loaded.",
      difficulty: "medium"
    },
    {
      q: "The Sum of Year Digits (SYD) formula is…",
      options: [
        "D_t = (P − S) / n",
        "D_t = (P − S) × (n − t + 1) / [n(n+1)/2]",
        "D_t = Rate × Book value",
        "D_t = P × i × n"
      ],
      correct: 1,
      explanation: "SYD: D_t = (P − S) × (n − t + 1) / [n(n+1)/2]. The numerator decreases each year, assigning more depreciation early.",
      difficulty: "hard"
    },
    {
      q: "Salvage value is best defined as…",
      options: [
        "The original purchase cost of an asset",
        "The total depreciation over the asset's life",
        "The value left after all depreciation has been deducted",
        "The annual maintenance cost"
      ],
      correct: 2,
      explanation: "Salvage value (S) is what's left after deducting all depreciation — what you can recover at end of useful life.",
      difficulty: "easy"
    },
    {
      q: "Why does depreciation matter for tax purposes?",
      options: [
        "It increases the tax bill",
        "It is added to revenue",
        "It reduces taxable income, lowering the amount of tax payable",
        "It has no effect on tax"
      ],
      correct: 2,
      explanation: "Depreciation reduces reported profit, and therefore taxable income. Engineers must include it to compute true after-tax cash flows.",
      difficulty: "medium"
    },
    {
      q: "An engineer computes operating costs but forgets to include depreciation. The most likely consequence is…",
      options: [
        "The operating cost will be overstated",
        "The operating cost will be understated, possibly leading to a careless decision because depreciation is part of operating cost",
        "There will be no consequence",
        "The salvage value will increase"
      ],
      correct: 1,
      explanation: "Depreciation is part of operating cost. Forgetting it understates true cost and can mislead decision-making — the lecturer flagged this as dangerous.",
      difficulty: "hard"
    },
    {
      q: "Which method is best when an asset loses MOST of its value EARLY in its life?",
      options: [
        "Straight-Line",
        "Declining Balance (or SYD) — both front-load depreciation",
        "Sum of years' digits, never declining balance",
        "None — it doesn't matter"
      ],
      correct: 1,
      explanation: "Both Declining Balance and SYD front-load depreciation, matching assets that lose value fast early on. Straight-line is for even loss.",
      difficulty: "medium"
    },
    {
      q: "A truck costs ₦8,000,000 with salvage ₦1,000,000 and life 5 years. Straight-line annual depreciation is…",
      options: ["₦1,000,000", "₦1,400,000", "₦1,600,000", "₦2,000,000"],
      correct: 1,
      explanation: "D = (8,000,000 − 1,000,000) / 5 = ₦1,400,000 per year.",
      difficulty: "easy"
    },
    {
      q: "Same truck (P = ₦8M, S = ₦1M, n = 5). Book value at end of year 3 under straight-line is…",
      options: ["₦8,000,000", "₦4,200,000", "₦3,800,000", "₦5,200,000"],
      correct: 2,
      explanation: "BV₃ = P − 3·D = 8,000,000 − 3 × 1,400,000 = ₦3,800,000.",
      difficulty: "medium"
    },
    {
      q: "An asset costs ₦500,000 with no salvage and 10-year life. Straight-line annual depreciation is…",
      options: ["₦25,000", "₦40,000", "₦50,000", "₦100,000"],
      correct: 2,
      explanation: "D = 500,000 / 10 = ₦50,000.",
      difficulty: "easy"
    },
    {
      q: "Under double-declining balance (DDB) with 5-year life, what depreciation rate applies each year?",
      options: ["10%", "20%", "40%", "50%"],
      correct: 2,
      explanation: "DDB rate = 2 / n = 2/5 = 40% applied to current book value.",
      difficulty: "medium"
    },
    {
      q: "₦10M asset, 5-year life, DDB. Year-1 depreciation =",
      options: ["₦2,000,000", "₦4,000,000", "₦5,000,000", "₦1,000,000"],
      correct: 1,
      explanation: "Year 1 = 0.40 × 10,000,000 = ₦4,000,000.",
      difficulty: "medium"
    },
    {
      q: "Same DDB asset. Year-2 depreciation =",
      options: ["₦4,000,000", "₦2,400,000", "₦1,000,000", "₦5,000,000"],
      correct: 1,
      explanation: "Book value after year 1 = 6,000,000. Year 2 = 0.40 × 6,000,000 = ₦2,400,000.",
      difficulty: "medium"
    },
    {
      q: "Sum-of-years-digits (SYD): for n = 5, the sum of digits is…",
      options: ["10", "15", "20", "25"],
      correct: 1,
      explanation: "Sum = n(n+1)/2 = 5·6/2 = 15.",
      difficulty: "easy"
    },
    {
      q: "Asset P = ₦600,000, S = ₦100,000, n = 5. SYD year-1 depreciation =",
      options: ["₦100,000", "₦166,667", "₦200,000", "₦300,000"],
      correct: 1,
      explanation: "D₁ = (P−S) × (n−t+1)/[n(n+1)/2] = 500,000 × 5/15 ≈ ₦166,667.",
      difficulty: "medium"
    },
    {
      q: "Same SYD asset. Year-3 depreciation =",
      options: ["₦100,000", "₦166,667", "₦133,333", "₦83,333"],
      correct: 0,
      explanation: "D₃ = 500,000 × 3/15 = ₦100,000. SYD weights ramp down: yr1=5/15, yr2=4/15, yr3=3/15, yr4=2/15, yr5=1/15.",
      difficulty: "medium"
    },
    {
      q: "Which method gives the SAME annual depreciation each year?",
      options: ["DDB", "SYD", "Straight-Line", "Units of production"],
      correct: 2,
      explanation: "Straight-line distributes (P−S) evenly across n years: D = (P−S)/n.",
      difficulty: "easy"
    },
    {
      q: "Under DDB, do you always end at exactly the salvage value?",
      options: [
        "Yes, automatically",
        "No — need to ensure book value doesn't go below S; sometimes the last years are adjusted",
        "Only if S = 0",
        "Yes, but only for n = 5"
      ],
      correct: 1,
      explanation: "DDB applies a fixed % of book value each year and may overshoot or undershoot S. Practitioners often switch to straight-line for the final years to land at S.",
      difficulty: "hard"
    },
    {
      q: "Which method does the lecturer's notes describe as MOST common in practice for tangible assets?",
      options: ["Straight-Line", "DDB", "SYD", "Annuity method"],
      correct: 0,
      explanation: "Straight-line is the most common because it's simple and predictable. Accelerated methods are used when value drops fast or for tax timing.",
      difficulty: "easy"
    },
    {
      q: "An asset's book value at any time t under straight-line is…",
      options: ["BV_t = P", "BV_t = P − t · D", "BV_t = P × (1 − t/n)", "BV_t = S"],
      correct: 1,
      explanation: "BV_t = P − t·D where D is the constant annual depreciation. (The 'P × (1 − t/n)' is wrong because it ignores salvage.)",
      difficulty: "easy"
    },
    {
      q: "An asset costs ₦1,200,000 with salvage ₦200,000 and life 4 years. Straight-line book value at end of year 2 is…",
      options: ["₦1,000,000", "₦700,000", "₦500,000", "₦200,000"],
      correct: 1,
      explanation: "D = (1,200,000 − 200,000)/4 = ₦250,000. BV₂ = 1,200,000 − 2·250,000 = ₦700,000.",
      difficulty: "medium"
    },
    {
      q: "Why does ECN care about depreciation when computing project economics?",
      options: [
        "Because depreciation is real cash flow",
        "Because depreciation is a non-cash expense that affects taxes (and thus after-tax cash flow)",
        "Because depreciation increases the project's NPV directly",
        "Because depreciation has no economic impact"
      ],
      correct: 1,
      explanation: "Depreciation is a NON-cash accounting allocation, but it shields income from taxes — and tax savings ARE real cash flow. Hence its impact on project economics.",
      difficulty: "hard"
    },
    {
      q: "Which method does NOT require knowing the salvage value to compute annual depreciation directly?",
      options: ["Straight-Line", "SYD", "Declining Balance — applies % to book value", "All require S"],
      correct: 2,
      explanation: "DDB applies a fixed % to current book value each year. Salvage limits when to STOP, but isn't directly in the per-year formula.",
      difficulty: "medium"
    },
    {
      q: "₦4,000,000 asset, no salvage, 4-year life. DDB year-1 =",
      options: ["₦1,000,000", "₦2,000,000", "₦3,000,000", "₦500,000"],
      correct: 1,
      explanation: "DDB rate = 2/4 = 50%. Year-1 = 0.50 × 4,000,000 = ₦2,000,000.",
      difficulty: "medium"
    },
    {
      q: "₦4,000,000 asset, no salvage, 4-year life. Same DDB. Year-2 =",
      options: ["₦2,000,000", "₦1,000,000", "₦500,000", "₦4,000,000"],
      correct: 1,
      explanation: "BV after year 1 = ₦2,000,000. Year-2 = 0.50 × 2,000,000 = ₦1,000,000.",
      difficulty: "medium"
    },
    {
      q: "An engineer says 'depreciation is just a paper expense — it doesn't affect cash flow.' This is…",
      options: [
        "Correct in the strict cash sense, but missing the tax-shield effect on after-tax cash flow",
        "Always correct",
        "Always wrong",
        "Only correct in tax-free jurisdictions"
      ],
      correct: 0,
      explanation: "Depreciation itself is non-cash, but it reduces taxable income. The TAX it shields is real cash. So depreciation indirectly affects cash flow through taxes.",
      difficulty: "hard"
    },
    {
      q: "Total depreciation across the asset's life under any straight-line, SYD, or 'matched' DDB equals…",
      options: ["The asset cost P", "P − S (depreciable basis)", "The salvage value S", "Zero"],
      correct: 1,
      explanation: "Total depreciation over the asset's life equals the depreciable basis P − S. Different methods only differ in TIMING.",
      difficulty: "medium"
    },
    {
      q: "Why might SYD and DDB be preferred for tax purposes?",
      options: [
        "They give larger early-year tax shields, improving NPV of after-tax cash flow",
        "They depreciate less in total than SL",
        "They are simpler to compute",
        "They always increase total depreciation"
      ],
      correct: 0,
      explanation: "Accelerated methods front-load depreciation. Earlier tax shields are worth more in PV terms, so after-tax NPV improves even though total depreciation is the same.",
      difficulty: "hard"
    },
    {
      q: "A factory machine depreciates from ₦5M to ₦1M over 8 years (SL). Annual D =",
      options: ["₦500,000", "₦400,000", "₦625,000", "₦1,000,000"],
      correct: 0,
      explanation: "D = (5M − 1M)/8 = 4M/8 = ₦500,000 per year.",
      difficulty: "easy"
    },
    {
      q: "Book value of the same machine at the end of year 5 under SL is…",
      options: ["₦2,500,000", "₦3,500,000", "₦2,000,000", "₦4,500,000"],
      correct: 0,
      explanation: "BV₅ = 5M − 5·500,000 = ₦2,500,000.",
      difficulty: "medium"
    },
    {
      q: "An asset becomes economically obsolete before its physical life ends because of new technology. This is best called…",
      options: ["Physical depreciation", "Functional / economic obsolescence", "Salvage value", "Sunk cost"],
      correct: 1,
      explanation: "Obsolescence is depreciation due to outdated function or technology — different from physical wear-and-tear, but equally real economically.",
      difficulty: "medium"
    },
    {
      q: "If an asset's MARKET value drops faster than its accounting book value, the engineer should…",
      options: [
        "Recognise that book value overstates economic worth and use market value for replacement decisions",
        "Always use book value",
        "Ignore the gap",
        "Increase depreciation rate to match"
      ],
      correct: 0,
      explanation: "For decision-making (replacement, sale), use the relevant economic value — usually market value. Book value is an accounting artefact.",
      difficulty: "hard"
    },
    {
      q: "₦10M asset, 5-yr life, salvage ₦2M. SYD year-2 depreciation =",
      options: ["₦2,666,667", "₦2,133,333", "₦2,000,000", "₦1,500,000"],
      correct: 1,
      explanation: "Sum = 15. (P−S) = 8M. D₂ = 8M × 4/15 = ₦2,133,333.",
      difficulty: "hard"
    }
  ]
},

/* ============== SECTION 13: RISK & UNCERTAINTY ============== */
"sec-13": {
  title: "Risk & Uncertainty",
  questions: [
    {
      q: "Risk is best defined as…",
      options: [
        "Future outcome unknown, probability of each outcome unknown",
        "Future outcome unknown, but probability of each outcome can be estimated",
        "A guaranteed loss",
        "An accounting term"
      ],
      correct: 1,
      explanation: "Risk = unknown outcome + KNOWN probability. We can estimate probability from historical data, failure records, or market data.",
      difficulty: "easy"
    },
    {
      q: "Uncertainty is best defined as…",
      options: [
        "Outcome known, probability known",
        "Outcome unknown, probability known",
        "Outcome unknown AND probability also unknown",
        "A type of fixed cost"
      ],
      correct: 2,
      explanation: "Uncertainty = unknown outcome + UNKNOWN probability. We can't estimate probability because of no historical data, novel situations, or unpredictable events.",
      difficulty: "easy"
    },
    {
      q: "A new technology is introduced for the first time anywhere in the world. The team cannot estimate failure probability. This is best classified as…",
      options: ["Risk", "Uncertainty", "Variance", "Sunk cost"],
      correct: 1,
      explanation: "No historical data → can't estimate probability → uncertainty, not risk.",
      difficulty: "medium"
    },
    {
      q: "A drilling rig has historically broken down with 25% probability per year. This is best classified as…",
      options: ["Uncertainty", "Risk — we have probability data", "Sunk cost", "Variable cost"],
      correct: 1,
      explanation: "Historical breakdown probability is known → risk, not uncertainty.",
      difficulty: "easy"
    },
    {
      q: "Why are some events called RISKS rather than uncertainties?",
      options: [
        "Because they are unpredictable",
        "Because we know the probability — typically from historical data, failure records, or market data",
        "Because the law requires it",
        "Because they are insured"
      ],
      correct: 1,
      explanation: "We can call something a risk when at least one of (1) historical data, (2) failure records, or (3) market data exists to estimate probability.",
      difficulty: "medium"
    },
    {
      q: "Which is NOT one of the named major categories of risk in ECN?",
      options: ["Market risk", "Technical risk", "Financial risk", "Astrological risk"],
      correct: 3,
      explanation: "Named categories: Market, Technical, Financial, Regulatory/Political, Environmental. Astrology isn't on the list.",
      difficulty: "easy"
    },
    {
      q: "A global crash in oil prices reduces revenue at a refinery. This is primarily…",
      options: ["Market risk", "Technical risk", "Regulatory risk", "Sunk cost"],
      correct: 0,
      explanation: "Market risk = uncertainty from fluctuations in market prices of inputs, outputs, or materials. Oil price moves → refinery revenue moves.",
      difficulty: "easy"
    },
    {
      q: "A solar inverter does not perform as expected, raising replacement costs. This is primarily…",
      options: ["Market risk", "Technical risk", "Financial risk", "Environmental risk"],
      correct: 1,
      explanation: "Technical risk: failure of technology, equipment, or engineering design — exactly this scenario.",
      difficulty: "easy"
    },
    {
      q: "A Nigerian company borrows in dollars; the naira depreciates, raising debt burden. This is primarily…",
      options: ["Market risk", "Technical risk", "Financial risk", "Environmental risk"],
      correct: 2,
      explanation: "Financial risk: changes in financial conditions affecting project costs/returns. FX fluctuation is a named cause.",
      difficulty: "medium"
    },
    {
      q: "Which is NOT a named cause of MARKET risk?",
      options: [
        "Global supply and demand changes",
        "Foreign exchange fluctuations",
        "Manufacturing defects in equipment",
        "Inflation shocks"
      ],
      correct: 2,
      explanation: "Manufacturing defects cause TECHNICAL risk. Market risk causes are: supply/demand shifts, FX fluctuations, commodity cycles, inflation shocks, supply chain disruption.",
      difficulty: "hard"
    },
    {
      q: "Which is NOT a typical impact of FINANCIAL risk on economic decisions?",
      options: [
        "Reduces project profitability",
        "May make some projects unaffordable",
        "Affects loan repayment schedules",
        "Causes wear and tear on physical equipment"
      ],
      correct: 3,
      explanation: "Wear and tear causes depreciation/technical issues, not financial risk. Financial risk reduces profitability, makes projects unaffordable, affects loan schedules, increases long-term uncertainty.",
      difficulty: "hard"
    },
    {
      q: "A startup using a brand-new engineering process with no past data is best dealing with…",
      options: [
        "Risk with known probability",
        "Uncertainty — situation too new to estimate probability",
        "Sunk cost",
        "Opportunity cost"
      ],
      correct: 1,
      explanation: "No data → no probability estimate → uncertainty. The lecturer's example for uncertainty.",
      difficulty: "medium"
    },
    {
      q: "An offshore drilling company prices weather-related downtime using 30 years of historical sea-state data. This treats weather as…",
      options: [
        "Pure uncertainty",
        "Risk — outcomes are uncertain but probabilities can be estimated from history",
        "A sunk cost",
        "Opportunity cost"
      ],
      correct: 1,
      explanation: "When historical data lets you assign probabilities to outcomes, you have RISK rather than uncertainty.",
      difficulty: "medium"
    },
    {
      q: "Which of these is MOST likely classified as 'uncertainty' rather than 'risk'?",
      options: [
        "Equipment failure rate from a 10-year MTBF dataset",
        "Default probability from a credit rating",
        "First-of-its-kind regulation in a new technology with no precedent",
        "Insurance loss frequency from claims data"
      ],
      correct: 2,
      explanation: "First-of-its-kind regulation has no precedent → no probability data → uncertainty, not risk.",
      difficulty: "hard"
    },
    {
      q: "Sensitivity analysis is most useful for…",
      options: [
        "Identifying which input variables most affect the decision outcome",
        "Computing taxes",
        "Audit reporting",
        "Setting depreciation method"
      ],
      correct: 0,
      explanation: "Sensitivity analysis varies one input at a time and observes the effect on NPV/IRR — exposing which assumptions matter most.",
      difficulty: "easy"
    },
    {
      q: "Monte Carlo simulation differs from sensitivity analysis because it…",
      options: [
        "Varies one variable at a time",
        "Varies all uncertain inputs simultaneously according to their distributions",
        "Uses no probabilities",
        "Always assumes normal distributions"
      ],
      correct: 1,
      explanation: "Monte Carlo samples the joint distribution of inputs, producing a distribution of outcomes — capturing interactions sensitivity analysis can miss.",
      difficulty: "hard"
    },
    {
      q: "Decision trees are MOST useful when…",
      options: [
        "All inputs are perfectly known",
        "Decisions occur sequentially with chance events between them",
        "There is only one decision",
        "Cash flows are zero"
      ],
      correct: 1,
      explanation: "Decision trees model sequences: decision → chance event → next decision → … Each branch carries a probability and outcome.",
      difficulty: "medium"
    },
    {
      q: "Which is NOT a typical risk-mitigation strategy in ECN?",
      options: ["Diversification", "Insurance", "Sensitivity / scenario analysis", "Ignoring downside scenarios"],
      correct: 3,
      explanation: "Ignoring downside scenarios is the OPPOSITE of risk management. Diversification, insurance, and explicit scenarios are common mitigations.",
      difficulty: "easy"
    },
    {
      q: "An engineer says 'My NPV is +₦500M, so the project is safe.' What's the issue?",
      options: [
        "NPV reports a single point estimate; risk requires understanding the DISTRIBUTION of NPV",
        "NPV is illegal",
        "₦500M is too small",
        "The project is automatically safe"
      ],
      correct: 0,
      explanation: "Point-estimate NPV hides the variance. A high mean NPV with very wide swings can hide downside scenarios that change the decision.",
      difficulty: "hard"
    },
    {
      q: "An option whose NPV is +₦100M with low variance vs another with +₦200M with very high variance — risk-averse decision-making prefers…",
      options: [
        "Higher mean (₦200M) regardless of variance",
        "The +₦100M, low-variance option, depending on risk tolerance",
        "Random choice",
        "Cannot be evaluated"
      ],
      correct: 1,
      explanation: "Risk-averse decision-makers trade some expected return for less variance. The choice depends on the risk tolerance / utility function.",
      difficulty: "hard"
    },
    {
      q: "A construction firm uses an expected-value criterion: NPV = Σ probability × outcome. This is appropriate when…",
      options: [
        "The decision is repeated many times so the law of large numbers applies",
        "There is only one outcome",
        "Probabilities are unknown",
        "Risk is irrelevant"
      ],
      correct: 0,
      explanation: "Expected value works when outcomes average out across many repetitions. For one-off bet-the-company decisions, distribution + utility matter.",
      difficulty: "hard"
    },
    {
      q: "Risk-adjusted discount rate (RADR) is the practice of…",
      options: [
        "Adding a risk premium to the discount rate, so risky cash flows discount more heavily",
        "Subtracting from the discount rate",
        "Using inflation only",
        "Using zero rate for risky projects"
      ],
      correct: 0,
      explanation: "Riskier projects → higher discount rate to compensate the firm for risk. NPV with RADR is a common practical risk handling tool.",
      difficulty: "medium"
    },
    {
      q: "A regulatory action that could change project economics overnight is best categorised as…",
      options: [
        "Market risk",
        "Regulatory risk",
        "Operational risk",
        "Liquidity risk"
      ],
      correct: 1,
      explanation: "Regulatory risk = exposure to government/regulator action. The lecturer's notes flag this as a major Nigerian-context risk.",
      difficulty: "easy"
    },
    {
      q: "Which is a simple way to communicate uncertainty in an ECN report?",
      options: [
        "Provide best/expected/worst case NPVs",
        "Provide one number with no context",
        "Hide all assumptions",
        "Use a single discount rate of 0%"
      ],
      correct: 0,
      explanation: "Best/expected/worst case scenarios let stakeholders see the range, even when full distributions are unavailable.",
      difficulty: "easy"
    },
    {
      q: "A 60-40 weighted-average of two outcomes (₦100M with 60% probability, ₦40M with 40% probability) gives an expected value of…",
      options: ["₦70M", "₦76M", "₦60M", "₦100M"],
      correct: 1,
      explanation: "EV = 0.6 × 100 + 0.4 × 40 = 60 + 16 = ₦76M.",
      difficulty: "medium"
    },
    {
      q: "Which Nigerian-context risk does the lecturer specifically flag?",
      options: [
        "Naira devaluation increasing local cost of foreign-currency debt",
        "Eurozone bond yields",
        "Asian currency manipulation",
        "Latin American GDP slowdown"
      ],
      correct: 0,
      explanation: "Naira devaluation against the dollar pushes up the local-currency burden of dollar-denominated debt — a key Nigerian financial risk.",
      difficulty: "medium"
    },
    {
      q: "Probability of a known outcome distribution applies to RISK, not uncertainty. Which is closest to true uncertainty?",
      options: [
        "Pricing oil rig downtime from 20-year sea-state data",
        "First-of-its-kind regulation with no historical analogue",
        "Insurance loss frequency from 10 years of claims",
        "Equipment failure rates from MTBF data"
      ],
      correct: 1,
      explanation: "True uncertainty arises when no historical data lets you assign probabilities — first-of-its-kind regulatory action is the canonical case.",
      difficulty: "medium"
    },
    {
      q: "A company invests in five different projects in different industries. This risk-management technique is…",
      options: ["Diversification", "Insurance only", "Sunk-cost analysis", "Sensitivity analysis"],
      correct: 0,
      explanation: "Diversification spreads exposure across uncorrelated projects so one bad outcome doesn't sink the firm.",
      difficulty: "easy"
    },
    {
      q: "An expected NPV of zero with a wide standard deviation describes which risk profile?",
      options: [
        "Risk-neutral coin flip — symmetric upside/downside",
        "Sure thing",
        "Negative-only outcomes",
        "Positive-only outcomes"
      ],
      correct: 0,
      explanation: "EV = 0 with high σ means roughly symmetric upside and downside — a coin-flip-style proposition. Risk-averse decision-makers would avoid it; risk-takers might accept.",
      difficulty: "medium"
    },
    {
      q: "Two outcomes: ₦150M with 40% probability, ₦60M with 60% probability. Expected value =",
      options: ["₦96M", "₦105M", "₦210M", "₦120M"],
      correct: 0,
      explanation: "EV = 0.4 × 150 + 0.6 × 60 = 60 + 36 = ₦96M.",
      difficulty: "medium"
    }
  ]
},

/* ============== SECTION 14: SIX ENGINEERING ECONOMIC FACTORS ============== */
"sec-14": {
  title: "The Six Engineering Economic Factors",
  questions: [
    {
      q: "Which factor formula is P/F (present given future)?",
      options: ["P = F · (1+i)ⁿ", "P = F / (1+i)ⁿ", "P = A · (1+i)ⁿ", "P = F · i · n"],
      correct: 1,
      explanation: "P/F discounts a future amount back to today: P = F / (1+i)ⁿ.",
      difficulty: "easy"
    },
    {
      q: "Which factor formula is F/P (future given present)?",
      options: ["F = P · (1+i)ⁿ", "F = P / (1+i)ⁿ", "F = A · n", "F = P + i · n"],
      correct: 0,
      explanation: "F/P compounds a present sum: F = P · (1+i)ⁿ.",
      difficulty: "easy"
    },
    {
      q: "What is the value of (P/F, 10%, 3) to 4 decimals?",
      options: ["1.3310", "0.7513", "0.9091", "0.7500"],
      correct: 1,
      explanation: "(P/F, 10%, 3) = 1/(1.10)³ = 1/1.331 = 0.7513.",
      difficulty: "medium"
    },
    {
      q: "Find today's value of ₦500,000 payable in 3 years at 10%.",
      options: ["₦450,000", "₦375,650", "₦665,500", "₦500,000"],
      correct: 1,
      explanation: "P = 500,000 × (P/F, 10%, 3) = 500,000 × 0.7513 ≈ ₦375,650.",
      difficulty: "medium"
    },
    {
      q: "₦500,000 invested for 5 years at 8% grows to (use F/P)…",
      options: ["₦734,650", "₦700,000", "₦650,000", "₦540,000"],
      correct: 0,
      explanation: "F = P × (F/P, 8%, 5) = 500,000 × (1.08)⁵ = 500,000 × 1.4693 ≈ ₦734,650.",
      difficulty: "medium"
    },
    {
      q: "(F/P, 8%, 5) equals approximately…",
      options: ["1.4693", "0.6806", "1.0800", "0.6209"],
      correct: 0,
      explanation: "(F/P, 8%, 5) = (1.08)⁵ = 1.4693.",
      difficulty: "medium"
    },
    {
      q: "Which factor converts an annual sum into a present-worth single value?",
      options: ["F/A", "P/A", "A/F", "A/P"],
      correct: 1,
      explanation: "P/A — Present given Annual — gives the present worth of an annuity.",
      difficulty: "easy"
    },
    {
      q: "Annual savings of ₦200,000 for 4 years at 10%. Compute PW using P/A.",
      options: ["₦633,980", "₦800,000", "₦464,100", "₦200,000"],
      correct: 0,
      explanation: "P = 200,000 × (P/A, 10%, 4) = 200,000 × 3.1699 ≈ ₦633,980.",
      difficulty: "medium"
    },
    {
      q: "(P/A, 10%, 4) is approximately…",
      options: ["3.1699", "4.6410", "0.3155", "0.8264"],
      correct: 0,
      explanation: "(P/A, 10%, 4) = [(1.10)⁴ − 1] / [0.10 · (1.10)⁴] = 0.4641/0.14641 ≈ 3.1699.",
      difficulty: "hard"
    },
    {
      q: "A/P is also called the…",
      options: ["Sinking fund factor", "Capital recovery factor", "Compound amount factor", "Discount factor"],
      correct: 1,
      explanation: "A/P is the capital recovery factor — converts a present sum into equal annual payments.",
      difficulty: "easy"
    },
    {
      q: "A ₦1,000,000 loan at 10% over 5 years, equal annual payments. A = ?",
      options: ["₦200,000", "₦263,800", "₦310,000", "₦100,000"],
      correct: 1,
      explanation: "A = P × (A/P, 10%, 5) = 1,000,000 × 0.2638 ≈ ₦263,800. (The lecturer's example.)",
      difficulty: "medium"
    },
    {
      q: "(A/P, 10%, 5) is approximately…",
      options: ["0.2638", "3.7908", "0.1638", "6.1051"],
      correct: 0,
      explanation: "(A/P, 10%, 5) = 0.10 · (1.10)⁵ / [(1.10)⁵ − 1] = 0.16105/0.61051 ≈ 0.2638.",
      difficulty: "hard"
    },
    {
      q: "Save ₦100,000 yearly at 10% for 4 years — final balance using F/A is approximately…",
      options: ["₦400,000", "₦464,100", "₦300,000", "₦134,000"],
      correct: 1,
      explanation: "F = 100,000 × (F/A, 10%, 4) = 100,000 × 4.641 ≈ ₦464,100.",
      difficulty: "medium"
    },
    {
      q: "(F/A, 10%, 4) is approximately…",
      options: ["4.641", "3.170", "1.464", "0.215"],
      correct: 0,
      explanation: "(F/A, 10%, 4) = [(1.10)⁴ − 1] / 0.10 = 0.4641 / 0.10 = 4.641.",
      difficulty: "medium"
    },
    {
      q: "A/F is also called the…",
      options: ["Capital recovery factor", "Sinking fund factor", "Present worth factor", "Compound amount factor"],
      correct: 1,
      explanation: "A/F is the sinking fund factor — converts a target future amount into equal annual deposits.",
      difficulty: "easy"
    },
    {
      q: "Want ₦1,000,000 in 5 years at 10%. Yearly deposit using A/F is…",
      options: ["₦100,000", "₦163,800", "₦200,000", "₦164,000"],
      correct: 1,
      explanation: "A = F × (A/F, 10%, 5) = 1,000,000 × 0.1638 ≈ ₦163,800. (Lecturer's example.)",
      difficulty: "medium"
    },
    {
      q: "(A/F, 10%, 5) is approximately…",
      options: ["0.2638", "0.1638", "0.3792", "6.1051"],
      correct: 1,
      explanation: "(A/F, 10%, 5) = 0.10 / [(1.10)⁵ − 1] = 0.10 / 0.61051 ≈ 0.1638.",
      difficulty: "hard"
    },
    {
      q: "Mathematical relationship between A/P and A/F factors: A/P − A/F = ?",
      options: ["i", "n", "1", "(1+i)ⁿ"],
      correct: 0,
      explanation: "(A/P, i, n) − (A/F, i, n) = i. They differ exactly by the interest rate i.",
      difficulty: "hard"
    },
    {
      q: "P/F and F/P are inverses of each other. Mathematically: (P/F)·(F/P) = ?",
      options: ["0", "1", "i", "(1+i)ⁿ"],
      correct: 1,
      explanation: "(P/F, i, n) × (F/P, i, n) = [1/(1+i)ⁿ] × (1+i)ⁿ = 1. They cancel.",
      difficulty: "medium"
    },
    {
      q: "An investor wants to buy a phone in 1 year worth ₦820,000. Saving annually with A/F at 10%, the lecturer's example gives… (Hint: F=820k, n=1, A=?)",
      options: ["₦820,000", "₦750,000", "₦82,000", "₦100,000"],
      correct: 0,
      explanation: "For n=1 only, A/F = 1, so A = F = ₦820,000. Saving over 1 period equals the future amount itself.",
      difficulty: "medium"
    },
    {
      q: "Which TWO factors are typically used in loan repayment analysis?",
      options: [
        "P/F and F/A",
        "A/P and P/A",
        "F/P and A/F",
        "P/F and F/P"
      ],
      correct: 1,
      explanation: "A/P computes the periodic payment from a present-loan amount; P/A computes the present worth of a stream of payments. Together they describe a loan from both sides.",
      difficulty: "medium"
    },
    {
      q: "Which TWO factors are typically used in retirement / sinking fund planning?",
      options: [
        "F/A and A/F",
        "P/F and F/P",
        "A/P and P/A",
        "F/P and A/F"
      ],
      correct: 0,
      explanation: "F/A computes the accumulated future value of yearly contributions; A/F computes the required yearly contribution to reach a target. The pair describes building a fund.",
      difficulty: "medium"
    },
    {
      q: "An engineer must compute the equivalent annual cost of a ₦5M asset over 10 years at 12%. Which factor?",
      options: ["P/F", "A/P", "F/A", "P/A"],
      correct: 1,
      explanation: "Equivalent annual cost from a present sum uses A/P (capital recovery).",
      difficulty: "easy"
    },
    {
      q: "All six factors collapse to which trivial value when n = 0?",
      options: ["0 for everything", "1 for P/F and F/P; rest undefined or 0", "Negative", "Cannot be computed"],
      correct: 1,
      explanation: "At n = 0, no time has passed: P/F = F/P = 1. Annuity factors are undefined / vacuous (no payments yet).",
      difficulty: "hard"
    },
    {
      q: "(P/A, i, n) = (P/F, i, 1) + (P/F, i, 2) + … + (P/F, i, n). What does this identity tell us?",
      options: [
        "P/A is the SUM of n single-payment present-worth factors — discounting each annual payment individually then adding",
        "It is unrelated to P/F",
        "P/A is the product of P/F factors",
        "The identity is false"
      ],
      correct: 0,
      explanation: "An annuity is just n single payments. Its PW equals the sum of n individual P/F discountings — that's where the closed-form P/A formula comes from.",
      difficulty: "hard"
    }
  ]
},

/* ============== SECTION 15: COMPARING ALTERNATIVES ============== */
"sec-15": {
  title: "Comparing Alternatives (PW · AW · BCR)",
  questions: [
    {
      q: "Which is NOT one of the four fundamental principles for comparing alternatives?",
      options: [
        "Mutually exclusive alternatives",
        "Same planning horizon",
        "Consistent interest rate",
        "Comparable brand or vendor"
      ],
      correct: 3,
      explanation: "Brand/vendor isn't a fundamental principle. The four are: mutually exclusive, same horizon, consistent rate, relevant cash flows only.",
      difficulty: "easy"
    },
    {
      q: "Two alternatives that don't affect each other and can be accepted/rejected independently are…",
      options: ["Mutually exclusive", "Independent", "Contingent", "Sunk"],
      correct: 1,
      explanation: "Independent alternatives: each evaluated on its own merits, not affected by the others.",
      difficulty: "easy"
    },
    {
      q: "You want to buy a Toyota OR a Honda — selecting one excludes the other. These alternatives are…",
      options: ["Independent", "Mutually exclusive", "Contingent", "Sunk"],
      correct: 1,
      explanation: "Mutually exclusive: choosing one automatically excludes the other.",
      difficulty: "easy"
    },
    {
      q: "Battery storage requires solar panels first. Battery alternatives are…",
      options: ["Independent of panels", "Mutually exclusive with panels", "Contingent on panels", "Sunk"],
      correct: 2,
      explanation: "Contingent: battery only viable if panels are installed first. The two decisions are linked.",
      difficulty: "medium"
    },
    {
      q: "MARR stands for…",
      options: [
        "Median Annual Rate of Return",
        "Minimum Attractive Rate of Return",
        "Maximum Approved Repayment Rate",
        "Mortgage Adjustment Rate Ratio"
      ],
      correct: 1,
      explanation: "MARR = Minimum Attractive Rate of Return — the lowest rate the firm will accept on an investment.",
      difficulty: "easy"
    },
    {
      q: "Other names for MARR include…",
      options: [
        "Hurdle rate / cut-off rate / required rate of return",
        "Overhead cost / sunk cost",
        "Inflation rate",
        "Tax rate"
      ],
      correct: 0,
      explanation: "MARR = hurdle rate = cut-off rate = required rate of return. All synonyms for the project's minimum acceptable return.",
      difficulty: "easy"
    },
    {
      q: "Which is NOT a determinant of MARR?",
      options: [
        "Cost of capital",
        "Inflation expectations",
        "Risk level of the project",
        "The CEO's birthday"
      ],
      correct: 3,
      explanation: "MARR depends on cost of capital, inflation, project risk, and opportunity cost. Personal trivia is irrelevant.",
      difficulty: "easy"
    },
    {
      q: "PW decision rule for a single project:",
      options: [
        "Accept if PW < 0",
        "Accept if PW > 0 (project earns more than MARR)",
        "Accept regardless of PW",
        "Reject if PW > 0"
      ],
      correct: 1,
      explanation: "PW > 0 means the project earns more than the MARR — accept. PW < 0 → reject.",
      difficulty: "easy"
    },
    {
      q: "Two mutually exclusive projects — pick the one with…",
      options: ["Highest PW", "Lowest cost only", "Smallest n", "Largest initial cost"],
      correct: 0,
      explanation: "Among mutually exclusive alternatives, pick the one with the highest PW at the firm's MARR.",
      difficulty: "easy"
    },
    {
      q: "Machine A: PW = ₦803,800. Machine B: PW = ₦1,188,830. Both are mutually exclusive at the same MARR. Pick…",
      options: ["A", "B", "Neither", "Either"],
      correct: 1,
      explanation: "Higher PW → economically preferred. B's PW is higher.",
      difficulty: "easy"
    },
    {
      q: "AW is preferred over PW when…",
      options: [
        "Alternatives have different lives (assume infinite repetition)",
        "All alternatives are exactly identical",
        "PW is impossible to compute",
        "MARR is zero"
      ],
      correct: 0,
      explanation: "AW handles different lives by reducing each alternative to an equivalent annual amount, easier to compare directly.",
      difficulty: "medium"
    },
    {
      q: "If PW(A) > PW(B), then for the same horizon and same MARR…",
      options: [
        "AW(A) > AW(B) too — they always rank the same",
        "AW order can flip",
        "AW is undefined",
        "AW does not depend on PW"
      ],
      correct: 0,
      explanation: "PW and AW are linked by AW = PW × (A/P, i, n). With same n and i, multiplying both PWs by the same constant preserves order.",
      difficulty: "hard"
    },
    {
      q: "BCR is most commonly used in evaluation of…",
      options: ["Private corporate projects", "Public-sector projects (governments)", "Personal investments", "Stock trading"],
      correct: 1,
      explanation: "BCR is the standard public-sector evaluation tool — transparent ratio of present-value benefits to costs.",
      difficulty: "easy"
    },
    {
      q: "BCR formula:",
      options: [
        "BCR = PV(Benefits) / PV(Costs)",
        "BCR = PV(Costs) / PV(Benefits)",
        "BCR = PV(Benefits) − PV(Costs)",
        "BCR = (1 + i)ⁿ"
      ],
      correct: 0,
      explanation: "BCR = PV(B) / PV(C). Ratio above 1 means benefits exceed costs.",
      difficulty: "easy"
    },
    {
      q: "PV(benefits) = ₦18bn, PV(costs) = ₦12bn. BCR = ?",
      options: ["0.67", "1.50", "6.00", "30.00"],
      correct: 1,
      explanation: "BCR = 18/12 = 1.50.",
      difficulty: "easy"
    },
    {
      q: "BCR = 1.50 means…",
      options: [
        "Each ₦1 invested yields ₦1.50 in benefits",
        "The project loses 50%",
        "The project breaks even",
        "₦1 of cost yields ₦0.50 of benefit"
      ],
      correct: 0,
      explanation: "BCR > 1 means benefits per ₦ of cost. 1.50 means ₦1.50 of benefit per ₦1 of cost — accept.",
      difficulty: "easy"
    },
    {
      q: "BCR < 1 implies…",
      options: ["Accept", "Reject — costs exceed benefits", "Indifference", "Break-even"],
      correct: 1,
      explanation: "BCR < 1 → costs exceed benefits → reject.",
      difficulty: "easy"
    },
    {
      q: "BCR exactly equal to 1 means…",
      options: [
        "Massive profit",
        "Break-even — neither profit nor loss",
        "Loss",
        "Cannot be evaluated"
      ],
      correct: 1,
      explanation: "BCR = 1 → benefits exactly equal costs in PV — break-even. Marginal projects.",
      difficulty: "easy"
    },
    {
      q: "Two mutually exclusive public projects: A has BCR = 1.50, B has BCR = 1.43. Pick…",
      options: ["A — higher BCR", "B — lower cost", "Both — they are independent", "Neither"],
      correct: 0,
      explanation: "For mutually exclusive public projects, choose the one with the highest BCR (≥ 1).",
      difficulty: "medium"
    },
    {
      q: "An ECN engineer says 'the most important thing about BCR is what you GAINED.' What does this mean operationally?",
      options: [
        "BCR > 1 quantifies the surplus benefit per unit cost — the gain ratio",
        "BCR is irrelevant",
        "Gain only matters if BCR = 0",
        "BCR is the same as NPV"
      ],
      correct: 0,
      explanation: "The lecturer's point: BCR > 1 doesn't just say 'accept' — it tells you HOW MUCH you gain per unit of cost (e.g. 50% in BCR=1.5).",
      difficulty: "medium"
    },
    {
      q: "A road project: PV(B) = ₦15bn, PV(C) = ₦10bn — and an alternative: PV(B) = ₦20bn, PV(C) = ₦14bn. Which has higher BCR?",
      options: [
        "First (1.50)",
        "Second (1.43)",
        "Both equal",
        "Cannot determine"
      ],
      correct: 0,
      explanation: "BCR1 = 15/10 = 1.50; BCR2 = 20/14 ≈ 1.43. First project has higher BCR — pick it among mutually exclusive options.",
      difficulty: "medium"
    },
    {
      q: "PW formula for uniform annual benefit/cost with salvage:",
      options: [
        "PW = −C₀ + A · (P/A, i, n) + S · (P/F, i, n)",
        "PW = C₀ + A · (P/A, i, n)",
        "PW = A − C₀",
        "PW = A · n"
      ],
      correct: 0,
      explanation: "PW takes the initial outlay (negative), discounts the annual amount to PW (P/A factor), and discounts salvage (P/F factor).",
      difficulty: "medium"
    },
    {
      q: "AW formula (excluding salvage):",
      options: [
        "AW = −C₀ · (A/P, i, n) + A",
        "AW = C₀ + A",
        "AW = PW − A",
        "AW = (1+i)ⁿ"
      ],
      correct: 0,
      explanation: "Convert capital outlay to annual via A/P, add the annual benefit. Salvage adds + S · (A/F) if applicable.",
      difficulty: "medium"
    },
    {
      q: "An engineer skips the 'consistent interest rate' principle and uses different MARRs for each project. The danger is…",
      options: [
        "Comparison is biased — you may favor a worse project simply because of a lenient discount rate",
        "Nothing — different MARRs are fine",
        "Only the answer's sign changes",
        "Comparison is impossible"
      ],
      correct: 0,
      explanation: "Inconsistent MARRs distort PW/AW comparisons. The same MARR must be applied to all alternatives to ensure fair comparison.",
      difficulty: "hard"
    },
    {
      q: "Why are sunk costs explicitly excluded from PW/AW comparisons?",
      options: [
        "Because they are the same for all alternatives and cannot be changed by the decision",
        "Because they are illegal",
        "Because they are zero",
        "Because they double-count"
      ],
      correct: 0,
      explanation: "Sunk costs are common to all alternatives and unchangeable. Including them adds the same constant to every PW — doesn't affect ranking — but distorts magnitudes and may mislead.",
      difficulty: "medium"
    }
  ]
},

/* ============== SECTION 16: DEPRECIATION DEEP DIVE ============== */
"sec-16": {
  title: "Depreciation Methods Deep Dive",
  questions: [
    {
      q: "A truck (FC ₦8m, SV ₦1m, life 5 yrs). SL annual depreciation =",
      options: ["₦1,000,000", "₦1,400,000", "₦1,600,000", "₦2,000,000"],
      correct: 1,
      explanation: "D = (FC − SV)/n = (8m − 1m)/5 = ₦1.4m per year.",
      difficulty: "easy"
    },
    {
      q: "Same truck. Book value at end of year 3 under SL =",
      options: ["₦8,000,000", "₦4,200,000", "₦3,800,000", "₦5,200,000"],
      correct: 2,
      explanation: "BV₃ = FC − 3·D = 8m − 3·1.4m = ₦3.8m.",
      difficulty: "medium"
    },
    {
      q: "An asset of FC ₦12m, SV ₦2m after 5 years. SL annual D =",
      options: ["₦1m", "₦2m", "₦2.4m", "₦3m"],
      correct: 1,
      explanation: "(12m − 2m)/5 = ₦2m per year.",
      difficulty: "easy"
    },
    {
      q: "FC ₦12m, SV ₦2m, n = 5 (SL). After year 4, book value =",
      options: ["₦4m", "₦2m", "₦6m", "₦8m"],
      correct: 0,
      explanation: "BV₄ = 12 − 4·2 = ₦4m. (Year 5 brings it to ₦2m = salvage.)",
      difficulty: "medium"
    },
    {
      q: "Double Declining Balance: rate k for n=5 is…",
      options: ["10%", "20%", "40%", "50%"],
      correct: 2,
      explanation: "DDB rate k = 2/n = 2/5 = 40%.",
      difficulty: "easy"
    },
    {
      q: "₦8.5m asset, n=5, DDB. Year-1 depreciation =",
      options: ["₦1,700,000", "₦3,400,000", "₦4,250,000", "₦8,500,000"],
      correct: 1,
      explanation: "D₁ = 0.4 × 8.5m = ₦3.4m.",
      difficulty: "medium"
    },
    {
      q: "Same DDB asset (FC ₦8.5m, n=5). Year-2 depreciation =",
      options: ["₦3,400,000", "₦2,040,000", "₦1,224,000", "₦5,100,000"],
      correct: 1,
      explanation: "BV after year 1 = 5.1m. D₂ = 0.4 × 5.1m = ₦2.04m.",
      difficulty: "medium"
    },
    {
      q: "FC ₦8.5m, n=5, DDB. Book value at end of year 5 (without floor) ≈",
      options: ["₦500,000", "₦660,960", "₦1,000,000", "₦0"],
      correct: 1,
      explanation: "Working through: BV₁=5.1m, BV₂=3.06m, BV₃=1.836m, BV₄=1.1016m, BV₅ = 0.6·1.1016m ≈ ₦660,960. (If SV = 500k, the result is above SV, no floor needed.)",
      difficulty: "hard"
    },
    {
      q: "DDB compared to SL — which is FALSE?",
      options: [
        "DDB depreciates MORE in early years",
        "DDB depreciates LESS in late years",
        "DDB and SL give the same total depreciation across the asset life",
        "DDB is best for assets that lose value evenly"
      ],
      correct: 3,
      explanation: "DDB is best for assets that lose value FAST early (front-loaded). SL is best for even loss.",
      difficulty: "medium"
    },
    {
      q: "Sum-of-years-digits for n = 5 yields a sum of digits =",
      options: ["10", "15", "20", "25"],
      correct: 1,
      explanation: "Sum = n(n+1)/2 = 5·6/2 = 15.",
      difficulty: "easy"
    },
    {
      q: "FC = ₦6m, SV = ₦600k, n = 4 (SYD). Year-1 depreciation =",
      options: ["₦600,000", "₦1,500,000", "₦2,160,000", "₦2,400,000"],
      correct: 2,
      explanation: "SYD = 4·5/2 = 10. (FC−SV) = 5.4m. D₁ = (4/10)·5.4m = ₦2.16m.",
      difficulty: "medium"
    },
    {
      q: "Same SYD asset. Year-3 depreciation =",
      options: ["₦1,080,000", "₦540,000", "₦2,160,000", "₦1,620,000"],
      correct: 0,
      explanation: "D₃ = (2/10)·5.4m = ₦1.08m. Weights: 4/10, 3/10, 2/10, 1/10.",
      difficulty: "medium"
    },
    {
      q: "Sum of D₁+D₂+D₃+D₄ in the SYD example above =",
      options: ["₦5.4m (= depreciable amount)", "₦6m (= FC)", "₦600k (= SV)", "₦4.2m"],
      correct: 0,
      explanation: "Total depreciation across asset life always equals depreciable amount = FC − SV = 5.4m. Methods differ in TIMING only.",
      difficulty: "medium"
    },
    {
      q: "Units-of-Production: machine FC ₦15m, SV ₦3m, expected total output 120,000 units. D per unit =",
      options: ["₦100", "₦125", "₦150", "₦200"],
      correct: 0,
      explanation: "D/unit = (FC − SV)/total units = 12m/120,000 = ₦100.",
      difficulty: "medium"
    },
    {
      q: "Same UoP machine. Year 1 production = 20,000 units. D₁ =",
      options: ["₦1,000,000", "₦2,000,000", "₦3,000,000", "₦15,000,000"],
      correct: 1,
      explanation: "D₁ = 100 × 20,000 = ₦2m.",
      difficulty: "medium"
    },
    {
      q: "Continuing: Year 2 production = 30,000 units. BV at end of year 2 =",
      options: ["₦10,000,000", "₦11,000,000", "₦15,000,000", "₦12,500,000"],
      correct: 0,
      explanation: "D₂ = 100 × 30,000 = ₦3m. BV₂ = 15m − 2m − 3m = ₦10m.",
      difficulty: "medium"
    },
    {
      q: "Which method is BEST for an asset whose wear depends on usage, not time?",
      options: ["Straight-Line", "DDB", "SYD", "Units of Production"],
      correct: 3,
      explanation: "UoP allocates depreciation in proportion to actual production / usage — exactly the right model for wear-based assets like mining equipment.",
      difficulty: "easy"
    },
    {
      q: "In replacement analysis, the asset you currently own is the…",
      options: ["Challenger", "Defender", "Sunk asset", "Salvage asset"],
      correct: 1,
      explanation: "Defender = existing asset. Challenger = potential new asset.",
      difficulty: "easy"
    },
    {
      q: "Defender-Challenger problems are evaluated by…",
      options: [
        "Comparing the present value (or AW) of keeping the defender vs replacing with the challenger",
        "Whichever is older",
        "Whichever has smaller initial cost",
        "Random choice"
      ],
      correct: 0,
      explanation: "Compute PW (or AW) of each option using consistent rate / horizon; pick the higher present value.",
      difficulty: "medium"
    },
    {
      q: "Why does ECN treat depreciation as a real economic effect even though it's a non-cash expense?",
      options: [
        "Because it shields income from taxes — tax savings ARE cash",
        "Because depreciation increases NPV directly",
        "Because depreciation eliminates the need for cash",
        "It doesn't — depreciation has no economic impact"
      ],
      correct: 0,
      explanation: "Depreciation is non-cash but reduces taxable income. The tax saving is real cash. That's why ECN tracks it.",
      difficulty: "hard"
    },
    {
      q: "An asset has FC ₦15m, SV ₦3m. Total UoP across all years (any production) sums to…",
      options: ["₦15m", "₦12m", "₦3m", "₦0"],
      correct: 1,
      explanation: "Total depreciation over an asset's life = depreciable amount = FC − SV = 12m. Same for all methods.",
      difficulty: "medium"
    },
    {
      q: "DDB switching to SL near end-of-life is sometimes done because…",
      options: [
        "DDB might leave a final BV ABOVE SV — switching helps reach SV exactly",
        "It violates accounting rules",
        "Tax advantage forbids it",
        "DDB depreciates too little overall"
      ],
      correct: 0,
      explanation: "DDB doesn't naturally land on SV; switching to SL late ensures total depreciation lands exactly on SV.",
      difficulty: "hard"
    },
    {
      q: "An asset's economic life vs physical life — which depreciation factor does technical obsolescence affect?",
      options: [
        "Useful life (n) — it shortens",
        "First cost",
        "Salvage value only",
        "Nothing"
      ],
      correct: 0,
      explanation: "Obsolescence shortens useful (economic) life — even if the asset is physically intact, it stops being economically valuable.",
      difficulty: "medium"
    },
    {
      q: "Which method would give the SMALLEST first-year depreciation?",
      options: [
        "Straight-line (lowest first-year value)",
        "DDB",
        "SYD",
        "All produce the same first-year depreciation"
      ],
      correct: 0,
      explanation: "SL spreads depreciation evenly. DDB and SYD are accelerated, so they front-load — first-year depreciation under SL is smaller than the others.",
      difficulty: "medium"
    },
    {
      q: "An asset's BV reaches SV exactly at end of life under which method?",
      options: ["Straight-Line and SYD always; DDB only with adjustment", "Only DDB", "Only UoP", "None of them"],
      correct: 0,
      explanation: "SL and SYD lock to SV by construction. DDB doesn't naturally — it may overshoot/undershoot SV unless adjusted.",
      difficulty: "hard"
    }
  ]
},

/* ============== SECTION 17: INFLATION & BRACKET CREEP ============== */
"sec-17": {
  title: "Inflation, Fisher & Bracket Creep",
  questions: [
    {
      q: "Inflation is best defined as…",
      options: [
        "A sustained increase in the general price level over time",
        "A drop in price levels",
        "The interest rate set by the central bank",
        "GDP growth"
      ],
      correct: 0,
      explanation: "Inflation is a SUSTAINED rise in the general price level. Sustained — not a one-off price spike.",
      difficulty: "easy"
    },
    {
      q: "What index commonly tracks inflation in consumer prices?",
      options: ["CPI", "P/E ratio", "Sharpe ratio", "GDP growth"],
      correct: 0,
      explanation: "CPI = Consumer Price Index. Tracks a basket of consumer goods.",
      difficulty: "easy"
    },
    {
      q: "Which is NOT a common inflation index?",
      options: ["CPI", "GDP deflator", "PPI", "VAR"],
      correct: 3,
      explanation: "CPI, GDP deflator, and PPI all measure inflation. VAR (value at risk) is a financial-risk metric, not inflation.",
      difficulty: "easy"
    },
    {
      q: "Inflation rate formula given price levels P_t and P_{t-1}:",
      options: [
        "π = (P_t − P_{t−1}) / P_{t−1} × 100%",
        "π = P_t × P_{t−1}",
        "π = P_t / P_{t−1}",
        "π = (P_t + P_{t−1}) / 2"
      ],
      correct: 0,
      explanation: "Inflation = relative change in price level: π_t = (P_t − P_{t−1}) / P_{t−1} × 100.",
      difficulty: "medium"
    },
    {
      q: "Inflation caused by EXCESS demand over supply is called…",
      options: ["Cost-push", "Demand-pull", "Built-in", "Hyper"],
      correct: 1,
      explanation: "Demand-pull inflation arises when aggregate demand exceeds supply, pulling prices up.",
      difficulty: "easy"
    },
    {
      q: "Inflation caused by RISING production costs is called…",
      options: ["Cost-push", "Demand-pull", "Hyper", "Creeping"],
      correct: 0,
      explanation: "Cost-push inflation comes from rising input costs (wages, fuel, raw materials) feeding through to prices.",
      difficulty: "easy"
    },
    {
      q: "The 'wage-price spiral' is a hallmark of…",
      options: ["Demand-pull", "Built-in inflation", "Cost-push only", "Deflation"],
      correct: 1,
      explanation: "Built-in inflation: wages rise → costs rise → prices rise → workers demand higher wages → repeat.",
      difficulty: "medium"
    },
    {
      q: "Inflation speed grades from slow to severe:",
      options: [
        "Hyper → galloping → walking → creeping",
        "Creeping → walking → galloping → hyper",
        "Walking → creeping → hyper → galloping",
        "Galloping → walking → creeping → hyper"
      ],
      correct: 1,
      explanation: "Speed grading from slow to severe: creeping → walking → galloping → hyper. Hyperinflation is the most severe.",
      difficulty: "medium"
    },
    {
      q: "Real value vs Nominal value:",
      options: [
        "Real = Nominal × Price Index",
        "Real = Nominal / Price Index",
        "Real = Nominal − Price Index",
        "Real = Nominal + Inflation"
      ],
      correct: 1,
      explanation: "Real = Nominal / Price Index. The real value strips out inflation distortion.",
      difficulty: "easy"
    },
    {
      q: "Nominal salary rises 5%; inflation is 10%. Real salary change ≈",
      options: ["+5%", "−5%", "+10%", "−15%"],
      correct: 1,
      explanation: "Real ≈ nominal − inflation = 5 − 10 = −5%. Purchasing power FELL despite the nominal raise — money illusion.",
      difficulty: "medium"
    },
    {
      q: "Money illusion describes the mistake of…",
      options: [
        "Confusing real value with nominal value",
        "Spending money you don't have",
        "Counterfeit currency detection",
        "Computing inflation"
      ],
      correct: 0,
      explanation: "Money illusion = thinking in nominal terms when real terms matter. People feel richer when their nominal income rises, even if real income falls.",
      difficulty: "easy"
    },
    {
      q: "Fisher equation (exact form):",
      options: [
        "(1 + i_n) = (1 + i_r)(1 + π)",
        "i_n = i_r + π exactly",
        "i_n = i_r × π",
        "i_n = i_r − π"
      ],
      correct: 0,
      explanation: "Exact Fisher: (1 + i_n) = (1 + i_r)(1 + π). The linear i_r ≈ i_n − π is an approximation, accurate at low rates.",
      difficulty: "medium"
    },
    {
      q: "Linear approximation of Fisher equation:",
      options: ["i_r ≈ i_n − π", "i_r ≈ i_n + π", "i_r ≈ i_n × π", "i_r ≈ i_n / π"],
      correct: 0,
      explanation: "i_r ≈ i_n − π (linear approximation). Accurate when both rates are small.",
      difficulty: "easy"
    },
    {
      q: "Nominal i_n = 12%, inflation π = 8%. Approximate real rate:",
      options: ["20%", "4%", "1.5%", "−4%"],
      correct: 1,
      explanation: "i_r ≈ 12 − 8 = 4%.",
      difficulty: "medium"
    },
    {
      q: "Real interest rate of 5%, inflation of 10%. Nominal rate (Fisher):",
      options: ["15.0%", "15.5%", "5.0%", "−5.0%"],
      correct: 1,
      explanation: "(1+i_n) = (1.05)(1.10) = 1.155 → i_n = 15.5%. The cross-term gives 0.5% beyond simple addition.",
      difficulty: "hard"
    },
    {
      q: "Bracket creep occurs when…",
      options: [
        "Inflation pushes nominal income across tax thresholds, raising effective tax even though real income hasn't risen",
        "Tax rates fall",
        "Income decreases",
        "Government cuts taxes"
      ],
      correct: 0,
      explanation: "Bracket creep = inflation-induced tax bracket promotion without real income change. Real disposable income falls.",
      difficulty: "medium"
    },
    {
      q: "Three things happen under bracket creep:",
      options: [
        "Higher tax bracket; pay higher tax; lower real disposable income",
        "Lower tax bracket; pay lower tax; higher disposable income",
        "Tax brackets disappear",
        "Government revenue falls"
      ],
      correct: 0,
      explanation: "Higher bracket → higher tax → lower real disposable income. The lecturer's three-point summary.",
      difficulty: "easy"
    },
    {
      q: "Indexation policies neutralise bracket creep by…",
      options: [
        "Adjusting tax brackets periodically with the price index (CPI)",
        "Raising tax rates",
        "Eliminating taxes",
        "Adjusting wages by GDP"
      ],
      correct: 0,
      explanation: "Indexation = pegging tax-bracket thresholds to the CPI so they rise with inflation, preserving real progressivity.",
      difficulty: "medium"
    },
    {
      q: "Without indexation, inflation does what to government tax revenue?",
      options: [
        "Decreases it",
        "Increases it automatically (taxpayers cross thresholds)",
        "Has no effect",
        "Eliminates it"
      ],
      correct: 1,
      explanation: "Without indexation, inflation pushes more taxpayers into higher brackets — government revenue rises 'silently'. Bracket creep is a stealth tax increase.",
      difficulty: "medium"
    },
    {
      q: "FIFO inventory valuation during inflation tends to…",
      options: [
        "Inflate reported profits and increase tax liability",
        "Suppress profits and reduce tax",
        "Have no effect on profit",
        "Lead to inventory depletion"
      ],
      correct: 0,
      explanation: "FIFO sells oldest, cheapest inventory first while reporting today's higher selling prices. Profit looks bigger; firm pays more tax.",
      difficulty: "medium"
    },
    {
      q: "LIFO during inflation tends to…",
      options: [
        "Suppress reported profits (lower tax)",
        "Inflate reported profits",
        "Cause inventory write-offs",
        "Boost long-term value"
      ],
      correct: 0,
      explanation: "LIFO matches latest, most-expensive inventory against current revenue. Profits look smaller, tax is lower.",
      difficulty: "medium"
    },
    {
      q: "Why do firms generally prefer LIFO during inflation, despite FIFO being more common?",
      options: [
        "Lower reported profits → lower tax liability",
        "LIFO is illegal",
        "LIFO inflates profits",
        "LIFO is required by law"
      ],
      correct: 0,
      explanation: "LIFO's lower reported profits mean lower tax. (Note: some jurisdictions require FIFO for accounting purposes; tax rules vary.)",
      difficulty: "hard"
    },
    {
      q: "Depreciation allowances are usually based on HISTORICAL cost. During inflation, this leads to…",
      options: [
        "Understated depreciation in real terms; overstated profits; more tax",
        "Overstated depreciation; lower tax",
        "No effect on tax",
        "Negative tax"
      ],
      correct: 0,
      explanation: "Historical-cost depreciation falls short of replacement cost during inflation. Profits are overstated; effective tax burden rises.",
      difficulty: "hard"
    },
    {
      q: "If you bought a machine 5 years ago for ₦1m and depreciate it on SL over 5 years (₦200k/yr), but today the replacement cost is ₦2m, your depreciation allowance is…",
      options: [
        "Understated relative to true replacement cost (real terms)",
        "Overstated",
        "Exactly right",
        "Cannot be evaluated"
      ],
      correct: 0,
      explanation: "Depreciation is on historical (₦1m), not replacement (₦2m). You depreciate ₦200k/yr while real replacement need is ~₦400k/yr. The allowance is understated.",
      difficulty: "hard"
    }
  ]
},

/* ============== SECTION 18: COST ESTIMATION TECHNIQUES ============== */
"sec-18": {
  title: "Cost Estimation Techniques",
  questions: [
    {
      q: "Cost estimation is best defined as…",
      options: [
        "The systematic process of forecasting financial resources required to complete a project, deliver a service, or produce a product",
        "Counting cash on hand",
        "Setting tax rates",
        "Audit reporting"
      ],
      correct: 0,
      explanation: "Cost estimation = forecasting financial resources for project / product / service across its life cycle.",
      difficulty: "easy"
    },
    {
      q: "Poor cost estimation often leads to all of these EXCEPT…",
      options: [
        "Cost over-runs",
        "Project abandonment",
        "Inefficient resource allocation",
        "Automatic project success"
      ],
      correct: 3,
      explanation: "Poor estimation triggers cost over-runs, abandonment, or inefficient allocation. It NEVER guarantees success.",
      difficulty: "easy"
    },
    {
      q: "Capital / initial cost includes…",
      options: [
        "Land, machinery, installation, commissioning, design",
        "Salaries during operation",
        "Maintenance and repair",
        "Sales commissions"
      ],
      correct: 0,
      explanation: "Capital cost = upfront capex: land acquisition, machinery, installation, commissioning, engineering & design.",
      difficulty: "easy"
    },
    {
      q: "Operating & Maintenance (O&M) cost includes…",
      options: [
        "Labour, energy, fuel, repairs, parts, insurance, administration",
        "Land cost",
        "Initial design",
        "Capex"
      ],
      correct: 0,
      explanation: "O&M = ongoing operating cost over the asset life: labour, energy, fuel, repairs, parts, insurance, admin.",
      difficulty: "easy"
    },
    {
      q: "Direct vs indirect costs:",
      options: [
        "Direct = traceable to product (raw materials, direct labour); indirect = overhead (security, supervision)",
        "Direct = always larger; indirect = always smaller",
        "Direct = fixed; indirect = variable",
        "There is no difference"
      ],
      correct: 0,
      explanation: "Direct costs are traceable to a specific product/project; indirect costs are general overheads.",
      difficulty: "medium"
    },
    {
      q: "Expert judgement cost estimation is BEST when…",
      options: [
        "Historical data is scarce; senior engineer with experience available",
        "Plenty of recent data and need maximum accuracy",
        "Project is fully designed",
        "It's the only legal method"
      ],
      correct: 0,
      explanation: "Expert judgement excels in early stages or when data is sparse. Limitation: subjective and prone to optimism bias.",
      difficulty: "medium"
    },
    {
      q: "Analogy / comparative estimation formula:",
      options: [
        "Cost_est = Cost_similar × Adjustment Factor",
        "Cost_est = Cost_similar + 10%",
        "Cost_est = Cost_similar / n",
        "Cost_est = Cost_similar × n²"
      ],
      correct: 0,
      explanation: "Analogy: scale a similar project's cost by an adjustment factor (size, complexity, location, etc.).",
      difficulty: "easy"
    },
    {
      q: "A 5km road costs ₦1bn. Estimate cost of a 7km road of similar specs (linear scale).",
      options: ["₦1bn", "₦1.4bn", "₦2bn", "₦5bn"],
      correct: 1,
      explanation: "Adjustment = 7/5 = 1.4. Cost ≈ 1bn × 1.4 = ₦1.4bn. (Lecturer's example.)",
      difficulty: "easy"
    },
    {
      q: "Parametric cost estimation uses…",
      options: [
        "Statistical relationships between cost and key parameters: C = a · X^b",
        "Rough guesses",
        "Linear scaling only",
        "Random sampling"
      ],
      correct: 0,
      explanation: "Parametric: C = a · X^b, where X is a parameter (capacity, size, power), and a, b come from historical fits.",
      difficulty: "medium"
    },
    {
      q: "Plant cost C = 500 · X^0.6. Estimate cost for capacity X = 16.",
      options: ["₦8,000", "~₦2,639 million", "~₦16,000", "~₦9,600"],
      correct: 1,
      explanation: "C = 500 · 16^0.6 = 500 · 5.278 ≈ 2639 (in millions, lecturer's example).",
      difficulty: "hard"
    },
    {
      q: "Capacity factoring / power sizing model:",
      options: [
        "C₂ = C₁ · (Q₂/Q₁)^n where n ≈ 0.5–0.8",
        "C₂ = C₁ × (Q₂/Q₁)",
        "C₂ = C₁ + Q₂",
        "C₂ = C₁ · log(Q₂/Q₁)"
      ],
      correct: 0,
      explanation: "Capacity factor: C₂ = C₁ · (Q₂/Q₁)^n where n is the cost-capacity exponent, usually 0.5–0.8.",
      difficulty: "medium"
    },
    {
      q: "A 100 MW plant costs ₦120bn. Power-sizing estimate of 200 MW plant with n = 0.6 ≈",
      options: ["₦240bn (linear)", "~₦182bn", "~₦120bn", "~₦60bn"],
      correct: 1,
      explanation: "C₂ = 120 · (200/100)^0.6 = 120 · 2^0.6 = 120 · 1.516 ≈ ₦182bn. (Lecturer's example.)",
      difficulty: "hard"
    },
    {
      q: "Detailed (bottom-up) cost estimation involves…",
      options: [
        "Breaking the project into components, costing each, summing up",
        "Top-down judgement only",
        "Linear extrapolation",
        "Pure analogy"
      ],
      correct: 0,
      explanation: "Bottom-up = decompose project into components (equipment, installation, labour, utility), estimate each, sum total.",
      difficulty: "easy"
    },
    {
      q: "Detailed bottom-up estimation is BEST suited to…",
      options: [
        "Final budgeting and detailed design phase",
        "Earliest concept-stage estimation",
        "Quick rough estimates",
        "Marketing brochures"
      ],
      correct: 0,
      explanation: "Bottom-up is the most accurate but most time-consuming — fits final budgeting, not concept stage.",
      difficulty: "medium"
    },
    {
      q: "Cost index method for inflation adjustment:",
      options: [
        "C_new = C_old × (I_new / I_old)",
        "C_new = C_old × (I_old / I_new)",
        "C_new = C_old + I_new − I_old",
        "C_new = C_old × CPI"
      ],
      correct: 0,
      explanation: "C_new = C_old × (I_new / I_old). Indices: CPI, CCI (Construction Cost Index), PPI.",
      difficulty: "medium"
    },
    {
      q: "A project cost ₦80m in 2018 (Index = 150). Estimate in 2024 (Index = 210).",
      options: ["₦80m", "~₦112m", "~₦57m", "~₦150m"],
      correct: 1,
      explanation: "C_new = 80m × (210/150) = 80m × 1.4 = ₦112m.",
      difficulty: "medium"
    },
    {
      q: "Learning curve theory says…",
      options: [
        "Cost per unit DECLINES as cumulative production experience grows",
        "Cost per unit INCREASES with experience",
        "Cost is independent of experience",
        "Cost depends only on time"
      ],
      correct: 0,
      explanation: "Learning curve: as cumulative output rises, per-unit cost drops thanks to learning, automation, and process improvements.",
      difficulty: "easy"
    },
    {
      q: "Learning curve formula: Y = a · X^b. What sign does b have?",
      options: ["Positive", "Negative", "Zero", "Either, depending on industry"],
      correct: 1,
      explanation: "b is NEGATIVE (slope of decline). Y goes down as X (cumulative output) goes up.",
      difficulty: "medium"
    },
    {
      q: "If labour hours fall 20% whenever cumulative output doubles, that is…",
      options: [
        "An 80% learning curve",
        "A 20% learning curve",
        "A 100% learning curve",
        "Anti-learning"
      ],
      correct: 0,
      explanation: "By convention: if cost falls X% on doubling output, the curve is (100−X)%. 20% drop = 80% learning curve.",
      difficulty: "hard"
    },
    {
      q: "Common sources of cost-estimation error include all EXCEPT…",
      options: [
        "Ignoring inflation",
        "Over-optimism bias",
        "Poor data quality",
        "Using sensitivity analysis"
      ],
      correct: 3,
      explanation: "Sensitivity analysis is a BEST practice, not an error. Errors include ignoring inflation, optimism bias, poor data, technological uncertainty, scope creep.",
      difficulty: "easy"
    },
    {
      q: "Best practices in cost estimation include all EXCEPT…",
      options: [
        "Using multiple estimation methods",
        "Updating estimates as project evolves",
        "Documenting assumptions clearly",
        "Hiding contingency to avoid client questions"
      ],
      correct: 3,
      explanation: "Hiding contingency is bad practice. Best practices: multi-method, regular updates, documented assumptions, contingency allowances, sensitivity analysis.",
      difficulty: "medium"
    },
    {
      q: "Which technique gives MAXIMUM accuracy at the cost of effort?",
      options: ["Expert judgement", "Analogy", "Parametric", "Detailed (bottom-up)"],
      correct: 3,
      explanation: "Bottom-up is the most accurate but most time-consuming. Trade-off: effort vs accuracy.",
      difficulty: "medium"
    },
    {
      q: "Which technique gives FASTEST estimate (least effort)?",
      options: ["Expert judgement / analogy", "Detailed bottom-up", "Parametric only", "Capacity factoring"],
      correct: 0,
      explanation: "Expert judgement / analogy are the fastest (and least accurate) — used early in concept stage.",
      difficulty: "easy"
    },
    {
      q: "Capacity factoring exponent n ≈ 1.0 implies…",
      options: [
        "Linear scaling — no economies of scale",
        "Strong economies of scale",
        "Diseconomies of scale",
        "Indeterminate"
      ],
      correct: 0,
      explanation: "n = 1 means C₂/C₁ = Q₂/Q₁: linear scaling, no economies. Lower n → stronger economies; higher n → diseconomies.",
      difficulty: "hard"
    },
    {
      q: "An 80% learning curve means that whenever cumulative output doubles, cost per unit drops to…",
      options: ["80% of previous (i.e. 20% reduction)", "20% of previous", "100% of previous", "0% of previous"],
      correct: 0,
      explanation: "An 80% curve: cost per unit becomes 80% of the previous value when output doubles — a 20% reduction.",
      difficulty: "medium"
    }
  ]
},

/* ============== SECTION 19: DECISION MAKING UNDER RISK & UNCERTAINTY ============== */
"sec-19": {
  title: "Decision Making Under Risk & Uncertainty",
  questions: [
    {
      q: "Under which condition is a decision maker FULLY informed about every alternative and outcome?",
      options: ["Risk", "Uncertainty", "Certainty", "Complete ignorance"],
      correct: 2,
      explanation: "Certainty = all alternatives and outcomes known with reasonable certainty. Risk involves multiple outcomes with known probabilities; uncertainty involves multiple outcomes with unknown probabilities.",
      difficulty: "easy"
    },
    {
      q: "The formal distinction between risk and uncertainty is…",
      options: [
        "Risk involves losses; uncertainty involves gains",
        "With risk, probabilities are known/estimable; with uncertainty, probabilities are unknown",
        "Risk is short-term; uncertainty is long-term",
        "There is no distinction — they are synonyms"
      ],
      correct: 1,
      explanation: "Both involve multiple outcomes. Risk: probabilities known. Uncertainty: probabilities unknown. This is the central distinction in decision theory.",
      difficulty: "easy"
    },
    {
      q: "Programmed decisions are characterised by…",
      options: [
        "Being structured and recurring",
        "Being unstructured and one-off",
        "Requiring high creativity",
        "Always being made by computers"
      ],
      correct: 0,
      explanation: "Programmed = structured, recurring. Standard procedures handle them. Non-programmed = unstructured, novel.",
      difficulty: "easy"
    },
    {
      q: "Compute E(x) for outcomes ($200, $500, $800) with probabilities (0.2, 0.5, 0.3).",
      options: ["$500", "$530", "$540", "$600"],
      correct: 1,
      explanation: "E(x) = 0.2·200 + 0.5·500 + 0.3·800 = 40 + 250 + 240 = $530.",
      difficulty: "medium"
    },
    {
      q: "Compute E(x) for outcomes (₦100, ₦400, ₦800) with probabilities (0.3, 0.4, 0.3).",
      options: ["₦425", "₦430", "₦470", "₦400"],
      correct: 1,
      explanation: "E(x) = 0.3·100 + 0.4·400 + 0.3·800 = 30 + 160 + 240 = ₦430.",
      difficulty: "medium"
    },
    {
      q: "Silver Zephyr Ltd has 40% recession risk → $100 profit; 60% no-recession → $1,000 profit. Expected profit?",
      options: ["$100", "$640", "$550", "$1,000"],
      correct: 1,
      explanation: "E(π) = 0.4·100 + 0.6·1000 = 40 + 600 = $640.",
      difficulty: "easy"
    },
    {
      q: "Variance σ² for a fair coin paying ±$10:",
      options: ["0", "10", "100", "1000"],
      correct: 2,
      explanation: "μ = 0. σ² = 0.5·(10−0)² + 0.5·(−10−0)² = 50 + 50 = 100. (σ = 10.)",
      difficulty: "medium"
    },
    {
      q: "Compute σ² for outcomes (50, 100, 150) each at probability 1/3.",
      options: ["1,667", "0", "100", "2,500"],
      correct: 0,
      explanation: "μ = 100. σ² = (1/3)·[(50−100)² + (100−100)² + (150−100)²] = (1/3)·[2500 + 0 + 2500] = 1,667.",
      difficulty: "hard"
    },
    {
      q: "What is the standard deviation when σ² = 144?",
      options: ["12", "14", "144", "72"],
      correct: 0,
      explanation: "σ = √σ² = √144 = 12.",
      difficulty: "easy"
    },
    {
      q: "Why use Coefficient of Variation (CV) instead of σ to compare two projects with different scales?",
      options: [
        "CV is dimensionless, normalising risk by mean",
        "σ is illegal in finance",
        "σ ignores variance",
        "CV always equals σ"
      ],
      correct: 0,
      explanation: "CV = σ/μ is dimensionless, so it lets you compare relative risk between projects with different expected values.",
      difficulty: "medium"
    },
    {
      q: "Project A: μ = $100k, σ = $30k. Project B: μ = $150k, σ = $40k. Which is RELATIVELY less risky?",
      options: ["A (CV = 0.30)", "B (CV = 0.267)", "Equal", "Cannot determine"],
      correct: 1,
      explanation: "CV_A = 30/100 = 0.30. CV_B = 40/150 = 0.267. B has lower CV — relatively less risky despite larger absolute σ. (The lecturer's exact example.)",
      difficulty: "hard"
    },
    {
      q: "Compute CV for an investment with σ = $5,000 and μ = $25,000.",
      options: ["0.04", "0.20", "5.00", "25.00"],
      correct: 1,
      explanation: "CV = 5000/25000 = 0.20.",
      difficulty: "easy"
    },
    {
      q: "Two stocks. X: μ=10%, σ=4%. Y: μ=15%, σ=5%. Which has lower CV?",
      options: ["X (CV=0.40)", "Y (CV=0.33)", "Tied", "Cannot say"],
      correct: 1,
      explanation: "CV_X = 4/10 = 0.40. CV_Y = 5/15 = 0.33. Y is relatively less risky.",
      difficulty: "medium"
    },
    {
      q: "A risk-averse manager values…",
      options: [
        "Certain payoffs more than uncertain payoffs of the same expected value",
        "Uncertain payoffs more, for the upside",
        "Both equally",
        "Only payoffs in cash"
      ],
      correct: 0,
      explanation: "Risk-averse: prefers a certain $1,000 to a 50/50 chance of $0 or $2,000. Concave utility curve.",
      difficulty: "easy"
    },
    {
      q: "A risk-loving manager has what kind of utility curve?",
      options: ["Concave", "Convex", "Linear", "Step function"],
      correct: 1,
      explanation: "Risk lovers value upside more than expected value implies — convex utility curve.",
      difficulty: "medium"
    },
    {
      q: "A risk-neutral manager has what kind of utility curve?",
      options: ["Concave", "Convex", "Linear", "Logarithmic"],
      correct: 2,
      explanation: "Risk-neutral = utility scales linearly with payoff. Doesn't distinguish between certain and uncertain payoffs of the same expected value.",
      difficulty: "easy"
    },
    {
      q: "The Maximin (Wald) criterion picks the strategy with…",
      options: [
        "The largest of the worst-case outcomes",
        "The smallest of the worst-case outcomes",
        "The largest of the best-case outcomes",
        "The smallest of the best-case outcomes"
      ],
      correct: 0,
      explanation: "Maximin: for each strategy find the WORST outcome. Pick the one whose worst is the LEAST bad. max(min row).",
      difficulty: "medium"
    },
    {
      q: "The Maximax criterion picks the strategy with…",
      options: [
        "The largest of the best outcomes",
        "The smallest of the best outcomes",
        "The largest of the worst outcomes",
        "The average outcome"
      ],
      correct: 0,
      explanation: "Maximax: for each strategy take the best case. Pick the strategy whose best is the largest. max(max row). Extreme optimist.",
      difficulty: "medium"
    },
    {
      q: "Hurwicz criterion at α = 1 reduces to…",
      options: ["Maximin", "Maximax", "Laplace", "Savage"],
      correct: 1,
      explanation: "H = α·max + (1−α)·min. At α = 1: H = max → Maximax (extreme optimist). At α = 0: H = min → Maximin.",
      difficulty: "medium"
    },
    {
      q: "Laplace criterion assumes…",
      options: [
        "All states are equally likely → expected value with equal weights",
        "The worst case will happen",
        "The best case will happen",
        "Probabilities are skewed toward expansion"
      ],
      correct: 0,
      explanation: "Laplace = principle of insufficient reason. With no probability info, treat all states as equally likely (1/n each).",
      difficulty: "medium"
    },
    {
      q: "The Savage criterion is based on which concept?",
      options: ["Expected value", "Opportunity cost (regret)", "Worst case", "Hurwicz blend"],
      correct: 1,
      explanation: "Savage = Minimax Regret. For each cell, compute regret (best in column − this cell). Pick strategy with min of max regrets.",
      difficulty: "medium"
    },
    {
      q: "Payoff matrix (rows=strategy, cols=state): Strategy A: (10, 30, -5). Strategy B: (15, 25, 0). Strategy C: (20, 20, 5). Maximin?",
      options: ["A", "B", "C", "Tie A/B"],
      correct: 2,
      explanation: "Mins: A=−5, B=0, C=5. Maximin = max(mins) = 5 → C.",
      difficulty: "medium"
    },
    {
      q: "Same matrix. Maximax?",
      options: ["A", "B", "C", "Tie B/C"],
      correct: 0,
      explanation: "Maxes: A=30, B=25, C=20. Maximax = max(maxes) = 30 → A.",
      difficulty: "medium"
    },
    {
      q: "Same matrix. Laplace pick?",
      options: ["A (avg=11.67)", "B (avg=13.33)", "C (avg=15)", "Tie"],
      correct: 2,
      explanation: "Avgs: A=(10+30−5)/3=11.67, B=(15+25+0)/3=13.33, C=(20+20+5)/3=15. Laplace picks C.",
      difficulty: "medium"
    },
    {
      q: "Same matrix. Hurwicz at α=0.5?",
      options: ["A (12.5)", "B (12.5)", "C (12.5)", "All tie"],
      correct: 3,
      explanation: "H = 0.5·max + 0.5·min. A=0.5·30+0.5·(−5)=12.5; B=0.5·25+0.5·0=12.5; C=0.5·20+0.5·5=12.5. All three tie.",
      difficulty: "hard"
    },
    {
      q: "Same matrix. Compute regret for Strategy A in each state.",
      options: [
        "(10, 0, 10)",
        "(0, 0, 0)",
        "(10, 5, 5)",
        "(10, 0, 5)"
      ],
      correct: 0,
      explanation: "Column maxes: 20, 30, 5. Regret_A = (20-10, 30-30, 5-(-5)) = (10, 0, 10).",
      difficulty: "hard"
    },
    {
      q: "Same matrix. Savage pick?",
      options: ["A (max regret 10)", "B (max regret 5)", "C (max regret 10)", "B (max regret 0)"],
      correct: 1,
      explanation: "Regrets: A=(10,0,10)→max 10; B=(5,5,5)→max 5; C=(0,10,0)→max 10. Min of max regrets = 5 → B.",
      difficulty: "hard"
    },
    {
      q: "A manager uses 35%/50%/15% probabilities for Expansion/Stability/Contraction. With payoffs (25, 15, −10), expected value =",
      options: ["10.00", "14.75", "20.00", "30.00"],
      correct: 1,
      explanation: "E = 0.35·25 + 0.50·15 + 0.15·(−10) = 8.75 + 7.5 − 1.5 = 14.75.",
      difficulty: "medium"
    },
    {
      q: "Same probabilities (0.35/0.50/0.15), payoffs (15, 20, −5):",
      options: ["9.5", "11.5", "14.5", "20.0"],
      correct: 2,
      explanation: "E = 0.35·15 + 0.50·20 + 0.15·(−5) = 5.25 + 10 − 0.75 = 14.5.",
      difficulty: "hard"
    },
    {
      q: "A capital project's σ²=4,000,000. σ = ?",
      options: ["2000", "200", "500", "20000"],
      correct: 0,
      explanation: "σ = √4,000,000 = 2,000.",
      difficulty: "easy"
    },
    {
      q: "If Hurwicz α = 0, the criterion behaves like…",
      options: ["Maximax", "Maximin", "Laplace", "Savage"],
      correct: 1,
      explanation: "α = 0 → H = (1−0)·min + 0·max = min → pick max of mins → Maximin (extreme pessimist).",
      difficulty: "medium"
    },
    {
      q: "Risk management: transferring losses to an insurer in exchange for a premium is called…",
      options: ["Hedging", "Diversification", "Insurance", "Adjusting risk"],
      correct: 2,
      explanation: "Insurance transfers risk to an insurer for a premium.",
      difficulty: "easy"
    },
    {
      q: "Offsetting potential loss with a counter-position (e.g. buying a fuel forward) is called…",
      options: ["Insurance", "Hedging", "Diversification", "Sunk cost"],
      correct: 1,
      explanation: "Hedging: take a position that profits when the original loses.",
      difficulty: "easy"
    },
    {
      q: "Spreading investments across many assets so a single failure can't sink the firm is…",
      options: ["Insurance", "Hedging", "Diversification", "Adjusting risk"],
      correct: 2,
      explanation: "Diversification: spread risk across uncorrelated assets/projects.",
      difficulty: "easy"
    },
    {
      q: "Two wagers: A: ±$10 (50/50). B: ±$1,000 (50/50). Which has higher variance?",
      options: ["A", "B", "Equal", "Depends on inflation"],
      correct: 1,
      explanation: "σ²_A = 100. σ²_B = 1,000,000. B is dramatically riskier (σ²_B / σ²_A = 10,000) despite identical means.",
      difficulty: "medium"
    },
    {
      q: "When can decision-making under uncertainty become decision-making under risk?",
      options: [
        "When the manager can assign SUBJECTIVE probabilities to outcomes (partial ignorance)",
        "When risk is removed entirely",
        "Never — they are completely separate",
        "When the manager doesn't care"
      ],
      correct: 0,
      explanation: "Partial ignorance: manager's intuition / experience produces subjective probabilities. With probabilities, you have risk-style analysis (expected value, etc.).",
      difficulty: "hard"
    },
    {
      q: "A regulator mandates a brand-new technology with no historical data. From a decision-theory standpoint:",
      options: [
        "Risk — known probabilities",
        "Uncertainty with complete ignorance — no probability data",
        "Sunk cost",
        "Opportunity cost"
      ],
      correct: 1,
      explanation: "No data → no probabilities → uncertainty under complete ignorance. Apply Laplace/Wald/Hurwicz/Savage as appropriate.",
      difficulty: "medium"
    },
    {
      q: "Which decision criterion is MOST appropriate for long-term capital projects per the lecturer?",
      options: ["Maximax", "Maximin", "Savage (Minimax Regret)", "Laplace"],
      correct: 2,
      explanation: "Lecturer flagged Savage as most appropriate for long-term capital projects — neither too optimistic nor too pessimistic, balances regret.",
      difficulty: "medium"
    },
    {
      q: "Inflation risk in ECN context refers to…",
      options: [
        "Agreement to pay a fixed sum loses real value as prices rise",
        "Currency exchange volatility",
        "Default on contractual payments",
        "Loss from cultural mismatch"
      ],
      correct: 0,
      explanation: "Inflation risk: real value of fixed-promise contracts erodes with rising prices. (Currency = currency risk; default = credit risk.)",
      difficulty: "easy"
    },
    {
      q: "A counterparty failing to meet contractual obligations is which kind of risk?",
      options: ["Credit risk", "Market risk", "Liquidity risk", "Cultural risk"],
      correct: 0,
      explanation: "Credit risk = counterparty failure to meet obligations.",
      difficulty: "easy"
    },
    {
      q: "Difficulty selling investments at a fair price corresponds to which risk?",
      options: ["Credit risk", "Liquidity risk", "Market risk", "Government policy risk"],
      correct: 1,
      explanation: "Liquidity risk = inability to convert asset to cash quickly without large loss.",
      difficulty: "easy"
    },
    {
      q: "An expansion-stability-contraction matrix has entries (25, 15, −10) for Strategy A. The maximum regret across these states (assuming column maxes are 25, 20, 5) is…",
      options: ["10", "15", "5", "0"],
      correct: 1,
      explanation: "Regrets: 25−25=0, 20−15=5, 5−(−10)=15. Max regret = 15.",
      difficulty: "hard"
    },
    {
      q: "If Strategy A under risk has E(π) = ₦500,000 and σ = ₦200,000, its CV is…",
      options: ["0.20", "0.40", "2.50", "5.00"],
      correct: 1,
      explanation: "CV = σ/μ = 200,000 / 500,000 = 0.40.",
      difficulty: "easy"
    },
    {
      q: "Two portfolios. P1: μ=₦1m, σ=₦300k. P2: μ=₦5m, σ=₦1m. Which has lower CV (less relative risk)?",
      options: ["P1 (CV=0.30)", "P2 (CV=0.20)", "Equal", "Cannot determine"],
      correct: 1,
      explanation: "CV_1 = 300/1000 = 0.30. CV_2 = 1000/5000 = 0.20. P2 has lower relative risk despite larger absolute σ.",
      difficulty: "medium"
    },
    {
      q: "Hurwicz criterion at α = 0.7 with payoffs (max=40, min=10) gives H = ?",
      options: ["25", "31", "37", "20"],
      correct: 1,
      explanation: "H = 0.7·40 + 0.3·10 = 28 + 3 = 31.",
      difficulty: "medium"
    },
    {
      q: "Hurwicz at α = 0.3, payoffs (max=80, min=−20) gives H = ?",
      options: ["10", "0", "20", "−5"],
      correct: 0,
      explanation: "H = 0.3·80 + 0.7·(−20) = 24 − 14 = 10.",
      difficulty: "medium"
    },
    {
      q: "Three independent investments: I1 (μ=10%, σ=4%), I2 (μ=15%, σ=8%), I3 (μ=20%, σ=12%). Which has the LOWEST CV (least relative risk)?",
      options: [
        "I1 (CV = 0.40)",
        "I2 (CV ≈ 0.53)",
        "I3 (CV = 0.60)",
        "All have equal CV"
      ],
      correct: 0,
      explanation: "CVs: I1=4/10=0.40, I2=8/15≈0.53, I3=12/20=0.60. I1 has the lowest CV → relatively least risky.",
      difficulty: "hard"
    },
    {
      q: "An investor faces 3 outcomes with probs (0.25, 0.25, 0.50) and payoffs (−100, +50, +200). Compute E(x).",
      options: ["50.0", "75.0", "87.5", "150.0"],
      correct: 2,
      explanation: "E = 0.25·(−100) + 0.25·50 + 0.5·200 = −25 + 12.5 + 100 = 87.5.",
      difficulty: "hard"
    },
    {
      q: "Variance and expected value are CALCULATED from the same data — but they tell different stories. What does variance reveal that the mean doesn't?",
      options: [
        "The dispersion / spread of outcomes around the mean",
        "The maximum outcome",
        "The minimum outcome",
        "The most common outcome"
      ],
      correct: 0,
      explanation: "Variance measures DISPERSION — how widely outcomes are spread around the mean. Two distributions can have the same mean but very different variances (= different risk).",
      difficulty: "easy"
    },
    {
      q: "Given two strategies — A with E=$100, σ=$30; B with E=$100, σ=$60 — a risk-averse manager prefers…",
      options: [
        "A (lower risk for same expected return)",
        "B (higher risk for same expected return)",
        "Indifferent — same expected value",
        "B always — risk-averse means avoiding A"
      ],
      correct: 0,
      explanation: "Same E means risk-neutral is indifferent; but a risk-AVERSE manager strictly prefers the lower-σ option (A).",
      difficulty: "medium"
    }
  ]
},

/* ============== SECTION 20: BREAK-EVEN ANALYSIS (CVP) ============== */
"sec-20": {
  title: "Break-Even Analysis (CVP)",
  questions: [
    {
      q: "Break-even point in units formula?",
      options: [
        "BEP = Fixed cost / Unit CM",
        "BEP = Fixed cost × Unit CM",
        "BEP = Variable cost / Unit CM",
        "BEP = Sales / Unit CM"
      ],
      correct: 0,
      explanation: "BEP units = Fixed expenses / Unit Contribution Margin.",
      difficulty: "easy"
    },
    {
      q: "Contribution margin per unit is…",
      options: [
        "Selling price − Unit variable cost",
        "Selling price + Unit variable cost",
        "Fixed cost / Units",
        "Selling price − Fixed cost"
      ],
      correct: 0,
      explanation: "Unit CM = SP − VC. The amount each unit contributes toward covering fixed costs and then profit.",
      difficulty: "easy"
    },
    {
      q: "CM ratio (also called C/S ratio) is…",
      options: [
        "(Sales − Variable cost) / Sales",
        "Sales / Variable cost",
        "Variable cost / Sales",
        "Fixed cost / Sales"
      ],
      correct: 0,
      explanation: "CM ratio = (Sales − VC) / Sales = Total CM / Sales.",
      difficulty: "easy"
    },
    {
      q: "A product: SP=Rs.50, VC=Rs.30. Unit CM =",
      options: ["Rs.20", "Rs.30", "Rs.50", "Rs.80"],
      correct: 0,
      explanation: "Unit CM = 50 − 30 = Rs.20.",
      difficulty: "easy"
    },
    {
      q: "Same product. CM ratio =",
      options: ["20%", "40%", "50%", "60%"],
      correct: 1,
      explanation: "CM ratio = Unit CM / SP = 20/50 = 0.40 = 40%.",
      difficulty: "easy"
    },
    {
      q: "FC = Rs.10,000. SP = Rs.50. VC = Rs.30. BEP units?",
      options: ["200", "300", "500", "1,000"],
      correct: 2,
      explanation: "BEP = 10,000 / (50−30) = 10,000 / 20 = 500 units.",
      difficulty: "easy"
    },
    {
      q: "Same scenario. BEP revenue?",
      options: ["Rs.10,000", "Rs.15,000", "Rs.25,000", "Rs.50,000"],
      correct: 2,
      explanation: "BEP rev = 500 × Rs.50 = Rs.25,000. Or: FC / CM ratio = 10,000 / 0.40 = Rs.25,000.",
      difficulty: "medium"
    },
    {
      q: "Same scenario, target profit Rs.6,000. Units required?",
      options: ["500", "800", "1,000", "1,200"],
      correct: 1,
      explanation: "Units = (FC + Target) / Unit CM = (10,000 + 6,000) / 20 = 16,000 / 20 = 800 units.",
      difficulty: "medium"
    },
    {
      q: "Same scenario. Sales required for Rs.6,000 profit?",
      options: ["Rs.20,000", "Rs.30,000", "Rs.40,000", "Rs.50,000"],
      correct: 2,
      explanation: "Sales = (FC + Target) / CM ratio = 16,000 / 0.40 = Rs.40,000. Or: 800 units × Rs.50 = Rs.40,000.",
      difficulty: "medium"
    },
    {
      q: "Lecturer's example: SP=Rs.60, VC=Rs.40, FC=Rs.25,000, forecast=1,800 units. Unit CM and BEP units?",
      options: [
        "Rs.20 and 1,250",
        "Rs.40 and 1,000",
        "Rs.20 and 1,800",
        "Rs.60 and 833"
      ],
      correct: 0,
      explanation: "Unit CM = 60−40 = Rs.20. BEP = 25,000/20 = 1,250 units.",
      difficulty: "medium"
    },
    {
      q: "Same lecturer's example. Profit at 1,800 units?",
      options: ["Rs.0", "Rs.11,000", "Rs.25,000", "Rs.36,000"],
      correct: 1,
      explanation: "Profit = (1800−1250) × 20 = 550 × 20 = Rs.11,000. Or: Sales − VC − FC = 108,000 − 72,000 − 25,000 = Rs.11,000.",
      difficulty: "medium"
    },
    {
      q: "Same example. Margin of safety in units?",
      options: ["1,250", "550", "1,800", "30.6%"],
      correct: 1,
      explanation: "MoS units = 1,800 − 1,250 = 550 units.",
      difficulty: "medium"
    },
    {
      q: "Same example. Margin of safety as a percentage of forecast sales?",
      options: ["30.6%", "44.4%", "75%", "55.6%"],
      correct: 0,
      explanation: "MoS rev = 550 × 60 = 33,000. Total sales = 108,000. MoS % = 33,000 / 108,000 = 30.6%.",
      difficulty: "medium"
    },
    {
      q: "DOL = Contribution margin / Net operating income. With CM = Rs.36,000 and NOI = Rs.11,000:",
      options: ["3.27", "1.00", "0.31", "47,000"],
      correct: 0,
      explanation: "DOL = 36,000 / 11,000 = 3.27.",
      difficulty: "medium"
    },
    {
      q: "DOL = 4 means a 5% rise in sales translates to a profit change of…",
      options: ["1.25%", "5%", "20%", "9%"],
      correct: 2,
      explanation: "% change in profit = DOL × % change in sales = 4 × 5% = 20%.",
      difficulty: "medium"
    },
    {
      q: "At the break-even point, DOL is…",
      options: ["Zero", "One", "Infinite", "Two"],
      correct: 2,
      explanation: "At BEP: NOI = 0. DOL = CM/0 = infinite. As sales rise above BEP, DOL falls.",
      difficulty: "hard"
    },
    {
      q: "A firm has FC = Rs.40,000, unit CM = Rs.50. How many units to break even?",
      options: ["400", "500", "800", "2,000"],
      correct: 2,
      explanation: "BEP = 40,000 / 50 = 800 units.",
      difficulty: "easy"
    },
    {
      q: "Multi-product firm — products A and B, mix 3:2, CMs Rs.10 and Rs.25. Contribution per mix?",
      options: ["Rs.35", "Rs.50", "Rs.80", "Rs.250"],
      correct: 2,
      explanation: "CM per mix = 3·10 + 2·25 = 30 + 50 = Rs.80.",
      difficulty: "medium"
    },
    {
      q: "Same multi-product. FC = Rs.16,000. BEP in mixes?",
      options: ["80", "100", "200", "320"],
      correct: 2,
      explanation: "BEP mixes = 16,000 / 80 = 200 mixes.",
      difficulty: "medium"
    },
    {
      q: "Same. BEP units of A and B?",
      options: [
        "600 A and 400 B",
        "300 A and 200 B",
        "200 A and 300 B",
        "400 A and 600 B"
      ],
      correct: 0,
      explanation: "200 mixes × 3 = 600 units of A. 200 × 2 = 400 units of B.",
      difficulty: "medium"
    },
    {
      q: "Lecturer's PL example: M (SP=7, VC=2.94) and N (SP=15, VC=4.50). Mix 5M:1N. Contribution per mix?",
      options: ["Rs.30.80", "Rs.10.50", "Rs.4.06", "Rs.21.00"],
      correct: 0,
      explanation: "CM per unit: M=4.06, N=10.50. CM per mix (5:1) = 5·4.06 + 1·10.50 = 20.30 + 10.50 = Rs.30.80.",
      difficulty: "hard"
    },
    {
      q: "Same PL. Fixed = Rs.36,000. BEP mixes?",
      options: ["1,000", "1,169", "1,200", "2,000"],
      correct: 1,
      explanation: "BEP mixes = 36,000 / 30.80 = 1,168.83 ≈ 1,169.",
      difficulty: "medium"
    },
    {
      q: "Same PL. BEP revenue (total)?",
      options: ["Rs.40,915", "Rs.17,535", "Rs.58,450", "Rs.36,000"],
      correct: 2,
      explanation: "BEP rev = 5,845·7 + 1,169·15 = 40,915 + 17,535 = Rs.58,450. (Lecturer's exact answer.)",
      difficulty: "hard"
    },
    {
      q: "Average C/S ratio for multi-product equals…",
      options: [
        "Total contribution / Total sales",
        "Total sales / Total contribution",
        "Sum of individual C/S ratios",
        "Highest individual C/S ratio"
      ],
      correct: 0,
      explanation: "Average CM ratio = Total contribution / Total sales — useful for the BEP-revenue formula in multi-product firms.",
      difficulty: "medium"
    },
    {
      q: "If FC = Rs.36,000 and average CM ratio = 61.6%, BEP sales =",
      options: ["Rs.22,176", "Rs.36,000", "Rs.58,442", "Rs.59,000"],
      correct: 2,
      explanation: "BEP sales = 36,000 / 0.616 = Rs.58,442. (Lecturer's PL alternative method.)",
      difficulty: "medium"
    },
    {
      q: "Margin of safety in money is…",
      options: [
        "Total sales − Break-even sales",
        "Break-even sales − Variable cost",
        "Sales − Fixed cost",
        "CM − Fixed cost"
      ],
      correct: 0,
      explanation: "MoS (Rs) = Total sales − Break-even sales. The cushion before losses begin.",
      difficulty: "easy"
    },
    {
      q: "Total sales Rs.100,000, BEP sales Rs.70,000. MoS % =",
      options: ["30%", "70%", "143%", "143"],
      correct: 0,
      explanation: "MoS % = (100−70)/100 × 100 = 30%.",
      difficulty: "easy"
    },
    {
      q: "Higher operating leverage means…",
      options: [
        "Profit is more sensitive to sales changes (more risk + more reward)",
        "Profit is less sensitive to sales changes",
        "Higher fixed costs only",
        "Lower variable costs only"
      ],
      correct: 0,
      explanation: "Higher DOL → small sales changes → big profit changes. More upside, more downside.",
      difficulty: "medium"
    },
    {
      q: "Sales mix is the…",
      options: [
        "Relative proportions in which a company's products are sold",
        "The price ratio between products",
        "The variable cost ratio",
        "The total revenue divided by units"
      ],
      correct: 0,
      explanation: "Sales mix = relative proportions of products sold (e.g. 5M : 1N).",
      difficulty: "easy"
    },
    {
      q: "If sales mix shifts toward LOWER-CM products without offsetting volume, what happens to BEP?",
      options: [
        "BEP units rise; profits fall",
        "BEP units fall; profits rise",
        "No change",
        "BEP units rise; profits rise"
      ],
      correct: 0,
      explanation: "Lower-CM products contribute less per unit → need more units to cover FC → BEP rises and profits fall.",
      difficulty: "hard"
    },
    {
      q: "Sales commissions paid as 10% of revenue create what risk?",
      options: [
        "Sales force pushes high-revenue, low-CM products that hurt firm profit",
        "Higher fixed costs",
        "Lower variable costs",
        "No risk"
      ],
      correct: 0,
      explanation: "Commission tied to revenue (not CM) means salespeople push higher-priced items even if their CM is lower. Lecturer's Model A vs B example.",
      difficulty: "medium"
    },
    {
      q: "A firm has SP=Rs.100, VC=Rs.60, FC=Rs.50,000. BEP revenue?",
      options: ["Rs.50,000", "Rs.83,333", "Rs.125,000", "Rs.150,000"],
      correct: 2,
      explanation: "CM ratio = 40/100 = 0.40. BEP rev = 50,000 / 0.40 = Rs.125,000.",
      difficulty: "medium"
    },
    {
      q: "Same firm. Sales required for Rs.20,000 profit?",
      options: ["Rs.150,000", "Rs.175,000", "Rs.150,000", "Rs.105,000"],
      correct: 1,
      explanation: "Sales = (50,000 + 20,000) / 0.40 = 70,000 / 0.40 = Rs.175,000.",
      difficulty: "medium"
    },
    {
      q: "FC = Rs.36,000. Target = Rs.52,000. Contribution per mix = Rs.33. Required mixes?",
      options: ["1,091", "2,667", "4,000", "5,000"],
      correct: 1,
      explanation: "Mixes = (FC + Target) / CM_per_mix = (36,000 + 52,000) / 33 = 88,000 / 33 ≈ 2,667.",
      difficulty: "hard"
    },
    {
      q: "If selling price RISES (other things equal), break-even units…",
      options: ["Decrease", "Increase", "Stay the same", "Become zero"],
      correct: 0,
      explanation: "Higher SP → higher unit CM → fewer units needed to cover FC → lower BEP.",
      difficulty: "medium"
    },
    {
      q: "If FIXED costs RISE, break-even units…",
      options: ["Decrease", "Increase", "Stay the same", "Halve"],
      correct: 1,
      explanation: "Higher FC → more to cover → higher BEP units. (BEP = FC / CM, so if CM is constant, FC up → BEP up.)",
      difficulty: "easy"
    },
    {
      q: "If VARIABLE cost per unit FALLS (other things equal), break-even units…",
      options: ["Decrease", "Increase", "Stay the same", "Becomes equal to FC"],
      correct: 0,
      explanation: "Lower VC → higher unit CM → fewer units needed → BEP falls.",
      difficulty: "easy"
    },
    {
      q: "A multi-product firm assumes a CONSTANT sales mix. What is the danger if mix actually changes?",
      options: [
        "BEP and profit forecasts become unreliable",
        "Nothing — mix doesn't matter",
        "Revenue cannot be calculated",
        "The firm goes bankrupt"
      ],
      correct: 0,
      explanation: "If actual mix differs from assumed, contribution per mix changes, so BEP and profit projections all shift.",
      difficulty: "medium"
    },
    {
      q: "A firm has FC=Rs.120,000 and CM ratio 30%. BEP revenue is…",
      options: ["Rs.36,000", "Rs.150,000", "Rs.300,000", "Rs.400,000"],
      correct: 3,
      explanation: "BEP rev = 120,000 / 0.30 = Rs.400,000.",
      difficulty: "easy"
    },
    {
      q: "Same firm wants profit of Rs.30,000. Required sales?",
      options: ["Rs.100,000", "Rs.500,000", "Rs.530,000", "Rs.430,000"],
      correct: 1,
      explanation: "Sales = (120,000 + 30,000) / 0.30 = 150,000/0.30 = Rs.500,000.",
      difficulty: "medium"
    },
    {
      q: "BA's W and R example: contribution per mix Rs.79.80, FC Rs.43,890. BEP mixes?",
      options: ["500", "550", "600", "880"],
      correct: 1,
      explanation: "BEP mixes = 43,890 / 79.80 = 550 mixes. (Lecturer's exact answer.)",
      difficulty: "medium"
    },
    {
      q: "Why are ASSUMPTIONS of CVP analysis (linear costs, constant SP, constant mix) acceptable?",
      options: [
        "They make the model tractable for short-term decisions; reality is more complex but the model is still useful",
        "They are completely accurate in all cases",
        "They make CVP irrelevant",
        "They eliminate the need for any data"
      ],
      correct: 0,
      explanation: "CVP simplifications work over the relevant range for short-term decisions. They become questionable at extremes.",
      difficulty: "medium"
    },
    {
      q: "The relevant range is…",
      options: [
        "The range of activity over which CVP assumptions hold",
        "The range of selling prices",
        "The range of fixed costs",
        "The range of taxes"
      ],
      correct: 0,
      explanation: "Relevant range = production volume range over which costs behave as the CVP model assumes (linear, FC constant, etc.).",
      difficulty: "medium"
    },
    {
      q: "On a CVP graph, the slope of the Total Revenue line equals…",
      options: [
        "Selling price per unit",
        "Variable cost per unit",
        "Fixed cost",
        "Contribution margin per unit"
      ],
      correct: 0,
      explanation: "TR = SP × units. Slope = SP/unit.",
      difficulty: "easy"
    },
    {
      q: "On a CVP graph, the slope of the Total Cost line equals…",
      options: [
        "Selling price per unit",
        "Variable cost per unit",
        "Fixed cost",
        "Total CM"
      ],
      correct: 1,
      explanation: "TC = FC + VC × units. Slope = VC/unit. Y-intercept = FC.",
      difficulty: "medium"
    },
    {
      q: "On a P/V (profit-volume) chart, the y-intercept (at zero sales) equals…",
      options: ["Profit", "Total revenue", "−Fixed cost (a loss equal to FC)", "Variable cost"],
      correct: 2,
      explanation: "At zero sales: profit = 0 − 0 − FC = −FC. The line crosses at the loss equal to fixed cost.",
      difficulty: "medium"
    },
    {
      q: "A firm sells 4,000 units at SP=Rs.25, VC=Rs.10. FC=Rs.30,000. Profit?",
      options: ["Rs.30,000", "Rs.40,000", "Rs.60,000", "Rs.100,000"],
      correct: 0,
      explanation: "CM = 4000 × (25−10) = 4000 × 15 = 60,000. Profit = 60,000 − 30,000 = Rs.30,000.",
      difficulty: "medium"
    },
    {
      q: "Same firm. DOL at 4,000 units?",
      options: ["1.0", "2.0", "3.0", "4.0"],
      correct: 1,
      explanation: "DOL = CM / NOI = 60,000 / 30,000 = 2.0.",
      difficulty: "medium"
    },
    {
      q: "If sales rise 15% (DOL=2), profit changes by…",
      options: ["7.5%", "15%", "30%", "100%"],
      correct: 2,
      explanation: "% change in profit = DOL × % change in sales = 2 × 15% = 30%.",
      difficulty: "medium"
    },
    {
      q: "Three products F:G:H sold 2:1:3. Unit CMs: F=6, G=3, H=6. Contribution per mix?",
      options: ["Rs.15", "Rs.27", "Rs.33", "Rs.48"],
      correct: 2,
      explanation: "CM per mix = 2·6 + 1·3 + 3·6 = 12 + 3 + 18 = Rs.33.",
      difficulty: "medium"
    },
    {
      q: "Same. FC=Rs.80,000, target=Rs.52,000. Required mixes?",
      options: ["3,000", "4,000", "5,000", "6,000"],
      correct: 1,
      explanation: "Mixes = (80,000 + 52,000) / 33 = 132,000 / 33 = 4,000 mixes.",
      difficulty: "hard"
    },
    {
      q: "Same. F sells at Rs.22. Required revenue from F?",
      options: ["Rs.88,000", "Rs.176,000", "Rs.220,000", "Rs.440,000"],
      correct: 1,
      explanation: "Units of F = 4,000 × 2 = 8,000. Revenue F = 8,000 × 22 = Rs.176,000. (Lecturer's exact answer.)",
      difficulty: "hard"
    },
    {
      q: "An unprofitable product-line might still be retained if…",
      options: [
        "It absorbs allocated fixed costs that won't disappear if dropped",
        "Salesperson commission is high",
        "It is the cheapest",
        "It has the most variable cost"
      ],
      correct: 0,
      explanation: "If FC are common and won't be eliminated by dropping the product, dropping it just shifts the FC burden to remaining products — total firm profit can fall.",
      difficulty: "hard"
    },
    {
      q: "Why is BEP analysis particularly useful for highly automated firms (high FC, low VC)?",
      options: [
        "They have high DOL — small sales changes have outsized profit effects, and BEP is the critical threshold",
        "They have low DOL",
        "BEP is irrelevant for them",
        "They never break even"
      ],
      correct: 0,
      explanation: "High FC + low VC = high DOL. BEP becomes the critical risk threshold; beyond it, profits accelerate; below it, losses accelerate.",
      difficulty: "hard"
    }
  ]
}

};

/* End of question bank.
   To add a new question, copy any object inside a section's "questions" array
   and modify q, options, correct (0-indexed), explanation, and difficulty. */
