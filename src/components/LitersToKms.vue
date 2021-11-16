<template>
    <div class="container">
        <div class="card">

            <!-- buttons -->
            <div class="row buttons mb-2 mx-0">
                <div class="col-md-6 py-1">
                    <div class="btn bg-dark text-white p-2" @click="$router.push('/kms-to-liters')">
                        <h5>км в литры</h5> 
                    </div>
                </div>
                <div class="col-md-6 py-1">
                    <div class="btn bg-secondary text-light p-2 disabled">
                        <h5>литры в км</h5> 
                    </div>
                </div>
            </div>
            <hr class="mt-0">

            <!-- reset -->
            <div class="row">                
                <div class="col-sm-2">
                    <button @click.prevent="reset()" class="btn-reset px-2 py-0 rounded"><small>сброс</small></button>
                </div>
            </div>

            <!-- header -->
            <div class="row mb-3">
                <div class="col-md-12">
                    <h4 class="text-center">Литры в километры</h4>
                </div>
            </div>          

            <!-- main -->
            <div class="row">
                <div v-if="!error" class="col-md-4">
                    <div class="form-group">
                        <label><small>Заправлено л</small></label>
                        <input v-model="liters_past" type="number" class="form-control" required>
                    </div>
                </div>
                <div v-if="!error" class="col-md-4">
                    <div class="form-group">
                        <label><small>Норма л/100км</small></label>
                        <input v-model="norm" type="number" class="form-control norm" required>
                    </div>
                </div>
                <div v-if="!error" class="col-md-4">
                    <div class="form-group text-center my-2">
                        <button v-if="this.kms_past != '' && this.norm != ''" class="py-3 rounded btn-compute" @click.prevent="getKms()">Получить пробег</button>
                        <button @click="showMessage('Заполните поля!')" v-else class="py-3 rounded btn-compute text-secondary">Получить пробег</button>
                    </div>
                </div>
            </div>

            <!-- notifications -->
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

            <!-- list -->
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
        showMessage(msg) {
            alert(msg)
        },
        getKms() {
            if (this.liters_past < 10000) {
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
            } else {
                this.error = 'Слишком много топлива!  '+this.liters_past+'л - Вы магнат?'              
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

.btn-compute {
    height: 100%;
    width: 100%;
}

.norm {
    width: 50%;
}

.buttons {
    margin: 0 auto;
}
.btn {
    width: 100%;
    height: 100%;
}
</style>