if (! this.sh_languages) {
  this.sh_languages = {};
}
sh_languages['gherkin_ja'] = [
  [
    [
      /#/g,
      'sh_comment',
      1
    ],
    [
      /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
      'sh_number',
      -1
    ],
    [
      /^(?:[\s]*(?:ただし|但し|しかし|かつ|ならば|もし|前提|\* |サンプル|例|シナリオテンプレ|テンプレ|シナリオテンプレート|シナリオアウトライン|シナリオ|背景|機能|フィーチャ))/g,
      'sh_keyword',
      -1
    ],
    [
      /^(?:[\s]*'(?:[^\\']|\\.)*'[\s]*|[\s]*\"(?:[^\\\"]|\\.)*\"[\s]*)$/g,
      'sh_comment',
      -1
    ],
    [
      /(?:[\s]*'{3})/g,
      'sh_string',
      2
    ],
    [
      /(?:[\s]*\"{3})/g,
      'sh_string',
      3
    ],
    [
      /"/g,
      'sh_string',
      4
    ],
    [
      /'/g,
      'sh_string',
      5
    ],
    [
      /(?:@[^@\r\n\t ]+)/g,
      'sh_type',
      -1
    ],
    [
      /\|/g,
      'sh_symbol',
      -1
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ]
  ],
  [
    [
      /(?:'{3})/g,
      'sh_string',
      -2
    ]
  ],
  [
    [
      /(?:\"{3})/g,
      'sh_string',
      -2
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      /\\(?:\\|")/g,
      null,
      -1
    ],
    [
      /"/g,
      'sh_string',
      -2
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      /\\(?:\\|')/g,
      null,
      -1
    ],
    [
      /'/g,
      'sh_string',
      -2
    ]
  ]
];
