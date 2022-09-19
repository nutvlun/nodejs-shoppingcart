'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Products', [{
      name: 'LinkBuds S Truly Wireless Noise Canceling Earbuds',
      detail: 'Always on, automated audio for whatever world you’re in\n' +
        'High quality noise canceling and natural ambient Sound\n' +
        'Immersive sound quality with Integrated Processor V1\n' +
        'Listen all day, charge in minutes2\n' +
        'IPX4 water resistant for everyday use1\n' +
        'LinkBuds S feature intuitive touch control settings',
      unitPrice: 149.99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      name: 'WF-1000XM4 Industry Leading Noise Canceling Truly Wireless Earbuds',
      detail: 'Industry-leading noise canceling1 with new Integrated Processor V1'+
      'Exceptional sound quality with new Integrated Processor V1 and supporting LDAC codec.'+
        'Crystal-clear call quality, beamforming microphone and a bone-conduction sensor provide clear voice detection even in noisy environments'+
      '8 hours long battery with Noise Canceling'+
      'IPX42 Water resistance'+
      'Easy wireless charging with Qi technology4'+
      '“Sony | Headphones Connect” App for Android /iOS',
      unitPrice: 229.99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        name: 'LinkBuds Truly Wireless Earbuds',
        detail: 'Connect your online and offline worlds'+
        'Unique open ring driver links your content and what’s happening in your surroundings'+
    'Crystal-clear conversations with high quality sound'+
    'Precise Voice Pickup technology for crystal clear phone calls'+
    'Up to 5.5 hours of battery and a total of up to 17.5 hours with the charging case4'+
    'IPX4 splash-proof and sweat-proof design1'+
    'Ultra-small and light for a fit that stays all day',
        unitPrice: 159.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'WF-C500 Truly Wireless In-ear Headphones',
        detail: 'DSEE™ restores high frequency sounds lost in compression'+
        'Up to 10hr battery life2, total up to 20hr with charging case2'+
        'Splash-proof and sweat-proof with an IPX4 rating3'+
        'Small and light for a great fit and all day wear'+
        'Ergonomic Surface Design conforms to most ear shapes'+
        'Fine-tune your sound using the Sony | Headphones Connect app4'+
        'Optional use of one earbud only',
        unitPrice: 69.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'WH-CH710N Wireless Noise Canceling Headphones with Microphone',
        detail: 'Cancel out the world with smart noise cancellation'+
        'Noise cancellation automatically senses your environment with Dual Noise Sensor Technology'+
        'Long-lasting listening with up to 35 hours of battery and quick charging1'+
        'Wireless Bluetooth® streaming with NFC™ One-touch3'+
        'Hear more detail with the 30mm Driver Units',
        unitPrice: 99.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'WH-CH510 Wireless Headphones with Microphone',
        detail: 'Bluetooth® wireless technology for unrestricted movement'+
        'Up to 35 hours of battery life for all day power and quick charging',
        unitPrice: 39.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MDR-ZX310AP Wired On-ear Folding Headphones',
        detail: 'Lightweight, folding design for ultimate music mobility'+
        '1.18 in neodymium drivers for powerful, balanced sound',
        unitPrice: 39.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'WI-1000XM2 Wireless In-ear Noise Canceling Headphones with Microphone',
        detail: 'Industry-leading noise canceling1 with HD Noise Canceling Processor QN1'+
        'Newly-designed flexible, comfortable neck band for all-day listening'+
        'Battery life up to 10 hours2 (with 10min quick charge for  80min of play time)'+
        '“Sony | Headphones Connect” APP for Android /iOS to control your ambient sound settings3'+
        'Smart Listening by Adaptive Sound Control automatically adjusts ambient sound to your activity'+
        'Ambient Sound Mode lets you hear essential sounds while listening on the move'+
        'Atmospheric Pressure Optimizing delivers optimal sound at high altitudes',
        unitPrice: 299.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};
