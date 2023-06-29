<template>
  <div>
    <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="4"
      label="Период:"
      label-for="input-period"
    >
      <b-form-input
        id="input-period"
        disabled
        value="С начала года"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="4"
      label="Приход:"
      label-for="input-coming"
    >
      <b-form-input
        id="input-coming"
        disabled
        value="6 600 руб."
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="4"
      label="Расход:"
      label-for="input-expenses"
    >
      <b-form-input
        id="input-expenses"
        disabled
        value="5 450 руб."
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="4"
      label="Баланс:"
      label-for="input-balance"
    >
      <b-form-input
        id="input-balance"
        disabled
        value="1 150 руб."
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="2"
      content-cols-sm
      content-cols-lg="4"
      label="Оплатить:"
      label-for="input-balance"
    >
      <b-form-input id="input-balance"></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "AdvertiserFinance",
};
</script>

<style scoped></style>
