export type IAnnounce = {
  isExecuted: boolean;
  delegate: string;
  real: string;
  delayUntil: number;
};

export type IPayment = {
  receiver: string;
  amount: number;
};
