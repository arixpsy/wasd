import IconButton from '@/components/IconButton'
import { IoMdSettings } from 'react-icons/io'

const Header = () => {
  return (
    <div className='flex h-[100px] justify-between'>
      <svg
        className='h-full w-auto dark:text-white'
        viewBox='0 0 640 360'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0)'>
          <path
            fill='currentColor'
            className='logo-text'
            d='M172.294 273H117.094L109.414 145.32V122.28H103.654V145.32L95.9738 273H40.7738L35.0138 105H63.8138L67.6538 232.68V254.28H73.4138V232.68L81.0938 105H131.974L139.654 232.68V254.28H145.414V232.68L149.254 105H178.054L172.294 273ZM282.047 237H224.927L216.767 273H183.647L223.727 105H283.247L323.327 273H290.207L282.047 237ZM231.647 206.76H275.087L255.647 120.84H251.327L231.647 206.76ZM429.24 156.36C429.24 149.64 426.6 143.8 421.32 138.84C416.2 133.88 408.92 131.4 399.48 131.4C391.48 131.4 385.16 133.08 380.52 136.44C375.88 139.64 373.56 144.04 373.56 149.64C373.56 152.52 374.12 155.16 375.24 157.56C376.36 159.8 378.28 161.88 381 163.8C383.88 165.56 387.56 167.16 392.04 168.6C396.68 170.04 402.52 171.4 409.56 172.68C427.16 175.88 440.6 181.24 449.88 188.76C459.16 196.28 463.8 207.4 463.8 222.12V225C463.8 232.84 462.36 239.96 459.48 246.36C456.76 252.6 452.76 257.96 447.48 262.44C442.2 266.92 435.8 270.36 428.28 272.76C420.76 275.16 412.28 276.36 402.84 276.36C391.8 276.36 382.04 274.84 373.56 271.8C365.24 268.6 358.28 264.28 352.68 258.84C347.08 253.24 342.84 246.76 339.96 239.4C337.08 231.88 335.64 223.72 335.64 214.92V207.72H367.32V213.48C367.32 223.56 370.2 231.64 375.96 237.72C381.88 243.64 391 246.6 403.32 246.6C412.92 246.6 420.04 244.52 424.68 240.36C429.32 236.2 431.64 231.24 431.64 225.48C431.64 222.76 431.16 220.2 430.2 217.8C429.24 215.24 427.56 213 425.16 211.08C422.76 209 419.48 207.16 415.32 205.56C411.16 203.96 405.88 202.6 399.48 201.48C391 200.04 383.24 198.2 376.2 195.96C369.16 193.56 363 190.44 357.72 186.6C352.6 182.76 348.6 177.96 345.72 172.2C342.84 166.44 341.4 159.4 341.4 151.08V149.64C341.4 142.76 342.76 136.44 345.48 130.68C348.36 124.76 352.28 119.64 357.24 115.32C362.36 111 368.44 107.64 375.48 105.24C382.68 102.84 390.68 101.64 399.48 101.64C409.4 101.64 418.2 103.08 425.88 105.96C433.56 108.68 439.96 112.44 445.08 117.24C450.36 122.04 454.28 127.56 456.84 133.8C459.56 140.04 460.92 146.6 460.92 153.48V162.12H429.24V156.36ZM484.993 105H545.953C566.753 105 582.193 109.88 592.273 119.64C602.353 129.24 607.393 144.2 607.393 164.52V213.48C607.393 233.8 602.353 248.84 592.273 258.6C582.193 268.2 566.753 273 545.953 273H484.993V242.52H500.833V135.24H484.993V105ZM545.953 242.76C556.993 242.76 564.673 240.2 568.993 235.08C573.473 229.8 575.713 221.64 575.713 210.6V164.52C575.713 154.92 573.473 147.64 568.993 142.68C564.673 137.72 556.993 135.24 545.953 135.24H532.513V242.76H545.953Z'
          />
          <g className='logo-arrow'>
            <path d='M107 57L139.043 105.75H74.9571L107 57Z' fill='#E58B88' />
            <path
              d='M187 222L235.75 189.957L235.75 254.043L187 222Z'
              fill='#9DABDD'
            />
            <path
              d='M402 295L369.957 246.25L434.043 246.25L402 295Z'
              fill='#70AE98'
            />
            <path
              d='M549 189L500.25 221.043L500.25 156.957L549 189Z'
              fill='#ECBE7A'
            />
          </g>
        </g>
      </svg>

      <div className='flex items-center'>
        <IconButton>
          <IoMdSettings />
        </IconButton>
      </div>
    </div>
  )
}

export default Header
