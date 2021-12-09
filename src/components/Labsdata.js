const Labs = [
    {
        title: "hemoglobin",
        id: "🩸",
        unit: "g/dL",
        min: 12,
        max: 18,
        increased: [
            "Congenitial heat disease",
            "Polycythemia vera",
            "Hemoconcentration of the blood",
            "Chronic obstructive pulmonary disease",
            "Congestive heart failure",
            "High altitudes",
            "Severe burns",
            "Dehydration"
        ],
        decreased: [
            "Anemia",
            "Hemorrhage",
            "Hemolysis",
            "Nutritional deficiency",
            "Lymphoma",
            "Systemic lupus erythematosus",
            "Sarcoidosis",
            "Kidney disease",
            "Chronic hemorrhage",
            "Splenomegaly",
            "Neoplasia"
        ],
        patho: "Hemoglobin serves as a vehicle for oxygen and carbon dioxide transport. The hemoglobin concentration is a measure of the amount of hemoglobin in the peripheral blood, which reflects the number of red blood cells in the blood. The test is normally performed as part of a complete blood count (CBC). ",
        interfer: [
            "Slight hemoglobin decreases normally occur during pregnancy because of the expanded blood volume.",
            "Living in high-altitude areas causes high hemoglobin values.",
            "Heavey smokers have higher levels than nonsmokers.",
            "Gentamicin and methyldopa may increase hemoglobin levels.",
            "Antibiotics, antineoplastic drugs, aspirin, indomethacin, rifampin, and sulfonamides may decrease hemoglobin levels."
        ]
    },
    {
        title: "white blood cells",
        id: "🍊",
        unit: "K/uL",
        min: 4.5,
        max: 10,
        increased: [
            "Infection",
            "Leukemic neoplasia",
            "Trauma",
            "Stress",
            "Tissue necrosis",
            "Inflammation"
        ],
        decreased: [
            "Drug toxicity",
            "Bone marrow failure",
            "Overwhelming infections",
            "Dietary deficiency",
            "Autoimmune disease",
            "Bone marrow infiltration",
            "Congenital marrow aplasia"
        ],
        patho: "The major function of the white blood cells is to fight infection and react against foreign bodies or tissues. The test is normally performed as part of a complete blood count (CBC). ",
        interfer: [
            "Physical activity and stress may cause an increase in WBC and differential values.",
            "Pregnancy (final month) and labor may cause increased WBC levels.",
            "Patients who have had a splenectomy have a persistent, mild elevation of WBC counts.",
            "Adrenaline, allopurinol, aspirin, chloroform, epinephrine, heparin, quinine, steroids, and triamterene may increase WBC levels.",
            "Antibiotics, anticonvulsants, antihistamines, antimetabolites, antithyroid drugs, arsenicals, barbiturates, chemotherapeutic agents, diuretics, and sulfonamides may decrease WBC levels."
        ]
    },
    {
        title: "sodium",
        id: "🧂",
        unit:"mEq/L",
        min: 136,
        max: 145,
        increased: [
            "Excessive dietary intake",
            "Excessive sodium in IV fluid intake",
            "Cushing syndrome",
            "Hyperaldosteronism",
            "Excessive sweating",
            "Extensive thermal burns",
            "Diabetes insipidus",
            "Osmotic diuresis",
            "GI loss"
        ],
        decreased: [
            "Deficient dietary intake",
            "Deficient sodium in IV fluid intake",
            "Addison disease",
            "Diarrhea",
            "Vomiting of nasogastric aspiration",
            "Chronic renal insufficiency",
            "Excessive oral water intake",
            "Excessive IV water instake",
            "Congesitve heart failure",
            "Syndrome of inappropriate ADH secretion",
            "Osmotic dilution",
            "Peripheral edema",
            "Pleural effusion",
            "Intraluminal bowel loss"
        ],
        patho: "Sodium is the major cation in the extracellular space and the major determinant of extracellular osmolality. The sodium content of the blood is a result of a balance between dietary sodium intake and renal excretion.",
        interfer: [
            "Recent trauma, surgery, or shock may cause increased levels.",
            "Anabolic steroids, antibiotics, carbenicillin, clonidine, corticosteroids, cough medicines, estrogens, laxatives, methyldopa, and oral contraceptives may increased sodium levels.",
            "ACE inhibitors, captopril, carbamazepine, diuretics, haloperidol, heparin, nonsteroidal antiinflammatory drugs, IV fluids, sulfonylureas, triamterene, tricyclic antidepressants, and vasopressin may decrease sodium levels."
        ]
    },
    {
        title: "potassium",
        id: "🍌",
        unit:"mEq/L",
        min: 3.5,
        max: 5,
        increased: [
            "Excessive dietary intake",
            "Excessive IV intake",
            "Acute or chronic renal failure",
            "Hypoaldosteronism",
            "Aldosertne-inhibiting diuretics",
            "Crush injury to tissues",
            "Hemolysis",
            "Transfusion of hemolyzed blood",
            "Infection",
            "Acidosis",
            "Dehydration"
        ],
        decreased: [
            "Deficient dietary intake",
            "Deficient IV intake",
            "Burns",
            "Gastrointestinal disorders",
            "Diarrhea",
            "Vomiting",
            "Diuretics",
            "Hyperaldosteronism",
            "Cushing Syndrome",
            "Renal tubular acidosis",
            "Licorice ingestion",
            "Insulin administration",
            "Glucose administration",
            "Ascites",
            "Renal artery stenosis",
            "Cystic fibrosis",
            "Trauma",
            "Surgery"
        ],
        patho: "Potassium is the major cation within the cell. This electrolyte has profound effects on heart rate and contractility.",
        interfer: [
           "Movement of the forearm with a tourniquet in place may increase potassium levels",
           "Hemolysis during venipuncture causes increasaed levels",
           "Aminocaproic acid, antibiotics, antineoplastic drugs, captopril, epinephrine, heparin, histamine, isoniazid, lithium, mannitol, potassium-sparring diuretics, potassium supplements, and succinylcholine may increase potassium levels.",
           "Acetazolamide, aminosalicylic acid, amphotericin B, carbenicillin, cisplatin, diuretics, glucose infusions, insulin, laxatives, lithium carbonate, penicillin G sodium, phenothiazines, salicylates, Kayexalate may decrease potassium levels."
        ]
    },
    {
        title: "calcium",
        id: "🐮",
        unit:"mg/dL",
        min: 9,
        max: 10.5,
        increased: [
            "Hyperparathyroidism",
            "Nonparathyroid PTH-producing tumor",
            "Metastatic tumor to the bone",
            "Paget disease of bone",
            "Prolonged immobilization",
            "Milk-alkali syndrome",
            "Vitamin D intoxication",
            "Lymphoma",
            "Granulomatous infections",
            "Addison disease",
            "Acromegaly",
            "Hyperthyroidism"
        ],
        decreased: [
            "Hypoparathyroidism",
            "Renal failure",
            "Hyperphosphatemia secondary to renal failure",
            "Rickets",
            "Vitamin D deficiency",
            "Osteomalacia",
            "Pancreatitis",
            "Fat embolism",
            "Alkalosis",
            "Hypoalbuminemia"
        ],
        patho: "About half the total calcium in the blood exists in its free (ionized) form, and about half exists in its protein-bound form (mostly with albumin). The serum calcium level is a measure of both.",
        interfer: [
            "Vitamin D intoxication may increase calcium levels.",
            "Excessive ingestion of milk may cause increased levels.",
            "A decrease in serum pH causes increased calcium levels.",
            "Prolonged tourniquet time will lower pH and falsely increase calcium levels.",
            "There is normally a small diurnal variation in calcium, with peak levels occurring around 9 PM.",
            "Hypoalbuminemia is artifactually associated with decreased levels of total calcium.",
            "Alkaline antacids, androgens, calcium salts, ergocalciferol, hydralazine, lithium, parathyroid hormone (PTH), thiazide diuretics, thyroid hormone, and vitamin D may increase serum calcium levels.",
            "Acetazolamide, albuterol, anticonvulsants, asparaginase, aspirin, calcitonin, cisplatin, corticosteroids, diuretics, estrogens, heparin, laxatives, loop diuretics, magnesium salts, and oral contraceptives may decrease serum calcium levels."
        ]
    },
    {
        title: "blood glucose",
        id: "🍭",
        unit:"mg/dL",
        min: 70,
        max: 200,
        increased: [
            "Diabetes mellitus",
            "Acute stress response",
            "Cushing syndrome",
            "Pheochromocytoma",
            "Chronic renal failure",
            "Glucagonoma",
            "Acute pancreatitis",
            "Diuretic therapy",
            "Corticosteroiud therapy",
            "Acromegaly"
        ],
        decreased: [
            "Insulinoma",
            "Hypothyroidism",
            "Hypopituitarism",
            "Addison disease",
            "Extensive liver disease",
            "Insulin overdose",
            "Starvation"
        ],
        patho: "Blood glucose is a sugar that the bloodstream carries to all cells in the body to supply energy. The human body regulates blood glucose levels so that they remain moderate: Enough glucose to fuel the cells, but not enough to overload the bloodstream.",
        interfer: [
           "Many forms of stress (anesthesia, stroke, heart attack) can cause increased serum glucose levels. ",
           "Many pregnant women experience some degree of glucose intolerance. If significant, it is called gestational diabetes.",
           "IV fluids with dextrose",
           "Antidepressants, corticosteroids, cyclosporine, dextrothyroxine, diazoxide, diuretics, epinephrine, estrogens, glucagon, isoniazid, lithium, niacin, phenothiazines, phenytoin, salicylates, triamterene can increase blood glucose levels. ",
           "Acetaminophen, alcohol, alpha-glucosidase inhibitors, anabolic steroids, biguanides, clofibrate, disopyramide, gemfibrozil, incretin mimetics, insulin, meglitinides, monoamine oxidase inhibitors, pentamidine, propranolol, sulfonylureas, and thiazolidinediones."
        ]
    },

];

export default Labs;