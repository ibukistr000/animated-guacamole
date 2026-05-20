(function () {
  "use strict";

  window.TRPG_TAG_CONFIG = {
    tagSetVersion: "2026-05-20-balanced-64-r2",
    targetTokenCount: 128,
    responseOptions: [
      { id: "like", label: "むしろ好き" },
      { id: "ok", label: "問題ない" },
      { id: "light", label: "描写薄めなら可" },
      { id: "dislike", label: "好ましくない" },
      { id: "avoid", label: "確実に避けたい" }
    ],
    publicInfoDefinitions: [
      {
        id: "play_time",
        label: "想定プレイ時間（時間）",
        type: "number",
        min: 0,
        step: 0.5,
        placeholder: "例：4"
      },
      {
        id: "session_format",
        label: "ボイセ / テキセ / 半テキセ",
        type: "checks",
        options: [
          { id: "voice", label: "ボイセ" },
          { id: "text", label: "テキセ" },
          { id: "half_text", label: "半テキセ" }
        ]
      },
      {
        id: "secret_ho",
        label: "秘匿HOの有無",
        type: "select",
        options: [
          { id: "none", label: "なし" },
          { id: "yes", label: "あり" },
          { id: "partial", label: "一部あり" },
          { id: "unknown", label: "未定・要確認" }
        ]
      },
      {
        id: "pvp_possibility",
        label: "PvP可能性の有無",
        type: "select",
        options: [
          { id: "none", label: "なし" },
          { id: "possible", label: "可能性あり" },
          { id: "likely", label: "発生しやすい" },
          { id: "unknown", label: "未定・要確認" }
        ]
      },
      {
        id: "pc_loss",
        label: "PCロスト可能性",
        type: "select",
        options: [
          { id: "none", label: "低い・なし" },
          { id: "possible", label: "可能性あり" },
          { id: "high", label: "高め" },
          { id: "unknown", label: "未定・要確認" }
        ]
      },
      {
        id: "continuing_pc",
        label: "継続PC可否",
        type: "select",
        options: [
          { id: "allowed", label: "可" },
          { id: "consult", label: "要相談" },
          { id: "not_allowed", label: "不可" }
        ]
      },
      {
        id: "new_pc_only",
        label: "継続不可・新規限定",
        type: "select",
        options: [
          { id: "no", label: "新規限定ではない" },
          { id: "yes", label: "新規限定" },
          { id: "unknown", label: "未定・要確認" }
        ]
      },
      {
        id: "difficulty",
        label: "難易度目安",
        type: "select",
        options: [
          { id: "low", label: "低め" },
          { id: "normal", label: "標準" },
          { id: "high", label: "高め" },
          { id: "very_high", label: "高難度" },
          { id: "unknown", label: "未定・要確認" }
        ]
      },
      {
        id: "rating",
        label: "R指定・R18・R18G目安",
        type: "select",
        options: [
          { id: "none", label: "指定なし" },
          { id: "r", label: "R指定相当" },
          { id: "r18", label: "R18相当" },
          { id: "r18g", label: "R18G相当" },
          { id: "unknown", label: "未定・要確認" }
        ]
      },
      {
        id: "scenario_tone",
        label: "シナリオ傾向",
        type: "checks",
        options: [
          { id: "horror", label: "ホラー" },
          { id: "mystery", label: "ミステリ" },
          { id: "emotional", label: "エモーショナル" },
          { id: "battle", label: "戦闘" },
          { id: "exploration", label: "探索" },
          { id: "rp_focused", label: "RP重視" }
        ]
      },
      {
        id: "scenario_structure",
        label: "シナリオ構造",
        type: "checks",
        options: [
          { id: "free_exploration", label: "自由探索" },
          { id: "linear", label: "一本道寄り" },
          { id: "secret_focused", label: "秘匿重視" },
          { id: "high_info", label: "高情報量" }
        ]
      }
    ],
    hiddenTagCategories: [
      {
        name: "性・恋愛・同意",
        tags: [
          { id: "ROMANCE_RP", label: "恋愛・関係性RP" },
          { id: "SEXUAL_CONTENT", label: "性的示唆・性的描写" },
          { id: "EXPLICIT_SEXUAL_CONTENT", label: "明示的な性的描写" },
          { id: "SEXUAL_VIOLENCE", label: "性暴力・性的加害" },
          { id: "NTR_RIVAL_RELATIONSHIP", label: "当て馬、NTR展開" },
          { id: "FORCED_RELATIONSHIP", label: "恋愛・婚姻・番い等の強制" },
          { id: "PREGNANCY_REPRODUCTIVE", label: "妊娠・出産・流産・中絶" },
          { id: "SPECIAL_ABNORMAL_FETISH", label: "特殊性癖/異常性癖" }
        ]
      },
      {
        name: "暴力・身体損壊・医療",
        tags: [
          { id: "GRAPHIC_VIOLENCE", label: "強い暴力・残虐描写" },
          { id: "BLOOD_GORE", label: "流血・ゴア" },
          { id: "BODY_MUTILATION", label: "欠損・身体損壊" },
          { id: "ORGANS_MEDICAL", label: "内臓・手術・医療処置" },
          { id: "SELF_PERPETRATED_VIOLENCE", label: "自分が暴力を振るう" },
          { id: "HUMAN_EXPERIMENT", label: "人体実験" },
          { id: "CANNIBALISM", label: "カニバリズム" },
          { id: "BODY_HORROR", label: "身体変化・融合・異形化" }
        ]
      },
      {
        name: "死・自傷・喪失",
        tags: [
          { id: "DEATH_GENERAL", label: "死の描写" },
          { id: "SUICIDE_SELFHARM", label: "自殺・自傷" },
          { id: "LOVED_ONE_DEATH", label: "家族・恋人・親しい人物の死" },
          { id: "CHILD_HARM_DEATH", label: "子どもへの危害・死" },
          { id: "ANIMAL_HARM_DEATH", label: "動物への危害・死" },
          { id: "MASS_DEATH", label: "大量死・災害死" },
          { id: "IRREVERSIBLE_LOSS", label: "取り返しのつかない喪失" },
          { id: "AFTEREFFECT", label: "後遺症・不可逆変化" }
        ]
      },
      {
        name: "精神・記憶・自己同一性",
        tags: [
          { id: "MIND_CONTROL", label: "精神操作・洗脳" },
          { id: "FORCED_ACTION_EMOTION", label: "行動・感情の強制" },
          { id: "MEMORY_LOSS_CHANGE", label: "記憶喪失・記憶改変" },
          { id: "MEMORY_REVEAL", label: "記憶・過去の後出し開示" },
          { id: "GASLIGHTING", label: "ガスライティング" },
          { id: "REALITY_COLLAPSE", label: "現実認識の崩壊" },
          { id: "IDENTITY_LOSS", label: "自己同一性の喪失・人格変化" },
          { id: "REAL_MENTAL_ILLNESS", label: "実在の精神疾患" }
        ]
      },
      {
        name: "虐待・差別・現実の社会問題",
        tags: [
          { id: "ABUSE_DV", label: "虐待・DV" },
          { id: "BULLYING_HARASSMENT", label: "いじめ・ハラスメント" },
          { id: "DISCRIMINATION", label: "差別・偏見" },
          { id: "POVERTY_EXPLOITATION", label: "貧困・搾取" },
          { id: "REAL_DISEASE_PANDEMIC", label: "現実の病気・感染症" },
          { id: "WAR_TERROR_DISASTER", label: "戦争・テロ・災害" },
          { id: "REAL_EVENT_ANALOGUE", label: "実在事件を想起させる描写" },
          { id: "POLITICS_SOCIAL_CONFLICT", label: "政治・社会的対立" }
        ]
      },
      {
        name: "生理的嫌悪・恐怖症",
        tags: [
          { id: "INSECTS_SPIDERS", label: "虫・クモ" },
          { id: "PARASITES", label: "寄生生物" },
          { id: "SNAKES_RATS", label: "蛇・ネズミ" },
          { id: "DOLLS_MANNEQUINS", label: "人形・マネキン" },
          { id: "WATER_DROWNING", label: "深海・水中・溺水" },
          { id: "CLOSED_DARK_HIGH", label: "閉所・暗所・高所" },
          { id: "VOMIT_EXCRETION", label: "嘔吐・排泄物" },
          { id: "FOOD_CONTAMINATION", label: "異物混入・食事汚染" }
        ]
      },
      {
        name: "宗教・神話・オカルト",
        tags: [
          { id: "REAL_RELIGION", label: "実在宗教" },
          { id: "BLASPHEMY", label: "宗教的冒涜" },
          { id: "OCCULT_RITUAL", label: "儀式・呪術" },
          { id: "POSSESSION", label: "憑依・乗っ取り" },
          { id: "COSMIC_HORROR", label: "宇宙的恐怖・不可知の存在" },
          { id: "MONSTERS_ALIENS", label: "異形生命・怪物" },
          { id: "MYTH_REINTERPRETATION", label: "神話・信仰の独自解釈" }
        ]
      },
      {
        name: "TRPG構造・PC/NPC・メタ",
        tags: [
          { id: "PVP_CONFLICT", label: "PC間対立・PvP" },
          { id: "BETRAYAL_DECEPTION", label: "裏切り・騙し合い" },
          { id: "PC_BACKSTORY_OVERRIDE", label: "PC設定・過去への干渉" },
          { id: "PC_FORCED_CRIME_HARM", label: "PCによる加害・犯罪の強制" },
          { id: "UNAVOIDABLE_NPC_DEATH", label: "重要NPCの避けられない死" },
          { id: "NPC_BETRAYAL", label: "重要NPCの裏切り" },
          { id: "META_PLAYER_INTERFERENCE", label: "メタフィクション・PL視点干渉" },
          { id: "RAILROAD_SURPRISE", label: "強い一本道・強制サプライズ" },
          { id: "SOURCE_WORK_EXISTS", label: "原作となる別の作品がある" }
        ]
      }
    ]
  };
})();
