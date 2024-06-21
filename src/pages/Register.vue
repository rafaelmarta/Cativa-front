<template>
  <v-container>
    <v-card class="title-card">
      <p class="text-center">
        Tem alguma pergunta ou precisa de ajuda? <br>
        Sinta-se à vontade para entrar em contato conosco. Adoraríamos ouvir de você!
      </p>
    </v-card>

    <!-- Formulário -->
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-form ref="agencyForm">
          <v-text-field label="Agência" v-model="agency" outlined required></v-text-field>
          <v-text-field label="E-mail" v-model="email" type="email" outlined required :rules="[emailValidationRule]"></v-text-field>
          <v-text-field
            label="Telefone"
            type="tel"
            v-model="phone"
            outlined
            required
            @input="formatPhone"
            :rules="[phoneValidationRule]"
          ></v-text-field>
          <v-row justify="center">
            <v-btn color="primary" @click="submitForm" :disabled="!isFormValid">Enviar</v-btn>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from '../api'
import { useToast } from 'vue-toastification';

export default {
  data() {
    return {
      agency: '',
      email: '',
      phone: '',
    };
  },
  computed: {
    phoneValidationRule() {
      return (value) => {
        const isValid = /^\(\d{2}\) \d{5}-\d{4}$/.test(value);
        return isValid || 'Número de telefone inválido.';
      }
    },
    emailValidationRule() {
      return (value) => {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        return isValid || 'E-mail inválido';
      }
    },
    isFormValid() {
      return (
        this.agency &&
        this.email &&
        this.phone
      )
    }
  },
  methods: {
    formatPhone() {
      this.phone = this.phone.replace(/\D/g, '');

      if (this.phone.length > 11) {
        this.phone = this.phone.slice(0, 11);
      }

      const match = this.phone.match(/^(\d{2})(\d{5})(\d{4})$/);
      if (match) {
        this.phone = `(${match[1]}) ${match[2]}-${match[3]}`;
      }
    },
    async submitForm() {
      const toast = useToast();


      if (this.$refs.agencyForm.validate()) {
        const newAgency = {
          agency: this.agency,
          email: this.email,
          phone: this.phone,
        };
        try {
          const agencyCreateResponse = await api.createAgency(newAgency)
          console.log('res', agencyCreateResponse)

          if (agencyCreateResponse.status === 201) {
            toast.success('Cadastro enviado com sucesso!')
          }
        } catch(error) {
          toast.error('Não foi possível salvar o cadastro.')
          console.error(error)
        }

      } else {
        // Form is invalid
        toast.error('Formulário inválido.')
      }
    }
  }
};
</script>

<style scoped lang="scss">
  .title-card {
    font-size: 1.2rem;
    color: #333;
    margin-top: 30px;
    margin-bottom: 40px;
  }
</style>
