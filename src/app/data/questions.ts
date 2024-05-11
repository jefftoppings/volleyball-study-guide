export interface Question {
  title: string;
  subtitle?: string;
  answers: string[];
}

export const QUESTIONS: Question[] = [
  {
    title: 'Changes of Equipment',
    answers: [
      'to play barefoot',
      'to change wet or damaged uniforms between sets, or after substitution, provided that the colour,d esign, and number of the new uniform is the same',
      'to play in training suits in cold weather, provided that they are of the same colour and design for the whole team (except Libero) and numbered correctly',
    ],
  },
  {
    title: 'Forbidden Objects, NOT PERMITTED',
    answers: [
      'Finger, hand, wrist, elbow, forearm guards, casts, or braces made of hard plastic, metal, wood, or hard substances',
      'Equipment that could cut or cause abrasions',
      'Headwear except for medical or religious/cultural beliefs. Headbands can be word at a maximum 5cm in width',
    ],
  },
  {
    title: 'Forbidden Objects, PERMITTED',
    answers: [
      'Shoulder, upper arm, thigh, or lower leg protective equipment if padded',
      'Knee braces if made by reputable manufacturer',
      'Protector for broken nose',
      'Thermoplastic finger splints, as long as they are free of sharp edges, do not protrude beyond the fingertipsl and are secured to the digit or hand with tape or other wrapping',
      'Prosthetics so long as the prosthetic is covered/padded and does not pose any danger to the player or other players',
    ],
  },
  {
    title: 'Captain, during the match',
    answers: [
      'Ask for an explanation on the application or interpretation of the rules, and also to submit the requests or questions of his/her teammates. If the game captain does not agree with the explanation of the first referee, he/she may choose to protest against such decision and immediately indicates to the first referee that he/she reserves the right to record an official protest on the score sheet at the end of the match',
      'To ask authorization: *to change all or part of the equipment*to verify the positions of the teams*to check the floor, net, ball, etc.',
      "In the absence of the coach (unless the team has AC who has overtaken coach's functions) requests timeouts and substitutions",
    ],
  },
  {
    title: 'Coach, during the match',
    answers: [
      'Prior to each set, gives the second referee or scorer the line-up sheet duly filled in and signed',
      'Sits on the team bench, but may leave it',
      'Requests timeouts and substitutions',
      'May, as well as other team members, give instructions to the players on the court',
    ],
  },
  {
    title: 'To Score a Point',
    answers: [
      "By successfully landing the ball on the opponent's court",
      'When the opponent team commits a fault',
      'When the opponent team receives a penalty',
    ],
  },
  {
    title: 'Ball "Out"',
    answers: [
      'All parts of the ball which contact the floor are completely outside the boundary lines',
      'It touches an object outside the court, ceiling, or a person out of play',
      'It touches the antenna, ropes, post, or net itself outside of the side bands',
      'It crosses the vertical plane of the net either partially or toally outside the crossing space',
      'It crosses completely the lower space under the net',
    ],
  },
  {
    title: 'Characteristics of the Hit',
    answers: [
      'The ball may touch any part of the body',
      'The ball must not be caught and/or thrown. It can rebound in any direction',
      'The ball may touch various parts of the body, provided that the contacts take place simultaneously',
    ],
  },
  {
    title: 'Faults in Playing the Ball',
    answers: ['Four hits', 'Assisted hit', 'Catch', 'Double contact'],
  },
  {
    title: "Player's Faults at the Net",
    answers: [
      "A player touches the ball or an opponent in the opponent's space before or during an opponent's attack hit",
      "A player interferes with the opponent's play while penetrating into the opponent's space under the net",
      "A player's foot penetrates completely into the opponent's court",
      "A player interferes with play by:*touching the net between the antenna or antenna itself during the action of playing the ball*using the net between the antennae as a support or stabilizing aid*creating an unfair advantage over the opponent by touching the net*making actions which ninder an opponent's legitimate attempt to play the ball*catching/holding on the net",
    ],
  },
  {
    title: 'Execution of the Service',
    subtitle: 'Some of the faults prior to service hit',
    answers: [
      'The ball shall be hit with one hand or any pat of the arm after being tossed or released from the hand',
      'Only one toss or release of the ball is allowed. Dribbling or moving the ball in hands is permitted',
      'At the moment of service hit or take-off, the server must not touch the court or the floor outside the service zone. After the hit, they may land outside the service zone or inside the court',
      'The server must hit the ball within 8 seconds after the first referee whistles for service',
      "A service executed before the referee's whistle is cancelled and repeated",
    ],
  },
  {
    title: 'Faults made During the Service, Serving Faults/Before Service Hit',
    subtitle:
      'Lead to change of service even if the opponent is out of position',
    answers: [
      'Violates the service order',
      'Does not execute the service properly',
    ],
  },
  {
    title: 'Faults made During the Service, After the Service Hit',
    answers: [
      'Touches a player of the service team or fails to cross the vertical plane of the net completely through the crossing space',
      'Goes "out"',
      'Passes over a screen',
    ],
  },
  {
    title: 'Characteristics of the Attack Hit',
    answers: [
      'All actions which direct the ball towards the opponents with the exception of service and block, are considered attack hits',
      'During an attack hit, tipping is permitted only if the ball is cleanly hit, and not caught or thrown',
      'An attack hit is completed the moment the ball completely crosses the vertical plane of the net or is touched by an opponent',
    ],
  },
  {
    title: 'Faults of the Attack Hit',
    answers: [
      'A player hits the ball within the playing space of the opposing team',
      'A player hits the ball "out"',
      'A back-row player completes an attack hit from the front zone, if at the moment of hit, the ball is entirely higher than the top of the net',
      "A player completes an attack hit on the opponent's service, when the ball is in the front zone and entirely above the top of the net",
      'A Libero completes an attack hit, if at the moment of the hit, the ball is entirely higher than the top of the net',
      'A player completes an attack hit from higher than the top of the net when the ball is coming from an overhand finger pass by a Libero in their front zone',
    ],
  },
  {
    title: 'Blocking Faults',
    answers: [
      "Blocker touches the ball in the opponent's space before the opponent's attack hit",
      'A back row player or Libero completes a block or participates in a completed block',
      "Blocking the opponent's service",
      'The ball is sent "out" off the block',
      "Blocking the ball in the opponent's space from outside the antenna",
      'A Libero attempts an individual or collective block',
    ],
  },
  {
    title: 'Improper Requests',
    answers: [
      'During a rally or at the moment of, or after the whistle to serve',
      'By a non-authorized team member',
      'For a second substitution by the same team during the same interruption, except in the case of injury/illness/expulsion/disqualification of a player in play',
      'After having exhausted the authorized number of timeouts and substitutions',
      'VC: Coach not at the end of bench nearest scorer, or at extention of the attack line in the free zone',
    ],
  },
  {
    title: 'Types of Delays',
    answers: [
      'Delaying regular game interruptions',
      'Prolonging interruptions, after having been instructed to resume the game',
      'Requesting an illegal substitution',
      'Repeating an improper request',
      'Delaying the game by a team member',
    ],
  },
  {
    title: 'Playing Actions of the Libero',
    answers: [
      'The Libero is allowed to replace any player in a back-row position',
      'Restricted to perform as a back-row player, and is not allowed to complete an attack hit from anywhere if at the moment of contact, the ball is entirely higher than the top of the net',
      'He/she may not serve, block, or attempt to block',
      'A player may not complete an attack hit when the ball is entirely higher than the top of the net, if the ball is coming from an overhand finger pass by a Libero in his/her front zone',
    ],
  },
  {
    title: 'Misconduct Leading to Sanctions',
    subtitle:
      'Incorrect conduct by a team member towards officials, opponents, teammates, or spectators classified in three categories',
    answers: [
      'Rude Conduct:*Action contrary to good manners or moral principles',
      'Offensive Conduct:*Defamatory or insulting words or gestures or any action expressing contempt',
      'Aggression:*Actual physical attack or aggressive or threatening behaviour',
    ],
  },
  {
    title: 'First Referee Responsibilities, Prior to Match',
    answers: [
      'Inspects the conditions of the playing area, the balls, and other equipment',
      'Performs the coin toss with the team captains',
      "Controls the teams' warming up",
    ],
  },
  {
    title: 'First Referee, During the Match -- Decides Upon',
    answers: [
      'The faults of the server and the positions of the serving team, including the screen',
      'The faults in playing the ball',
      "The faults above the net, and the faulty contact of the player with the net, primarily on the attacker's side",
      'The attack hit faults of the Libero and back-row players',
      'The completed attack hit made by a player on a ball above the net height coming from an overhand finger pass by the Libero in his/her front zone',
      'The ball completely crossing the lower space under the net',
      'The completed block by back row players, or the attempted block by the Libero',
      "The ball that crosses the net totally or partly outside of the crossing space to the opponent's court, or contacts the antenna on his/her side of the playing court",
      'The served ball or 3rd hit passing over or outside the antenna on his/her side of the court',
    ],
  },
  {
    title: 'Second Referee, During the Match',
    answers: [
      "Penetration into the opponent's court, and the space under the net",
      'Positional faults of the receiving team',
      "The faulty contact of the player with the net, primarily on the blocker's side of the net, and with the antenna on his/her side of the court",
      'The completed block by back row players or the attempted block by the Libero; or the attack hit fault by back row players or by the Libero',
      'The contact of the ball with an outside object',
      'The contact of the ball with the floor when the first referee is not in position to see the contact',
      "The ball that crosses the net totally outside of the crossing space to the opponent's court or contacts the antenna on his/her side of the court",
      'The served ball and 3rd hit passing over or outside the antenna on his/her side of the court',
    ],
  },
  {
    title: 'Scorer, During the Match',
    answers: [
      'Records the points scored',
      'Controls the serving order of each team, and indicates any error to the referees immediately after the service hit',
      'Is empowered to acknowledge and announce requests for player substitution by use of the buzzer, controlling their number, and records the substitutions and timeouts, informing the second referee',
      'Notifies the referees of a request for a regular game interruption that is out of order',
      'Announces to the referees the ends of sets and the scoring of the 8th point in the deciding set',
      'Records misconduct warnings, sanctions, and improper requests',
      'Records all other events, as instructed by the second referee',
      'Controls the interval between sets',
    ],
  },
  {
    title: 'Assistant Scorer, During the Match',
    answers: [
      'Records details of the Libero replacements/redesignations',
      'Notifies the referees of any faults of the Libero replacement, by using the buzzer',
      "Operates the manual scoreboard on the scorer's table",
      'Checks that the scoreboards agree',
      'If necessary, updates the reserve scoresheet and gives it to the scorer',
    ],
  },
  {
    title: 'Lines Judges Responsibilities',
    answers: [
      'The ball "in" and "out" whenever the ball lands near their line',
      'The touches of "out" balls by the team receiving the ball',
      'The ball touching the antenna, the served ball, and the third hit of the team crossing the net outside the crossing space',
      'Any player (except the server) stepping outside of his/her playing court at the moment of service hit',
      'The foot faults of the server',
      'Any contact with the top 80cm of the antenna on their side of the court by any player during their action of playing the ball or interfering with the play',
      "Ball crossing the net outside of the crossing space into the opponent's court or touching the antenna on his/her side of the court",
    ],
  },
];
