import { Address } from '../../../model/address.model';
import { PaymentDetails } from '../../../model/cart.model';
import { DeliveryMode, Order } from '../../../model/order.model';
import { CheckoutActions } from '../actions/index';
import { PROCESS_FEATURE, StateEntityLoaderActions } from '@spartacus/core';

const userId = 'testUserId';
const cartId = 'testCartId';
const selectedModeId = 'selectedModeId';
const paymentDetails: PaymentDetails = {
  id: 'mockPaymentDetails',
};

const orderDetails: Order = {
  code: 'testOrder123',
};

const address: Address = {
  firstName: 'John',
  lastName: 'Doe',
  titleCode: 'mr',
  line1: 'Toyosaki 2 create on cart',
  town: 'Montreal',
  postalCode: 'L6M1P9',
  country: { isocode: 'CA' },
};

const modes: DeliveryMode[] = [{ code: 'code1' }, { code: 'code2' }];

describe('Checkout Actions', () => {
  describe('AddDeliveryAddress', () => {
    it('should create the action', () => {
      const payload = {
        userId: userId,
        cartId: cartId,
        address: address,
      };

      const action = new CheckoutActions.AddDeliveryAddress(payload);
      expect({ ...action }).toEqual({
        type: CheckoutActions.ADD_DELIVERY_ADDRESS,
        payload: payload,
      });
    });
  });

  describe('AddDeliveryAddressFail', () => {
    it('should create the action', () => {
      const error = 'anError';
      const action = new CheckoutActions.AddDeliveryAddressFail(error);

      expect({ ...action }).toEqual({
        type: CheckoutActions.ADD_DELIVERY_ADDRESS_FAIL,
        payload: error,
      });
    });
  });

  describe('AddDeliveryAddressSuccess', () => {
    it('should create the action', () => {
      const action = new CheckoutActions.AddDeliveryAddressSuccess(address);
      expect({ ...action }).toEqual({
        type: CheckoutActions.ADD_DELIVERY_ADDRESS_SUCCESS,
        payload: address,
      });
    });
  });

  describe('SetDeliveryAddress', () => {
    it('should create the action', () => {
      const payload = {
        userId: userId,
        cartId: cartId,
        address: address,
      };

      const action = new CheckoutActions.SetDeliveryAddress(payload);
      expect({ ...action }).toEqual({
        type: CheckoutActions.SET_DELIVERY_ADDRESS,
        payload: payload,
        meta: StateEntityLoaderActions.entityLoadMeta(
          PROCESS_FEATURE,
          'setDeliveryAddress'
        ),
      });
    });
  });

  describe('SetDeliveryAddressFail', () => {
    it('should create the action', () => {
      const error = 'anError';
      const action = new CheckoutActions.SetDeliveryAddressFail(error);

      expect({ ...action }).toEqual({
        type: CheckoutActions.SET_DELIVERY_ADDRESS_FAIL,
        payload: error,
        meta: StateEntityLoaderActions.entityFailMeta(
          PROCESS_FEATURE,
          'setDeliveryAddress',
          'anError'
        ),
      });
    });
  });

  describe('SetDeliveryAddressSuccess', () => {
    it('should create the action', () => {
      const action = new CheckoutActions.SetDeliveryAddressSuccess(address);
      expect({ ...action }).toEqual({
        type: CheckoutActions.SET_DELIVERY_ADDRESS_SUCCESS,
        payload: address,
        meta: StateEntityLoaderActions.entitySuccessMeta(
          PROCESS_FEATURE,
          'setDeliveryAddress'
        ),
      });
    });
  });

  describe('ResetSetDeliveryAddressProcess', () => {
    it('should create the action', () => {
      const action = new CheckoutActions.ResetSetDeliveryAddressProcess();
      expect({ ...action }).toEqual({
        type: CheckoutActions.RESET_SET_DELIVERY_ADDRESS_PROCESS,
        meta: StateEntityLoaderActions.entityResetMeta(
          PROCESS_FEATURE,
          'setDeliveryAddress'
        ),
      });
    });
  });

  describe('Load Supported Delivery Modes from Cart', () => {
    describe('LoadSupportedDeliveryModes', () => {
      it('should create the action', () => {
        const payload = {
          userId: userId,
          cartId: cartId,
        };

        const action = new CheckoutActions.LoadSupportedDeliveryModes(payload);
        expect({ ...action }).toEqual({
          type: CheckoutActions.LOAD_SUPPORTED_DELIVERY_MODES,
          payload: payload,
        });
      });
    });

    describe('LoadSupportedDeliveryModesFail', () => {
      it('should create the action', () => {
        const error = 'anError';
        const action = new CheckoutActions.LoadSupportedDeliveryModesFail(
          error
        );

        expect({ ...action }).toEqual({
          type: CheckoutActions.LOAD_SUPPORTED_DELIVERY_MODES_FAIL,
          payload: error,
        });
      });
    });

    describe('LoadSupportedDeliveryModesSuccess', () => {
      it('should create the action', () => {
        const action = new CheckoutActions.LoadSupportedDeliveryModesSuccess(
          modes
        );
        expect({ ...action }).toEqual({
          type: CheckoutActions.LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS,
          payload: modes,
        });
      });
    });
  });

  describe('Set Delivery Mode for Cart', () => {
    describe('SetDeliveryMode', () => {
      it('should create the action', () => {
        const payload = {
          userId: userId,
          cartId: cartId,
          selectedModeId: selectedModeId,
        };

        const action = new CheckoutActions.SetDeliveryMode(payload);
        expect({ ...action }).toEqual({
          type: CheckoutActions.SET_DELIVERY_MODE,
          payload: payload,
          meta: StateEntityLoaderActions.entityLoadMeta(
            PROCESS_FEATURE,
            'setDeliveryMode'
          ),
        });
      });
    });

    describe('SetDeliveryModeFail', () => {
      it('should create the action', () => {
        const error = 'anError';
        const action = new CheckoutActions.SetDeliveryModeFail(error);

        expect({ ...action }).toEqual({
          type: CheckoutActions.SET_DELIVERY_MODE_FAIL,
          payload: error,
          meta: StateEntityLoaderActions.entityFailMeta(
            PROCESS_FEATURE,
            'setDeliveryMode',
            'anError'
          ),
        });
      });
    });

    describe('SetDeliveryModeSuccess', () => {
      it('should create the action', () => {
        const action = new CheckoutActions.SetDeliveryModeSuccess(
          selectedModeId
        );
        expect({ ...action }).toEqual({
          type: CheckoutActions.SET_DELIVERY_MODE_SUCCESS,
          payload: selectedModeId,
          meta: StateEntityLoaderActions.entitySuccessMeta(
            PROCESS_FEATURE,
            'setDeliveryMode'
          ),
        });
      });
    });

    describe('ResetSetDeliveryModeProcess', () => {
      it('should create the action', () => {
        const action = new CheckoutActions.ResetSetDeliveryModeProcess();
        expect({ ...action }).toEqual({
          type: CheckoutActions.RESET_SET_DELIVERY_MODE_PROCESS,
          meta: StateEntityLoaderActions.entityResetMeta(
            PROCESS_FEATURE,
            'setDeliveryMode'
          ),
        });
      });
    });
  });

  describe('Create Payment Details for Cart', () => {
    describe('CreatePaymentDetails', () => {
      it('should create the action', () => {
        const payload = {
          userId: userId,
          cartId: cartId,
          paymentDetails: paymentDetails,
        };

        const action = new CheckoutActions.CreatePaymentDetails(payload);
        expect({ ...action }).toEqual({
          type: CheckoutActions.CREATE_PAYMENT_DETAILS,
          payload: payload,
        });
      });
    });

    describe('CreatePaymentDetailsFail', () => {
      it('should create the action', () => {
        const error = 'anError';
        const action = new CheckoutActions.CreatePaymentDetailsFail(error);

        expect({ ...action }).toEqual({
          type: CheckoutActions.CREATE_PAYMENT_DETAILS_FAIL,
          payload: error,
        });
      });
    });

    describe('CreatePaymentDetailsSuccess', () => {
      it('should create the action', () => {
        const action = new CheckoutActions.CreatePaymentDetailsSuccess(
          paymentDetails
        );
        expect({ ...action }).toEqual({
          type: CheckoutActions.CREATE_PAYMENT_DETAILS_SUCCESS,
          payload: paymentDetails,
        });
      });
    });
  });

  describe('Set Payment Details for Cart', () => {
    describe('SetPaymentDetails', () => {
      it('should create the action', () => {
        const payload = {
          userId: userId,
          cartId: cartId,
          paymentDetails: paymentDetails,
        };

        const action = new CheckoutActions.SetPaymentDetails(payload);
        expect({ ...action }).toEqual({
          type: CheckoutActions.SET_PAYMENT_DETAILS,
          payload: payload,
          meta: StateEntityLoaderActions.entityLoadMeta(
            PROCESS_FEATURE,
            'setPaymentDetails'
          ),
        });
      });
    });

    describe('SetPaymentDetailsFail', () => {
      it('should create the action', () => {
        const error = 'anError';
        const action = new CheckoutActions.SetPaymentDetailsFail(error);

        expect({ ...action }).toEqual({
          type: CheckoutActions.SET_PAYMENT_DETAILS_FAIL,
          payload: error,
          meta: StateEntityLoaderActions.entityFailMeta(
            PROCESS_FEATURE,
            'setPaymentDetails',
            'anError'
          ),
        });
      });
    });

    describe('SetPaymentDetailsSuccess', () => {
      it('should create the action', () => {
        const action = new CheckoutActions.SetPaymentDetailsSuccess(
          paymentDetails
        );
        expect({ ...action }).toEqual({
          type: CheckoutActions.SET_PAYMENT_DETAILS_SUCCESS,
          payload: paymentDetails,
          meta: StateEntityLoaderActions.entitySuccessMeta(
            PROCESS_FEATURE,
            'setPaymentDetails'
          ),
        });
      });
    });

    describe('ResetSetPaymentDetailsProcess', () => {
      it('should create the action', () => {
        const action = new CheckoutActions.ResetSetPaymentDetailsProcess();
        expect({ ...action }).toEqual({
          type: CheckoutActions.RESET_SET_PAYMENT_DETAILS_PROCESS,
          meta: StateEntityLoaderActions.entityResetMeta(
            PROCESS_FEATURE,
            'setPaymentDetails'
          ),
        });
      });
    });
  });

  describe('Place Order', () => {
    describe('PlaceOrder', () => {
      it('should create the action', () => {
        const payload = {
          userId: userId,
          cartId: cartId,
        };

        const action = new CheckoutActions.PlaceOrder(payload);
        expect({ ...action }).toEqual({
          type: CheckoutActions.PLACE_ORDER,
          payload: payload,
        });
      });
    });

    describe('PlaceOrderFail', () => {
      it('should create the action', () => {
        const error = 'anError';
        const action = new CheckoutActions.PlaceOrderFail(error);

        expect({ ...action }).toEqual({
          type: CheckoutActions.PLACE_ORDER_FAIL,
          payload: error,
        });
      });
    });

    describe('PlaceOrderSuccess', () => {
      it('should create the action', () => {
        const action = new CheckoutActions.PlaceOrderSuccess(orderDetails);
        expect({ ...action }).toEqual({
          type: CheckoutActions.PLACE_ORDER_SUCCESS,
          payload: orderDetails,
        });
      });
    });
  });

  describe('Clear Checkout Step', () => {
    describe('ClearCheckoutStep', () => {
      it('should create the action', () => {
        const action = new CheckoutActions.ClearCheckoutStep(2);
        expect({ ...action }).toEqual({
          type: CheckoutActions.CLEAR_CHECKOUT_STEP,
          payload: 2,
        });
      });
    });
  });

  describe('Clear Checkout Data', () => {
    describe('ClearCheckoutData', () => {
      it('should create the action', () => {
        const action = new CheckoutActions.ClearCheckoutData();
        expect({ ...action }).toEqual({
          type: CheckoutActions.CLEAR_CHECKOUT_DATA,
        });
      });
    });
  });

  describe('Clear Checkout Delivery Address', () => {
    describe('ClearCheckoutDeliveryAddress', () => {
      it('should create the action', () => {
        const payload = {
          userId: userId,
          cartId: cartId,
        };
        const action = new CheckoutActions.ClearCheckoutDeliveryAddress(
          payload
        );
        expect({ ...action }).toEqual({
          type: CheckoutActions.CLEAR_CHECKOUT_DELIVERY_ADDRESS,
          payload: payload,
        });
      });
    });
  });

  describe('Clear Checkout Delivery Address Fail', () => {
    describe('ClearCheckoutDeliveryAddressFail', () => {
      it('should create the action', () => {
        const payload = {
          userId: userId,
          cartId: cartId,
        };
        const action = new CheckoutActions.ClearCheckoutDeliveryAddressFail(
          payload
        );
        expect({ ...action }).toEqual({
          type: CheckoutActions.CLEAR_CHECKOUT_DELIVERY_ADDRESS_FAIL,
          payload: payload,
        });
      });
    });
  });

  describe('Clear Checkout Delivery Address Success', () => {
    describe('ClearCheckoutDeliveryAddressSuccess', () => {
      it('should create the action', () => {
        const action = new CheckoutActions.ClearCheckoutDeliveryAddressSuccess();
        expect({ ...action }).toEqual({
          type: CheckoutActions.CLEAR_CHECKOUT_DELIVERY_ADDRESS_SUCCESS,
        });
      });
    });
  });

  describe('Clear Checkout Delivery Mode', () => {
    describe('ClearCheckoutDeliveryMode', () => {
      it('should create the action', () => {
        const payload = {
          userId: userId,
          cartId: cartId,
        };
        const action = new CheckoutActions.ClearCheckoutDeliveryMode(payload);
        expect({ ...action }).toEqual({
          type: CheckoutActions.CLEAR_CHECKOUT_DELIVERY_MODE,
          payload: payload,
        });
      });
    });
  });

  describe('Clear Checkout Delivery Mode Fail', () => {
    describe('ClearCheckoutDeliveryModeFail', () => {
      it('should create the action', () => {
        const payload = {
          userId: userId,
          cartId: cartId,
        };
        const action = new CheckoutActions.ClearCheckoutDeliveryModeFail(
          payload
        );
        expect({ ...action }).toEqual({
          type: CheckoutActions.CLEAR_CHECKOUT_DELIVERY_MODE_FAIL,
          payload: payload,
        });
      });
    });
  });

  describe('Clear Checkout Delivery Mode Success', () => {
    describe('ClearCheckoutDeliveryModeSuccess', () => {
      it('should create the action', () => {
        const action = new CheckoutActions.ClearCheckoutDeliveryModeSuccess();
        expect({ ...action }).toEqual({
          type: CheckoutActions.CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS,
        });
      });
    });
  });

  describe('Clear Supported Delivery Modes Data', () => {
    describe('ClearSupportedDeliveryModes', () => {
      it('should create the action', () => {
        const action = new CheckoutActions.ClearSupportedDeliveryModes();
        expect({ ...action }).toEqual({
          type: CheckoutActions.CLEAR_SUPPORTED_DELIVERY_MODES,
        });
      });
    });
  });
});
