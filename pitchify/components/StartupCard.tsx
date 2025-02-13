import React from 'react'
import { formatDate } from '@/lib/utils'
import { EyeIcon} from 'lucide-react'
import Link from 'next/link'
import {Button }from './ui/button'
import {Author, Startup} from '../sanity.types'
import Image from 'next/image'

export type StartupTypeCard = Omit<Startup,"author"> & {author?: Author}


const StartupCard = ({post}:{post:StartupTypeCard}) => {

  const {_createdAt,
    views,
    author,
    _id,
    title,
    category,
    description,
    image
  } = post

  return (
    <li className='startup-card group'>
      <div className='flex-between'>
        <p className='startup_card_date'>
          {formatDate(_createdAt)}
        </p>
        <div className='flex gap-1.5'>
          <EyeIcon className='size-6 text-primary'/>
            <span className='text-16-medium'>{views}</span>
        </div>
      </div>

      <div className='flex-between mt-5 gap-5'> 
        <div className='flex-1'>
          <Link href={`/user/${author?._id}`}>
            <p className='text-16-medium line-clamp-1'>{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className='"text-26-semibold line-clamp-1'>{title}</h3>
          </Link>
        </div>
      <Link href={`/user/${author?._id}`}>
        <Image src="https://placehold.co/600x400" alt="placeholder" width={48} height={48} className='rounded-full'/>
      </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className='startup-card_description mt-5 line-clamp-3'>
          {description}
        </p>
        <Image src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAGBwQFAQIDAAj/xAA1EAACAQMDAgQDBwQDAQEAAAABAgMABBEFEiEGMRMiQVEUYXEHQlKBkbHBIzKh0TNi4XIV/8QAGwEAAgMBAQEAAAAAAAAAAAAAAgMAAQQFBgf/xAAxEQACAgEEAQMBBgUFAAAAAAAAAQIRAwQSITETBUFRIhQyYXGBoUJSkbHRI3LB4fH/2gAMAwEAAhEDEQA/AEhWgE9UIeqyGashkVZGXnSMV6dXinsUB8I5ct2ArJrJQ8bjJ9gSdIbIuI9pPOcdq814mX5OBYdY67Pql2bYxmKC3bAQ9yfc16L0/SRww3XbZFzye0DovXdYZJILKaKA8+NJhB+WeTXShGEnUnwSV1whpWOg6vFaxwz6lZhlGN5G5vz7ftSX6Z6fu3OMpfrX9khVZ/Zpf1Zx1TpjUr60lt49ZiIYYZVQKT+Y7U2Oi9Og7WJr9WWoZvdoWmrdFa3ptyIjbeNEWAWWJgV59/UfnQZJxgnJvgY7StlzpPRl5ZOl0mo+BcryAi5H0PuK5GbXQyLa48AbmydrHU+q6GFjvrCGUtwk0bEK31HoazYdDizu4yr8AlJgJrWs3ms3PjXj5x/ai8Kv0rsYNNjwRqCLPaJo9zrV58NagDAy7nsgqajPDBHdIgWv9nK+F5NRbxfmnlrlL1bn7pdMr217qDpeUafdiOZU/sMoJyvyOad9l02rXkhx+RCLN11rcjlklijH4Uj4/wA0a9MwJcpsgL10iz1SiGRVohkDmrJZtjirKGL0DCh0YtGMuZG34HPyri+oN+WmKduQSy7YYy8vlUDJJ7CsEVudIqmBfTK2V71Dq+uXsKzWlhEZ1jPZmzhfr2Jr1OlxbcSjL2Q6K4JuofaRevM3w1tEqg+VpfMR2wQOw7dqfsfySypl6616QEJdiEZ48ONRjnPtU8cfgqzW26y1yOdJpL55BG4Y7lHIB5Hbse1FGEb4RVsaupzg2njpwNu/GfTGe9DPCm9r6Yy+Cn0XVINXtDNCpQq210bHB7+ncV5rXaOWlzOHt7CbTKb7RHhGg7XI8RpV8MeufX/FT09N5rRF2LGu6GHH2YTxJd3du+BLIgZPmB3rj+rxk4KS6Iuxh4x6j2rgBgP9qKRfBWUnHjeIQPfGDXY9Jb3yXsU+xdHkmu4Ua4okizOKKirMgVdEM4q6KOkERmmjiHeRgo/Oqk1FNlPhWN7SLJNLtUgtQFAHJ9z715nNPyybkLi/ch9ZO0nT90JGwAuRjjNN0SSzRou22C/Rnn0PqaL7zWkZH0DH/denj7/oOQPDwS/9YuF4xsAJ+fetcYx/iFSv2OIOD6VSgXZIaSMxMiR7RtyfMTnt/r/NHNxrhAq/kctifi+mbJ2P/JaoSfqopWRU0xvO3gCdFuLi0tNROmPG7JbxuqyDvjdk/L/yud6zjhKcFL+Zr+whN8WB+panearP417MZG+6OwH0FTFghiVRQ1Kiz6S6eOu3TmRmS2hx4hXuxPoKy67V/Z4qu2R30g7i6O0q3ZZLMTQTofLKkh3A1xJeoZZ8SdovY/kqtb6o1fQbj4W6t4LgsMxTgldw+Y96fg0OHUR3JtE5AnWdYvdYuBNeyA7eERRhV+ldfBpseBVAhXYpxZqO9MRDaiohmoQzV0QstAs3vNThVDtEbB2b2xSNTNY8TYubpUN2C6tTGMgA47EV5txlZUXGuQI+0LUXYw2UPlgcF2PqxH8V1vTMK5m+0FGmzP2cabPdPqIx/Tu7OSFF/EwII/Y11o5YLJ4glP6qBGeF0kZGRlZDtZSOQR3BroqPJTXJNsIbOVIkkSSWZuGjQNvJz90AY7Acn1J4rZGMFG2Z5vLu46/T/wBLGx6S1SS4gW4snj8ZwFhkO19h7sR3VRjucZ9M+mOW1/d5HrkbUFgtlptvaR+ZII1jGfkKXkVwGJARqrW/TVlfB7gSPcbvBQ4Bwc8fTmuP6g5arNCKXC7/AGEuDTpAFFpGoyWpukspzABkybMLW9afJLpFSz4otRcuQ7+zW1vre2uRLZzLFKVeOXHlbAwe1cD1fBkclSdrvgbF27QYkY7iuA006YYvvtQmiaSxhUgyruZueQOK7npEGlKXyLu2AuK7BZrke4qmQwBTEizOKIhmrSIbUVECnoNE+PleQ4RlCqfc1zvUb2JITkatIZK6TcSRZS2YA9s4BP5GuZHTZnzQWxi86x0rWXvjNLpd2ttECiv4ZYY9Txniu1o8SxY6fZcYuIU9IRSWml2To2yWIZIAzz865efM46hzj7AR5bYU369KXwF5qukwfEffd07/ADJ9fzrs6bXb6W7b+fAxs9ZLoVqwfTrGCLjgouOK6m2c1y7JZtda1aWaMSsaep5C5qLD7EcqK206gbUxKYIwI0baWHOTQ5ouKrouMrIt5aW5kNxNBbeLjG+UbiB7VhcF7BEW9u1Fm6fEZQL/AMajyke1aMM8kJpvoz5sEJxfHJr9mmqKkt7pc00j4Ili9AAPLj9Ap/M031LHTU0gsErjRf8AUkdxeWmzTLlbW59JGXKn3BriZtNjy05qx7ViO1I3Xx9wL6RnuFkKSFueQcU+EIwVRQFUX/Q2gQ6tcyz3q77eDA2fiY+9c71HVPDFKPbK7dDHGl6eoAFjbYHb+kK8+8+V/wAQWyIjRXtSGRRJEM1aRDajIMDoDSxdwQgEB2kJAPYAc5Nc7Ub56iMICK3T4HGhjjHnLMT328V0PFfJrNJGV2ATdg8UTxUi6NINPtYd3hQRqXOWIHJNJjiUXdA7Uuit1/pkauFKF02jlOdrfpWzDnxwf1xsy6nDkyR/0pUyoh6EvVbas2B7b2PH0xW5+o6dL7pzlpNf7zSX5v8AwWdp0HbRlXvnMuPuk7Qf5pM/VG+MaNGP0995Z3+XRrrQsYPDs7KWHEAw0EP3c+tLwKWS5zVs31GKqIPagUWBiYwAo7seafPFNr4KTKX4z0jjAB9lpPiXuwrKLQr1rHqS1kdjGpl2smP7tx2/6rVqce/T/oZsfEmMm9lwzKfXnvXDUWu0bBYa7pdzqnU04tIiWlAcZ4BGMbj7dqGcoYo3NipSphh0Zol3ocM8V08TCYhxsPY45rz3qGWGepR9iot7rYSYrk0NEBXugTYUZDNWQyM+neiKHF9mUMKXUKAjMluQPrwcfvWDFkrUOxOJ1KxhTwnsAfauhGRoUjlDblLpVccAHPyopSTjaC3cFbBq7x6hLHJuKNIVQrjEYy2M+v3fywT2qlG0Tcu2WkOoTvbJKxkjDjO1jzj0q3hipV2LxT3wU2qsqL3q+3tnIYzyIvDugJCfWtUPT5SXshb1MEydDdR3kCXMUviRyp5Sp4pMsbhLa1VD4yUlaBXT+lrq31n4y51NpoE3bV2+Ygn+0/LtW16peLZGPIrxfVdlg2h229mkJIJ9aHy2ugtp0GgWT2UvwojjuAp2tLlgT/FL87hNWrQrPieSFRlTB606BhiukvNUu3nmVg6pGNqgjkfM1pyatZOIrgmPE4rks9Xtmy8vfPt2rNOMZRHJkTSY1IeUoPEwIy3uBk/zXkPVJXl22C0rJ5GO1cwoA+rtX1Ow1gxWl88cZjDbcA4PP+q36bDinC5RsHkAK9CkNMiiIZFXRDeLHiLntnmr9gZfdGD0vJdxahafCzeGocSeXnAHP/n51jhjWTKuDNDmVDdt+rLJ08O6t2huAP70XKn6e1bHoct3F2jS1XRwk1iwiKTPMI/k/B5o5Y3GP1dF2q5J721rcMtxJHG2AwVyoJAPcA/OlJtOkRvimQ9Sty9i8VuCrLEQmWz6YFPwzqdsiVRpCd1SyeOwLTzDxlfHghsk+4OOfXsa9HFRc9yXBzvIl9NcjA6KiuIOnLdZwULlnCEdge1cvWuMs/0+xv06ax8lsZzkhwDj1FI2jLObsrZKkkj09aJWuymVras1lcgYLJ94UrVZseHHukS6VkabrrQWQl7/AAVJG0oc5qQlCrJdo5WmvW+s28j2SubfJXe67d3vgVg1nqccD2QVsByo6W0i22V25jPOB6V5XNeRuTfIMZV2QtX1/TdOJW4uFD7chB3NXi0+TKvpRbd9Cq12/fVtSlu5MqG4VfwqOwrv4MEcUFENKkV1bQjYVaKM0RDeAf1BuOAPWowMnQyei7N7GF7u+zEsw224l43DuSP8UzSwW5yAxRa5YXLGqxvcPjBwFJ+98h7+pra5cqKDBbU9RSa4PiruQE44rleq5HJLHFi8jXQZ9J6/bX8EWm7m8eCMlg4/uXOAQfWqwXLHb7DxSTVBLJgrxz7U1DLKm40mxnuPiJ7WFphzvZBmtMM2SKqLYLUe2iRcReHBvbjdwgHr/wCUEJXKkGmQH8q471oRTK+5lMfmBwR2NNVVyCA/V2uS26iNOZZtw34HlAx/nmuZmg8+Wv4Y/uySW4FdC09tUuWRziGNdzn+BWfVZvDAGUq4QzOn7W1s7L4WGMIobIyeTnvXn9RKc3vYMeezrehYeWbyEE5NZKbI+BV9V36X+rvJEwMcYCKR64716DRYniwpP3DgqRTZ+dakGYp6LM0RSNhVpFjA+yvpoanqDaneIptLY4RWXIeT+QKk1xRNtsdMi201t8PeWcFwmMBlGGHz+tIjHJF3CVBuJR6p07p0Sq+n3k8MeebbHbjv7Z579614tRkk6nH9QNoBdRWK6RehIomMTpuAY+vr/H61i1uO8ql8mXLGpA1pms3Fh1Ta3UAysRwyD1Q/3D+fyrRgUYY25EhLYrY7NO13TtTA+FulZ/wMNrfkD3o3imo764Yfnxbtt8ki5jDja5ZTn0q4S+CZcbmuGdJzHJYsJGCtCP6Z/Fn0oI2slpdjFUVb6QEdR9U22kKUWF7iX8IO1R9TXWxaac1u6RnWsw5G1B2CMnXE9yx32kMcWCThmYgY/Kh1MVix2g1kbdAxd302s6mmyPG7yomf8muXDJHEnKQ7dtVh/wBJaNbWNvIjMZJXILN2/SuDrNQ88ty6Ep7nbLLULYQxeJESAO5B5FZovcqJJfAvesdWuZZI7VbqQqoJdVbGfrWzR6eKuUkFBXywXUFuFBJ9BXRb4tjLobWhaHaWelW0UkKvIUDOzLyWPevNZ80smRysU0nyxSV6wcZo0Q2X2HemRRD6K6R0j/8AG6csbPGJBGHkPu7cn96W3yHHgtHbYCeaJIKyFLMxA37SSeAPanRjyC3QuOvNSY3KRRNgxoWZvm3p+g/zSdQlKSj8GPK7kkCPT8ElzqKsqtIzvt2j1JpeRfTtQM+fpQ6tN6NsraJSzymTuWzxn6U/FqZ4cfjXKKzenYcvM7v8y4jsJol2pqT7R2Ei5oXli+4F49F4+IZJJfn/AJs0a2ZZA5vHdxyAIxj/ACKLfapRokvT4TluySlL83x/Tr9iun6f0q4laW5to5ZCcl5TuJ/WnLU5ktqfAyGiwY/uoh3+laV4DwG1tjGVwUCDmkz8sux8YRj0gC0nQbPT+o5dzeIgz4I/DnnH1rieoZpbdi/UTkb3bQqltwigwZRx2xXJc2lRKB/qHqCa30uRMKsjHYp9c10tBgjlmvwKj9ToW0zO8jM7FmJzk+tdeWNR66HKkMLpvQobGyjmljD3Ui7i7Lnbn0Fec1meU5tJ8Izye4MLe8hMK+I4DAYIrlSg74HRmq5ERXukhhmjiii16Ythe9R6ZasPLLdxIfoWFMfEWymfSsuPEIUYAOAKzroNEC9fGV9B3p8EWDWu6nDY2jTSHOD5FB5Y+grQ2scdzETmKzWZmuJJJ5TmSRiWNc+MnKTbM/bCnoHpTUL2KLUVl+EgHmik25Z2B7ge3FFNc9jYYnJ7uhqWk92sgivGibPGUjKnP5k1bgqtGra1zZ1mGGxVxBI0jEKTmmpcllJqtzcR+WEjc3AJGTTq9kUR7XSbi7VPi7q4d/XY+xf0FSW2K5JtJV5oVtEjMAysq72ctk1x82ixT5/yC8cQS1HX0tVLIFliAzu3e3vXNyaGUZ7GIladIW2oX8+pXjTSHAJJVR2UV19Jh8XER0Y0FHTWhItql7cw75JOYww4ArF6nrZOeyPSETbb46D6CSK5tk7Y24I9jXAaDXKopLt1iuHRmAIOKKMW10LaFPivaJGszVpEYQdCFV6y0UyMFT4yPJY4A5opJ7HQLH1d6tp0byEXJdQSdyISP1ocenyyS+kwy9W0kXt38lVLf21xbvNbSrIp/vYHtitMcUoOpqjassckd0WK7XdYGp6ixVz4EfliGeD7n8/2rLqJObpdIzSdsjafpzavqNvaLyJHAOPb1qaaCcuelyLlJrhdvhD/ANKsngtYrazzFDFGEAU4GAMCs+WUU/qOmqSo9fWxgZGmkyQcjzZxiixZFK0kWaz+D5WaUkHtsXP8irjvfSFohXDw7CIxIW92Ix+n/tPgpXbLKyS3+IuIxj7wNPb2qyIs0jcDheKS2mERr+M+DPvIG6PaoPcmqvoGQktbBkhvQE27fDlCjgdyrfuP0q9fH/UhL5Rjwdcm3TvT091H8TJCoQcKH4ya5Wq1ccT2RfIc5t8IYVgzLZRxOArou1l+lcHK90m0CuqKbXL0aaxmEvhKVzgHGfyqYcbyuqJV9C2vr+4vbqS4lmkLOc8se1d7HjWOKikPUUkca6qDPVZAk6GWCLV1vruBZ47bzCN+xY9s++K1YMPlunRzvUpzWHbD3GNq2uRaxHBYLBHbK7+eSEBSARgKDTcWklhUpp2zj6XB5MsfJFJJvoAepfjun55NOtriUW1wniGQ95R2x8sduKz5M0si57PSRxqN0DyTEduKRsFuHIy/sksFluJNQmXypwv7f7opLx4XXcn+yFY47tR/tX7v/ob66gI0wiYTbgAH1965vgtnQKe/uGmRt7HhSK244KJAZbqCLToQl+zAoQu7aSD3waY3BLkGUkuWQ5+vNDQ4e4k3ewhY/wAUUXFrhgrJF9Fl091DY6xepHZ+KThjloyAMUueSP3SRyKTpBBKwUZ5I+VDEYV966vFkHJBo64KFTqSJba8ElGYZJWhcfIsCp/Uii1sXPTpx7X/AAYUqlJBZb2sdtE0cbHvkbq8hqZb52ElRWa/efC2LTeKY2U8FavS4lOdSRO+heapqb6jcb55ZHC8Lk8AV6DFi02NUkaIRSR2g6fv7qJZoo0VH5UO2DikZdRhjKkwXkjZWgV1lEcbbatqiBh9n9lDfNdQzGUHyupTHOO/f61owZvFddnP1mLJlnFRMdY2l3p7R72It3yysp+8Owz71u+1QlHjigcWmeJ3Lsm9dXNtd6HYyLIs0gI2yqc5JHmrltJuzekAiirSLH99menGHoy1aQbHnHiZHt6f4FZNTl3TS+AMcFG2vd2EDjw0xnPuaGPI8qr+XEL47kYFaYoEW3X974Xw0aEcszkfTj+aXPl8icqukBlrG91P4r5OOcUucklQqT2rahi/Z7IINcC5AEsDAKR65B/g1nw8ydl4fvDEkJOfnWyKNZX3WdzfIU6KTQsX3UljI+u28gj3QF0eVieAFPP6j9qDLkS00oe/IueN73JEzVNWs7cCV5go9vWvJeGc3SQlu3wLfVtRe/lY7m8Ld5VJrtYsSxw/E0QhtVstumenluLq3k1AMEZsiMDuPnXP1Wr2pxgBLJbpDDNjAOCrDH/auX5JA7UJ0CvepGo2C5IFRonQUdMSS6bcJNBKA2c7WHB9wayZJuLujNJ82Ma1vre+iMkHDffQnlD7Vqx7cisYpWBX2iWcBiivQ+JdwQJnhhj29/n8qOUFHoJcgN6VcUE0fTGgSxr0xprRJ4UYtYsL3I8orlSjeRoBcnpnV8klvyFPiqGIqJytwTGpIKsMg8cVoSIAH2ladEWt7mNQn9QxED2wT/B/WlS45FZeOUDVmgiUYAyOPrWXIrMxYaNqa2OvWM3KgTBTg+jcfzRYYU7Dx8SQ6fjG2BDFCwx32DJ/PvTvDzdv+progXT+I2dqr8hT8aoFgzq6eeM4+9j9aHNHmwkL7rlnF9Go4jIOFHuOKwOEYtsBxinZw0XRlljjubh8ZYEIR6ZrJn1FJxiIyZb4QwGHhbCuMcFa4LTAOVzrlvDKUdH3DvgUxYJSVojmhXBDX0BRNxKsYC8w8uRS8qpAzfBdKqxgLIpQ+hrE430IIGp3QBUW7uHxgspIp+DG0HjiVsjTTHMjO5/7MT+9adjG8Gohf8NFGDslo+j+lnil6W0uQNIxNnGuc47D5VxsiksrX4gJ0ZuJY0k4iz/9MafCD+RifBV3XhgvJHCqyH72TTlFrmyrAvrqOa9tbdYB5RMWbd77SP8AdC3G+RWXoCdzplHVgwPIxRfZlLlCNrZpHaTyziRcrtO4H5jtTPFGAXKQ9LSQXFpBPgjxI1fGe2RmlGpco5Tj3LfkabEEHNZUpGzoW3ocglicVWVUrLQKX1qLm+jmlGMQnaCMgEk5NcPW5XCSS9xGZu6JloY/hxbOU3L2PbiufFTnO0Z69mQ9T1W8srQKmJFU/eGcV1Iekqa3MZHG2B13qV1c3DSyytub8PAq/HHH9KQ9Y4r2CuPpLUG7Wj/pXpbgvcLcy0tOkL4Jt+HkUn5VnnKLfYDtlinSmpOuHgyB2JpL2J8Mm0jSdA6hOxZogM+wp8c2KKrcWkzK/Z1eDk8UX2nF8l0zqn2fT/ecD8xVfacfyXtYw+mNPlsNAhs28xgyuRzxk4/euXqJRlltFdHO7GJD707H0MXRBlHf505dAlXe2cdyBHKPIWGT7UhUpFyVo1fpTT2YM8qk/WtUcriqUQNn4nROndMjH/MP1FR5JP8AhK2L5Lq0jSK2jiiO6NFwp+VJbdjV0cbgUyDBZQ6mm5JF9SOKmXotA5d5jtxISCYzkg+x7/xXF1ePdyKzLiwautWieaONYwQG5Oa0aHDCMrYuGNvlhxPJpd30/wCHFGPGdAB5fWuxKfjtt8IZaQEnQLdThpAx9yK85m1cXNuhMsrscT65eIcKYx9EFd37LjNFnCTqDURyJR+lV9mxfBV0cJuoNRx/zfvQrDj/AJSbmV7dRakWx43703w40uES2QLnqTUw+BMP0pkccPgrcyCOpNTaRgZ+KKUYpXRNzGl0DfTS6BbNLtczSNv3DO7kiuLrYKWRv4CizOuxLBqEiRjyjB5+Yp2lbnjTY1FbIo4PvWpMEg3KggjHcgVnl2WAV5qN3HdyRrM21XIAz6ZrRGTozt8s5T6hdGBz4pyBwc1cJPekUmMvpRfG6ctHkJLfCLJnPrx/ukZ5OM+DRHo7XIGBTYvkjKa9Qe1XkKBjVI1a2uEI8rKQR8iD/qsGVFsXelwpNKfEyduMUG5xaoTlk1whg2f9OW2CEgBKRrcsnjEts1v4kM+cenpXHtoo/9k=" 
         width={40} 
         height={40} 
         alt="placeholder" 
         className='startup-card_img'/>
      </Link>

      <div className='flex-between gap-3 mt-5'>
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className='text-16-medium'>{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>
           Details
          </Link>
        </Button>
      </div>
    </li>
  )
}

export default StartupCard
