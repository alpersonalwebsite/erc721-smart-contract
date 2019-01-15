const ABI = [
  {
    constant: true,
    inputs: [
      {
        name: 'interfaceId',
        type: 'bytes4'
      }
    ],
    name: 'supportsInterface',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x01ffc9a7'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    name: 'starsForSale',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x0564b130'
  },
  {
    constant: true,
    inputs: [],
    name: 'tokenAt',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x058df07b'
  },
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [
      {
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x06fdde03'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'getApproved',
    outputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x081812fc'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'to',
        type: 'address'
      },
      {
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'approve',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x095ea7b3'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'from',
        type: 'address'
      },
      {
        name: 'to',
        type: 'address'
      },
      {
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'transferFrom',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x23b872dd'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'from',
        type: 'address'
      },
      {
        name: 'to',
        type: 'address'
      },
      {
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'safeTransferFrom',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x42842e0e'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'ownerOf',
    outputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x6352211e'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'owner',
        type: 'address'
      }
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x70a08231'
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x95d89b41'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'to',
        type: 'address'
      },
      {
        name: 'approved',
        type: 'bool'
      }
    ],
    name: 'setApprovalForAll',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xa22cb465'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'bytes32'
      }
    ],
    name: 'unique',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xa98d03b2'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'from',
        type: 'address'
      },
      {
        name: 'to',
        type: 'address'
      },
      {
        name: 'tokenId',
        type: 'uint256'
      },
      {
        name: '_data',
        type: 'bytes'
      }
    ],
    name: 'safeTransferFrom',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xb88d4fde'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'tokenURI',
    outputs: [
      {
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xc87b56dd'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'owner',
        type: 'address'
      },
      {
        name: 'operator',
        type: 'address'
      }
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xe985e9c5'
  },
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
    signature: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'from',
        type: 'address'
      },
      {
        indexed: true,
        name: 'to',
        type: 'address'
      },
      {
        indexed: true,
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'Transfer',
    type: 'event',
    signature:
      '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'owner',
        type: 'address'
      },
      {
        indexed: true,
        name: 'approved',
        type: 'address'
      },
      {
        indexed: true,
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'Approval',
    type: 'event',
    signature:
      '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'owner',
        type: 'address'
      },
      {
        indexed: true,
        name: 'operator',
        type: 'address'
      },
      {
        indexed: false,
        name: 'approved',
        type: 'bool'
      }
    ],
    name: 'ApprovalForAll',
    type: 'event',
    signature:
      '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'starName',
        type: 'string'
      },
      {
        name: 'starStory',
        type: 'string'
      },
      {
        name: 'ra',
        type: 'string'
      },
      {
        name: 'dec',
        type: 'string'
      },
      {
        name: 'mag',
        type: 'string'
      }
    ],
    name: 'createStar',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x5f3ff33c'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'tokenIdToStarInfo',
    outputs: [
      {
        name: '',
        type: 'string'
      },
      {
        name: '',
        type: 'string'
      },
      {
        name: '',
        type: 'string'
      },
      {
        name: '',
        type: 'string'
      },
      {
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x1967fd98'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'coordinates',
        type: 'bytes32'
      }
    ],
    name: 'checkIfStarExist',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x253d6390'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'ra',
        type: 'string'
      },
      {
        name: 'dec',
        type: 'string'
      },
      {
        name: 'mag',
        type: 'string'
      }
    ],
    name: 'coordinatesToHash',
    outputs: [
      {
        name: '',
        type: 'bytes32'
      }
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
    signature: '0xa2d1d2d1'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256'
      },
      {
        name: 'price',
        type: 'uint256'
      }
    ],
    name: 'putStarUpForSale',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x316a4361'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'buyStar',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
    signature: '0x2f1c34ef'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'mint',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xa0712d68'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'starOwner',
        type: 'address'
      },
      {
        name: 'to',
        type: 'address'
      },
      {
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'transferStar',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x37706d0c'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'user1',
        type: 'address'
      },
      {
        name: 'user1TokenId',
        type: 'uint256'
      },
      {
        name: 'user2',
        type: 'address'
      },
      {
        name: 'user2TokenId',
        type: 'uint256'
      }
    ],
    name: 'exchangeStars',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x40f5ec88'
  }
];
