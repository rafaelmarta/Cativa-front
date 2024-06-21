<template>
  <v-container>
    <v-row>
      <!-- Descrição -->
      <v-col cols="12" md="6">
        <p class="text-description">
          O <span class="highlight">Sistema de Fidelidade Cativa</span> é um programa de fidelidade de ponta projetado especificamente para agências de turismo, com o objetivo de aprimorar a retenção e a satisfação do cliente. Seu principal propósito é recompensar e incentivar tanto as agências quanto seus clientes, promovendo uma relação mutuamente benéfica. Este programa inovador oferece uma variedade de recursos exclusivos e benefícios que elevam a experiência de viagem para os clientes, ao mesmo tempo que capacitam as agências a construir conexões duradouras com seus clientes.
        </p>
      </v-col>

      <!-- Cards -->
      <v-col cols="12" md="6">
        <v-row class="card-row">
          <v-col cols="6">
            <div class="card">
              <div class="card-details">
                <p class="text-title">Acumule pontos</p>
                <p class="text-body">Os clientes acumulam pontos de fidelidade a cada reserva ou compra relacionada a viagens feitas por meio da agência participante. Cada transação contribui para o saldo de pontos, aproximando-os de recompensas emocionantes.</p>
              </div>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="card">
              <div class="card-details">
                <p class="text-title">Resgate Recompensas</p>
                <p class="text-body">Os pontos de fidelidade acumulados podem ser resgatados por uma variedade de recompensas tentadoras, que vão desde reservas com desconto e upgrades gratuitos até pacotes de viagem exclusivos e ofertas de parceiros.</p>
              </div>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <div class="card">
              <div class="card-details">
                <p class="text-title">Ofertas exclusivas</p>
                <p class="text-body">Os membros do programa têm acesso a promoções exclusivas, privilégios de reserva antecipada e ofertas de viagem exclusivas, proporcionando-lhes uma sensação de exclusividade e valor que vai além das experiências de viagem convencionais.</p>
              </div>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="card">
              <div class="card-details">
                <p class="text-title">Inscrição</p>
                <p class="text-body">Os clientes podem se inscrever facilmente no "Sistema de fidelidade Cativa" por meio de um portal online de fácil utilização ou visitando uma agência de turismo participante. Após a inscrição, eles têm acesso imediato a uma conta de fidelidade personalizada.</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
@import '../styles/settings.scss';

.highlight {
  color: $span;
}

.text-description {
  font-size: 1.2rem;
  color: #333;
}

.card-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.card {
 width: 100%;
 max-width: 300px;
 height: 300px;
 border-radius: 20px;
 background: $white;
 position: relative;
 padding: 1rem;
 border: 2px solid $light-grey;
 transition: 0.5s ease-out;
}


.card-details {
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: auto;
  max-height: none;
  gap: 0.5em;
}

.text-body {
  color: $dark-grey;
  font-size: 1rem;
  overflow: hidden;
  white-space: normal;
}

.text-title {
  font-size: 1.3em;
  font-weight: bold;
  overflow: hidden;
  white-space: normal;
  color: $black;
}

.card:hover {
 border-color: $light-blue;
 box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

@media (max-width: 599px) {
  .text-description {
    font-size: 1rem;
  }
  .text-body {
    font-size: 0.7rem;
  }
}

@media (min-width: 1300px) {
  .text-description {
    font-size: 1.75rem;
    margin-top: 1rem;
  }
}
</style>
