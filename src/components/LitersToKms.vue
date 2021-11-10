<template>
    <div class="kms-to-liters">
        <div class="row">
            <div class="col-sm-2">
                <button @click.prevent="reset()" class="btn-reset px-2 py-0 rounded"><small>сброс</small></button>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-md-12">
                <h4 class="text-center">Литры в километры</h4>
            </div>
        </div>
        <div class="row">
            <div v-if="!error" class="col-md-4">
                <div class="form-group">
                    <label><small>Заправлено, л</small></label>
                    <input v-model="liters_past" type="number" class="form-control" required>
                </div>
            </div>
            <div v-if="!error" class="col-md-4">
                <div class="form-group">
                    <label><small>Норма</small></label>
                    <input v-model="norm" type="number" class="form-control" required>
                </div>
            </div>
            <div v-if="!error" class="col-md-4">
                <div class="form-group text-center my-2">
                    <button class="py-3 rounded btn-compute" @click.prevent="getKms()">Расчитать</button>
                </div>
            </div>
        </div>
        <div class="row px-3">
            <div class="col-sm-12">
                <div v-if="res_kms" class="col-md-12 text-center bg-light rounded p-3">
                    <h4 class="text-secondary">Пройдено: <b class="text-danger">{{ Math.round(res_kms) }}</b> км</h4>
                </div>
                <div v-if="error" class="alert text-center alert-danger" role="alert">
                    <h5>{{ error }}</h5> 
                </div>
            </div>
        </div>
        <div class="row px-3">
            <div class="col-md-12 rounded p-3">
                <ul class="list-group">
                    <li v-for="(note, index) in notes" :key="index" class="list-group-item">
                        <b>на {{ note.liters_past }}</b> <small>л</small> <i>по норме</i> <b>{{ note.norm }}</b><small> л/100км </small> <i>пробег</i> <b> {{ note.res_kms }} </b> <small>км</small>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LitersToKms',
    data() {
        return {
            liters_past: '',
            norm: '',
            res_kms: '',
            notes: [],
            error: ''
        }
    },
    methods: {
        getKms() {
            if (this.liters_past > 0 && this.norm > 0) {
                this.res_kms = this.liters_past / this.norm * 100;
                this.notes.unshift({
                    liters_past: this.liters_past,
                    norm: this.norm,
                    res_kms: Math.round(this.res_kms)
                })  
            } else {
                this.error = 'Числа должны быть больше 0!'
            }


        },
        reset() {
            this.liters_past = ''
            this.norm = ''
            this.res_kms = ''
            this.notes = [],
            this.error = ''
        }
    }
}
</script>

<style scoped>
.kms-to-liters {
    padding: 20px;
    width: 400px;
    border: black 1px solid;
    background-color: rgb(145, 189, 145);
    border-radius: 5px;
}
.btn-compute {
    height: 100%;
    width: 100%;
}

li {
    border: none;
    background-color: rgb(145, 189, 145);
}
</style>